import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import qrcode from '../../../static/qrcode.png'

import './index.scss'

export default class Index extends Component {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    return (
      <View className='container'>
        <View className='qrCodeView'>
          <Image mode='aspectFit' src={qrcode}></Image>
          <Text>Wechat Scan add developer wechat</Text>
        </View>
        <View id='developerView'>
          <View class='developerItemView'>
            <View>Developer Team:</View>
            <View>GRP18</View>
          </View>
          <View class='developerItemView'>
            <View>School:</View>
            <View>UNNC</View>
          </View>
          <View class='developerItemView'>
            <View>Contact number:</View>
            <View>12345</View>
          </View>
          <View class='developerItemView'>
            <View>Contact wechat:</View>
            <View>666</View>
          </View>
          <View class='developerItemView'>
            <View>Contact email:</View>
            <View>unnc@nottingham.edu.cn</View>
          </View>

        </View>

      </View>
    )
  }
}
