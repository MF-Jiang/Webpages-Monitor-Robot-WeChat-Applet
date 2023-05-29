import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import personalimg from '../../static/personal.png'
import rightimg from '../../static/right.png'
import settingimg from '../../static/setting.png'
import helpimg from '../../static/help.png'
import contactimg from '../../static/contact.png'
import logout from '../../static/logout.png'
import avatar from "../../static/avatar.png";

import './user.scss'

export default class Index extends Component {

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() {     let cookie = Taro.getStorageSync('Cookies')
    let upload_avatar = Taro.getStorageSync('tempFilePaths')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/auth/user_menu',
      header: {
        'Cookie': cookie,
        'content-type': 'application/json'
      },
      method: "POST",

      success: (res) => {
        this.setState({ username: res.data.username, time: res.data.time, email: res.data.email ,tempFilePaths:upload_avatar})

      }
    })}

  componentDidHide() { }

  state = { username: "", time: "", email: "",tempFilePaths:"" }

  render() {
    const contact = () => {
      Taro.navigateTo({ url: "/pages/mine/contact/index" })
    }

    const help = () => {
      Taro.navigateTo({ url: "/pages/mine/help/index" })
    }

    const setting = () => {
      Taro.navigateTo({ url: "/pages/mine/setting/index" })
    }

    const personal = () => {
      Taro.navigateTo({ url: "/pages/mine/personal/index" })
    }

    const Log_out = () => {

      Taro.showModal({
        title: 'Reminder',
        content: 'Sure you want to log out?',
        confirmText:'Confirm',
        cancelText:'Cancel',
        success: function (res) {
          if (res.confirm){
            Taro.reLaunch({
              url: '/pages/login/index',
            })
            Taro.removeStorageSync('Cookies')
            Taro.removeStorageSync('State_bi')
            Taro.removeStorageSync('State_aca')
            Taro.removeStorageSync('State_sina')
          }
        }
      })
    }

    const chooseImage = () => {
      console.log("img")
      Taro.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
        success: (res) => {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          this.setState({tempFilePaths:res.tempFilePaths})
          Taro.setStorageSync('tempFilePaths', res.tempFilePaths)
        }
      })
    }

    return (
      <View class='container'>
        <View class="partOne">
          <View class="userinfo">
            <Image class="userinfo-avatar" src={this.state.tempFilePaths.length === 0 ? avatar : this.state.tempFilePaths} mode="cover" onClick={chooseImage}></Image>
            <Text class="userinfo-nickname">{this.state.username}</Text>
          </View>
        </View>
        <View class="partTwo">
          <View class="item" onClick={personal}>
            <View class="itemname">
              <View ><Image src={personalimg} /></View>
              <View ><Text >Personal</Text></View>
            </View>
            <View class="right"><Image src={rightimg} /></View>
          </View>
          <View class="item" onClick={contact}>
            <View class="itemname">
              <View ><Image src={contactimg} /></View>
              <View ><Text >Contact</Text></View>
            </View>
            <View class="right"><Image src={rightimg} /></View>
          </View>
        </View>

        <View class="partThree">
          <View class="item" onClick={help}>
            <View class="itemname">
              <View ><Image src={helpimg} /></View>
              <View ><Text >Help</Text></View>
            </View>
            <View class="right"><Image src={rightimg} /></View>
          </View>
          <View class="item" onClick={setting}>
            <View class="itemname">
              <View ><Image src={settingimg} /></View>
              <View ><Text >Setting</Text></View>
            </View>
            <View class="right"><Image src={rightimg} /></View>
          </View>
          <View class="item" onClick={Log_out}>
            <View class="itemname">
              <View ><Image src={logout} /></View>
              <View ><Text >Logout</Text></View>
            </View>
            <View class="right"><Image src={rightimg} /></View>
          </View>
        </View>
      </View>


    )
  }
}
