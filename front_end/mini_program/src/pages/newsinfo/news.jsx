import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Router } from "tarojs-router-next"
import Taro from "@tarojs/taro"
import { OsButton } from 'ossaui'

import './news.scss'


export default class News extends Component {

    data = Router.getData()
    params = Router.getParams()

    url = this.params.url
    news_content = this.data
    title = this.params.title
    media = this.params.media
    upload_time = this.params.upload_time

    copyUrl=()=>{
        console.log(this.url)
        Taro.setClipboardData({
            data: this.url,
            success:function(res){
                Taro.getClipboardData({
                    success:function(res){
                        console.log(res.data)
                    }
                })
            }
        })
    }

    render() {

        // const data = Router.getData()
        // const params = Router.getParams()
        // // const params = getCurrentInstance().router?.params

        // let url = params.url
        // let news_content = data
        // let title = params.title
        // let media = params.media
        // let upload_time = params.upload_time
        // //console.log("2 "+id+" "+url+" "+news_content+" "+title+" "+media+" "+upload_time)        


        return (
            <View className='news'>
                <View className='title'>{this.title}</View>
                <View className='information'>{"Media: " + this.media + " Date: " + this.upload_time}</View>
                <View className='urltype' style='overflow:hidden; white-space:nowrap; text-overflow:ellipsis'>Original Website: {this.url}</View>
                <View><OsButton onClick={this.copyUrl} shape='round' bdColor='#00FFFF' bgColor='#00FFFF'>Copy url</OsButton></View>
                <View className='content'><Text userSelect>{this.news_content}</Text></View>
            </View>
        )
    }
}