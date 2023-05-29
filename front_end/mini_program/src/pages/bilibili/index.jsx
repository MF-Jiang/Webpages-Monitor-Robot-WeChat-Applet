import { Component } from 'react'
import {Image, Input, Picker, ScrollView, Text, View} from '@tarojs/components'
import {OsButton, OsSwitch, OsStepper, OsIcon, OsLoading} from 'ossaui'
import Taro from "@tarojs/taro";

import './index.scss'
import ReloadIcon from "../../static/reload.png";



const selector = ['Latest Release','Most Clicks']

export default class Index extends Component {



  componentDidMount() {
    const bi = Taro.getStorageSync('State_bi')
    const c = Taro.getStorageSync('Cookies')
    console.log(bi)
    //this.setState({...bi})
    if (bi.v1 === true){
      Taro.request({
        url: 'http://127.0.0.1:5000/api/bilibili/extract',
        header: {
          'content-type': 'application/json', // 默认值
          'Cookie':c
        },
        method:"POST",
        success: (res) => {
          console.log(res.data.info)
          const new_content = [...res.data.info,...bi.content]
          this.setState({...bi,content:new_content,isLoading:false})
        }
      })
    }
    else {
      this.setState({...bi})
    }
  }

  componentDidUpdate() {
    Taro.setStorageSync('State_bi', this.state)
  }

  componentDidHide() {
  }


  state = {v1: false, openToast: false,minutes:0,hours:0,days:0,order:0,keyword:"",time:"",content:[],isLoading:false,selector:0,isFirst:true}

  setV1 = (v1) => {
    const {keyword,minutes,hours,days} = this.state
    const c = Taro.getStorageSync('Cookies')

    if (this.state.keyword === ''){
      Taro.showModal({
        title: 'Tips',
        content: 'Please enter a valid time and subject',
        showCancel:false,
      })
      return
    }
    else {
      this.setState({v1})
    }
    if(this.state.v1 === false){
      console.log("111")
      this.setState({isLoading:true,isFirst:false})
      Taro.request({
        url: 'http://127.0.0.1:5000/api/bilibili/start',
        header: {
          'content-type': 'application/json', // 默认值
          'Cookie':c
        },
        data:{
          "start": true,
          "topic": keyword,
          "days": days,
          "hours": hours,
          "minutes": minutes
        },
        method:"POST",
        success: () => {
          Taro.request({
            url: 'http://127.0.0.1:5000/api/bilibili/extract',
            header: {
              'content-type': 'application/json', // 默认值
              'Cookie':c
            },
            method:"POST",
            success: (res) => {
              console.log(res.data.info)
              this.setState({content:res.data.info,isLoading:false})
            }
          })
          console.log("success")
        }
      })
    }
    else {
      Taro.request({
        url: 'http://127.0.0.1:5000/api/bilibili/start',
        header: {
          'content-type': 'application/json', // 默认值
          'Cookie':c
        },
        data:{
          "start": false,
          "topic": keyword,
          "days": days,
          "hours": hours,
          "minutes": minutes
        },
        method:"POST",
        success: () => {
          console.log("Quit monitor")
        }
      })

    }
  }



  isOpenToast = () => {
    if (this.state.v1 === true){
      Taro.showModal({
        title: 'Tips',
        content: 'Please disable the monitor first',
        showCancel:false,
      })
      return
    }
    this.setState({openToast: true})
  }

  closeToast = () => {
    this.setState({openToast: false})
  }

  handleChange (minutes) {

    this.setState({
      minutes:parseInt(minutes)
    })
  }

  handleChange1 (hours) {
    this.setState({
      hours:parseInt(hours)
    })
  }

  handleChange2 (days) {
    this.setState({
      days:parseInt(days)
    })
  }

  onOrderChange = (evt) => {

    const {content} = this.state
    if(evt.detail.value === '1'){
      content.sort((a,b) => {
        // eslint-disable-next-line no-restricted-globals
        if (!isFinite(a.view_counts)){
          const num = a.view_counts.slice(0,-1)
          a.view_counts = num * 10000
          console.log(a.view_counts)
        }
        else if(!isFinite(b.view_counts)){
          const num = b.view_counts.slice(0,-1)
          b.view_counts = num * 10000
          console.log(b.view_counts)
        }
        return b.view_counts - a.view_counts
      })
      this.setState({selector:1})
    }
    else {
      content.sort((a,b) => {
        return Date.parse(b.upload_time.replace(/-/g, "/")) - Date.parse(a.upload_time.replace(/-/g, "/"));
      })
      this.setState({selector:0})
    }

    this.setState({
      order: evt.detail.value,
      content
    })
  }

  getData = () => {
    console.log(this.state.content)
    if (this.state.v1 === false){
      Taro.showModal({
        title: 'Tips',
        content: 'Please enable the monitor first',
        showCancel:false,
      })
      return
    }

    const c = Taro.getStorageSync('Cookies')

    this.setState({isLoading:true})
    Taro.request({
      url: 'http://127.0.0.1:5000/api/bilibili/extract',
      header: {
        'content-type': 'application/json', // 默认值
        'Cookie':c
      },
      method:"POST",
      success: (res) => {
        console.log(res.data.info)
        const new_content = [...res.data.info,...this.state.content]

        if (this.state.selector === 1){
          new_content.sort((a,b) => {
            if (!isFinite(a.view_counts)){
              const num = a.view_counts.slice(0,-1)
              a.view_counts = num * 10000
              console.log(a.view_counts)
            }
            else if(!isFinite(b.view_counts)){
              const num = b.view_counts.slice(0,-1)
              b.view_counts = num * 10000
              console.log(b.view_counts)
            }
            return b.view_counts - a.view_counts
          })
        }

        console.log(new_content)
        this.setState({content:new_content,isLoading:false})
      }
    })
  }

