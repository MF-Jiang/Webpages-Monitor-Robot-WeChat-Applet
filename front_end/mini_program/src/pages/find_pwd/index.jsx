import { Component } from 'react'
import Taro from '@tarojs/taro';
import {View, Input, Text} from '@tarojs/components'
import {OsCountdown} from "ossaui";


import './index.scss'


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
      url: 'http://127.0.0.1:5000/api/auth/find_password/captcha',
      header: {
        'content-type': 'application/json'
      },
      method:"POST",
      data:{
        "uoe":this.email.value
      },
      success: () => {
        this.setState({showCd:true})
        console.log("success",this.state.showCd)
      }
    })

  }

  submit_Data = () => {
    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/find_password',
      header: {
        'content-type': 'application/json'
      },
      method:"POST",
      data:{
        "uoe":this.email.value,
        "captcha":this.code.value,
      },
      success: (res) => {
        if (res.data.ifSuccess){
          Taro.showModal({
            title: 'Tip:',
            content: res.data.data,
            showCancel:false,
            success: () => {
              Taro.navigateTo({
                url: '../login/index'
              })
            }
          })
        }
        else {
          Taro.showModal({
            title: 'Tip:',
            content: res.data.message,
            showCancel:false,
          })
        }
        console.log(res.data)
      }
    })
  }

  render () {
    return(
      <View className='content'>
        <View className='row-input'>
          <Text>Email</Text>
          <View className='input-box'>
            <Input placeholder='Please enter your email' maxLength='20' ref={c => this.email = c} />
          </View>
        </View>
        <View className='row-input2'>
          <Text>Verification code</Text>
          <View className='input-box2'>
            <Input className='input2' placeholder='Please enter the code' maxLength='6' ref={c => this.code = c} />
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
        <View className='register-btn' onClick={this.submit_Data}>
        Retrieve password
        </View>
      </View>
    )
  }
}
