import { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import Taro from "@tarojs/taro"

import './index.scss'

export default class Index extends Component {
  componentDidMount() {
    let cookie = Taro.getStorageSync('Cookies')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/user_menu',
      header: {
        'Cookie': cookie,
        'content-type': 'application/json'
      },
      method: "POST",

      success: (res) => {
        this.setState({ username: res.data.username, time: res.data.time, email: res.data.email })
        console.log(res.data)
      }
    })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  submit_Data = () => {
    let cookie = Taro.getStorageSync('Cookies')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/user_menu/change',
      header: {'Cookie': cookie,
        'content-type': 'application/json'
      },
      method: "POST",
      data: {
        "username": this.username.value,
        "email": this.email.value
      },
      success: () => {
        Taro.switchTab({
          url: '/pages/mine/user'
        })
      }
    })
  }

  state = { username: "", time: "", email: "" }
  render() {
    return (

      <View className='container'>
        <View id='developerView'>
          <View class='developerItemView'>
            <View>Username:</View>
            <Input type='text'
            style={{
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }} value={this.state.username} placeholder={this.state.username} placeholderStyle='color:black' ref={c => this.username = c}/>
          </View>


          <View className='developerItemView'>
            <View>Join Time:</View>
            <Text>{this.state.time}</Text>
          </View>
          <View className='developerItemView'>
            <View>Email:</View>
            <Input type='text' value={this.state.email} style={{
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }} placeholder={this.state.email} placeholderStyle='color:black' ref={c => this.email = c}/>
          </View>
          <View className='register-btn' onClick={this.submit_Data}>
            Confirm change
          </View>
        </View>
      </View>
    )
  }
}
