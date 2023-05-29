import { Component } from 'react'
import Taro from "@tarojs/taro";
import {View, Text, Image, Input} from '@tarojs/components'


import './index.scss'

export default class Index extends Component {
  componentDidMount () {
    if (Taro.getStorageSync('Cookies').length !== 0){
      console.log(123)
      Taro.switchTab({
        url: '/pages/bilibili/index'
      })
    }
    console.log(Taro.getStorageSync('Cookies'))
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  state = {}

  register = () => {
    Taro.navigateTo({
      url: '../register/index'
    })
  }

  find_pwd = () => {
    Taro.navigateTo({
      url: '../find_pwd/index'
    })
  }

  login = () => {
    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/login',
      header: {
        'content-type': 'application/json'
      },
      method:"POST",
      data:{
        "uore":this.account.value,
        "password":this.password.value
      },
      success: (res) => {
        if(res.data.ifSuccess){
          let cookies = res.header['Set-Cookie'].replace(/,/g, ';')
          console.log('=======', cookies)
          Taro.setStorageSync('Cookies', cookies)
          Taro.switchTab({
            url: '/pages/bilibili/index'
          })
        }
        else {
          Taro.showModal({
            title: 'Tip:',
            content: 'The account or password is incorrect.',
            showCancel:false,
          })
        }
        console.log(res.data)
      }
    })
  }

  render () {
    return (
      <View className='content'>
        <View className='row-input'>
          <Image mode='aspectFit' src='https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a1714171-183a-4753-b538-8fabcab0d8b6/b4dc6deb-b506-4f79-820f-8254fb1ed4bf.png'></Image>
          <Input placeholder='Username or Email' maxlength='18' ref={c => this.account = c} />
        </View>
        <View className='row-input'>
          <Image mode='aspectFit' src='https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a1714171-183a-4753-b538-8fabcab0d8b6/a8677dbc-1b40-4c25-b401-32316d8705df.png'></Image>
          <Input type='password' placeholder='Please enter your password' maxlength='18' ref={c => this.password = c} />
        </View>
        <View className='login-btn' onClick={this.login}>
          Login
        </View>
        <View className='function-link'>
          <Text onClick={this.register}>Registration</Text>
          <Text onClick={this.find_pwd}>Find password</Text>
        </View>
      </View>
    )
  }
}
