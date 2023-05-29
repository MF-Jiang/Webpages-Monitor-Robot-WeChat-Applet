import { Component } from 'react'
import Taro from '@tarojs/taro';
import {View, Input, Text} from '@tarojs/components'


import './index.scss'
import {OsCountdown} from "ossaui";

export default class Index extends Component {
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  state = {showCd:false}

  register = () => {

  }

  getCode = () => {

    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/register/captcha',
      header: {
        'content-type': 'application/json'
      },
      method:"POST",
      data:{
        "email":this.email.value
      },
      success: (res) => {

        if(!res.data.ifSuccess){
          Taro.showModal({
            title:'Tip:',
            content:'Please enter the correct email.',
            showCancel:false
          })
        }else{
          this.setState({showCd:true})
        }
        console.log("success",this.state.showCd)
      }
    })

  }

  submit_Data = () => {
    if (this.password.value !== this.confirm_password.value){
      Taro.showModal({
        title: 'Tips:',
        content: 'Entered passwords differ.',
        showCancel:false,
      })
      return
    }
    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/register',
      header: {
        'content-type': 'application/json'
      },
      method:"POST",
      data:{
        "username":this.username.value,
        "email":this.email.value,
        "captcha":this.code.value,
        "password":this.password.value
      },
      success: (res) => {
        if (!res.data.ifSuccess){
          Taro.showModal({
            title: 'Tips:',
            content: res.data.message,
            showCancel:false,
          })
          return
        }
        Taro.navigateTo({
          url: '../login/index'
        })
        console.log(res.data)
      }
    })
  }

  render () {
    return(
      <View className='content'>
        <View className='row-input'>
          <Text>Username</Text>
          <View className='input-box'>
            <Input placeholder='Enter your username' maxLength='10' ref={c => this.username = c} />
          </View>
        </View>
        <View className='row-input'>
          <Text>Email</Text>
          <View className='input-box'>
            <Input placeholder='Enter your email' style={{
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }} maxLength='20' ref={c => this.email = c} type='email'
            />
          </View>
        </View>
        <View className='row-input2'>
          <Text>Verification code</Text>
          <View className='input-box2'>
            <Input className='input2' placeholder='Enter the code' maxLength='6' ref={c => this.code = c} />
            {
              !this.state.showCd ?
                <View className='code' onClick={this.getCode}>
                  <Text>CAPTCHA</Text>
                </View>
                :
                <OsCountdown className='cd2' remainTime={60000} onEnd={() => { setTimeout(() => { this.setState({showCd:false}) }, 1000) }}>
                  {f => <View>{Math.round(f.remainTime / 1000)}</View>}
                </OsCountdown>
            }
          </View>
        </View>
        <View className='row-input'>
          <Text>Password</Text>
          <View className='input-box'>
            <Input type='password' placeholder='Enter your password' maxLength='18' ref={c => this.password = c} />
          </View>
        </View>
        <View className='row-input'>
          <Text>Confirm password</Text>
          <View className='input-box'>
            <Input type='password' placeholder='Enter password again' maxLength='18' ref={c => this.confirm_password = c} />
          </View>
        </View>
        <View className='register-btn' onClick={this.submit_Data}>
          Register
        </View>
      </View>
    )
  }
}