  submitData = () => {
    const {minutes,hours,days} = this.state
    if ((!days && !hours && !minutes) || (this.keyWordElement.value === '' && this.state.keyword === '')){
      Taro.showModal({
        title: 'Tips',
        content: 'Please enter a valid time and subject',
        showCancel:false,
      })
      return
    }

    if (this.keyWordElement.value === ''){
      this.keyWordElement.value = this.state.keyword
    }

    const d = days === 0 ? '' : `${days}d`
    const h = hours === 0 ? '' : `${hours}h`
    const m = minutes === 0 ? '' : `${minutes}mins`
    const new_time = d+h+m

    this.setState({keyword:this.keyWordElement.value,openToast: false,time:new_time,isLoading:true,isFirst:false,v1:true})

    const c = Taro.getStorageSync('Cookies')
    console.log(c)
    Taro.request({
      url: 'http://127.0.0.1:5000/api/bilibili/start',
      header: {
        'content-type': 'application/json',
        'Cookie':c
      },
      data:{
        "start": true,
        "topic": this.keyWordElement.value,
        "days": days,
        "hours": hours,
        "minutes": minutes
      },
      method:"POST",
      success: () => {
        Taro.request({
          url: 'http://127.0.0.1:5000/api/bilibili/extract',
          header: {
            'content-type': 'application/json', // 默认值
            'Cookie':c,
          },
          method:"POST",
          success: (res) => {
            console.log(res.data.info)
            this.setState({content:res.data.info,isLoading:false})
          }
        })
        console.log("success")
      }
    })
  }

  onScrollToUpper() {}

  open_url_msg  = (url) => {
    return () => {
      Taro.showModal({
        title: 'Kindly Reminder',
        content: 'Due to restrictions on WeChat, please copy the link and open it in your web browser.',
        confirmText:'Copy url',
        cancelText:'Cancel',
        success: function (res) {
          if (res.confirm) {
            Taro.setClipboardData({
              data: url,
              success: (res1) => {
                Taro.getClipboardData({
                  success: (res1) => {
                    console.log(res1.data)
                  }
                })
              }
            })
          }
        }
      })
    }
  }



  render() {
    const scrollStyle = {
      height: '550px'
    }
    const scrollTop = 0
    const Threshold = 20
    return (
      <View className='index'>
        <OsButton shape='round' bdColor='#00FFFF' bgColor='#00FFFF'
          onClick={this.isOpenToast}
        >{this.state.keyword === '' ? "New monitor" : "Edit monitor"}</OsButton>
        <OsSwitch className='s1' checked={this.state.v1} onChange={this.setV1} onColor='#00FFFF'></OsSwitch>
        <View className='topic'>Topic: {this.state.keyword}</View>
        <View className='r_time'>Refresh Interval: {this.state.time}</View>
        <Picker
          mode='selector'
          range={selector}
          onChange={this.onOrderChange}
          className='pk'
        >
          <View className='order'>{selector[this.state.order]}<OsIcon type='pull-down-big' size={20}></OsIcon></View>
        </Picker>
        {this.state.content.length !== 0 ? <View className='s2'>
          <Image style='width:25px; height:25px;' onClick={this.getData} src={ReloadIcon}></Image>
        </View> : <View />}
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          onScroll={this.onScroll}
        >

          {this.state.isFirst === true ? <View className='first_text'> Welcome to Bilibili video monitor! </View> : this.state.isLoading === true ? (<OsLoading className='loading_img' size={120} color='blue'></OsLoading>) : this.state.content.length === 0 ? (<View></View>): this.state.content.map((item) => {
            return (
              <View className='li' key={item.id} onClick={this.open_url_msg(item.url)}>
                <Image className='imgA' src={item.image}></Image>
                <View className='video_data'>
                  <View className='video_title'>{item.title}</View>
                  <View className='view_area1'>
                    <OsIcon type='visible' className='view_icon' size={30}></OsIcon>
                    <Text className='view_data'>{item.view_counts}</Text>
                  </View>
                  <View className='view_area2'>
                    <OsIcon className='view_icon' type='user' size={30}></OsIcon>
                    <Text className='view_data'>{item.uploader}</Text>
                    <View className='upload_time'>{item.upload_time}</View>
                  </View>
                </View>
              </View>
            )
          })}

        </ScrollView>
        {
          this.state.openToast && (
            <View className='reply-input-wrapper'>
              <View className='t1'>Bilibili</View>
              <View className='t2' >Topic:</View>
              <Input className='input1' ref={c => this.keyWordElement = c} placeholder={this.state.keyword}></Input>
              <View className='t3' >Refresh Interval:</View>
              <Text>Minutes:</Text>
              <OsStepper
                min={0}
                max={60}
                step={1}
                value={this.state.minutes}
                onChange={this.handleChange.bind(this)}
              ></OsStepper>
              <Text>Hours:</Text>
              <OsStepper
                min={0}
                max={60}
                step={1}
                value={this.state.hours}
                onChange={this.handleChange1.bind(this)}
              ></OsStepper>
              <Text>Days:</Text>
              <OsStepper
                min={0}
                max={365}
                step={1}
                value={this.state.days}
                onChange={this.handleChange2.bind(this)}
              ></OsStepper>
              <OsButton className='b1' onClick={this.closeToast} shape='round' bdColor='#00FFFF' bgColor='#00FFFF'>Close</OsButton>
              <OsButton className='b2' shape='round' bdColor='#00FFFF' bgColor='#00FFFF' onClick={this.submitData}>Submit</OsButton>
            </View>
          )}
      </View>
    )
  }
}
