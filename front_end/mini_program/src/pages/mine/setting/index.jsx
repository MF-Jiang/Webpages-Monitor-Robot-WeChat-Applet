import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Input, Text } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  submit_Data = () => {
    if (this.newpassword.value !== this.confirm_password.value) {
      Taro.showModal({
        title: 'Tip:',
        content: 'Entered passwords differ.',
        showCancel: false,
      })
    }

    let cookie = Taro.getStorageSync('Cookies')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/change_password',
      header: {'Cookie': cookie,
        'content-type': 'application/json'
      },
      method: "POST",
      data: {
        "old": this.password.value,
        "new": this.confirm_password.value
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  }

  render() {
    return (
      <View className='content'>

        <View className='row-input'>
          <Text>Original password</Text>
          <View className='input-box'>
            <Input type='password' placeholder='Enter the old password' maxLength='18' ref={c => this.password = c} />
          </View>
        </View>

        <View className='row-input'>
          <Text>New password</Text>
          <View className='input-box'>
            <Input type='password' placeholder='Enter new password' maxLength='18' ref={c => this.newpassword = c} />
          </View>
        </View>
        <View className='row-input'>
          <Text>Confirm password</Text>
          <View className='input-box'>
            <Input type='password' placeholder='Enter password again' maxLength='18' ref={c => this.confirm_password = c} />
          </View>
        </View>
        <View className='register-btn' onClick={this.submit_Data}>
          Confirm change
        </View>
      </View>
    )
  }
}
