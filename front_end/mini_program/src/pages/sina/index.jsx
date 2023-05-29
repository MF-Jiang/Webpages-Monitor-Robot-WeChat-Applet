import { Component } from 'react'
import { View, Text, Picker, Input, Icon, ScrollView, Image } from '@tarojs/components'
import Taro from "@tarojs/taro"
import { OsSwitch, OsStepper, OsLoading, OsButton } from 'ossaui'
import { Router } from "tarojs-router-next"
import ReloadIcon from '../../static/reload.png'

import './index.scss'
import NewsItem from '../../components/SinanewsItem/NewsItem'

export default class Index extends Component {

  state = { monitorcheck: false, keyword: '', minutes: 0, hours: 0, days: 0, time: '', run: false, firstuse: true, content: [], loading: false }

  componentDidMount() {
    const bi = Taro.getStorageSync('State_sina')
    const c = Taro.getStorageSync('Cookies')
    console.log(bi)
    //this.setState({...bi})
    if (bi.run === true){
      Taro.request({
        url: 'http://127.0.0.1:5000/api/sina/extract',
        header: {
          'content-type': 'application/json', // 默认值
          'Cookie':c
        },
        method:"POST",
        success: (res) => {
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
    Taro.setStorageSync('State_sina', this.state)
  }

  openmonitor = () => {
    this.setState({ monitorcheck: true })
  }

  closemonitor = () => {
    if (this.state.keyword === '' && this.keyWordElement.value === '') {
      this.setState({ minutes: 0, hours: 0, days: 0, })
    }
    this.setState({ monitorcheck: false })
  }

  handleChange(minutes) {
    this.setState({
      minutes
    })
  }

  handleChange1(hours) {
    this.setState({
      hours
    })
  }

  handleChange2(days) {
    this.setState({
      days
    })
  }

  submitmonitor = () => {
    const { minutes, hours, days } = this.state
    if ((days == 0 && hours == 0 && minutes == 0) || (this.keyWordElement.value == '' && this.state.keyword == '')) {
      Taro.showModal({
        title: 'Tips',
        content: 'Please enter a valid time and subject',
        showCancel: false,
      })
      return
    }

    if (this.keyWordElement.value != this.state.keyword) {
      this.setState({ content: [] })
    }

    if (this.keyWordElement.value == '') {
      this.keyWordElement.value = this.state.keyword
    }

    const d = days == 0 ? '' : `${days}d`
    const h = hours == 0 ? '' : `${hours}h`
    const m = minutes == 0 ? '' : `${minutes}mins`
    const new_time = d + h + m

    this.setState({ keyword: this.keyWordElement.value, time: new_time, run: true, monitorcheck: false, firstuse: false, loading: true })
    const c = Taro.getStorageSync('Cookies')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/sina/start',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'Cookie': c
      },
      data: {
        "start": true,
        "topic": this.keyWordElement.value,
        "days": this.state.days,
        "hours": this.state.hours,
        "minutes": this.state.minutes
      },
      success: () => {
        Taro.request({
          url: 'http://127.0.0.1:5000/api/sina/extract',
          method: "POST",
          header: {
            'content-type': 'application/json',
            'Cookie': c
          },
          success: (res) => {
            this.setState({ content: this.state.content.concat(res.data.info), loading: false })
            console.log(res.data.info)
          }
        })
      }
    })
  }

  runChange = () => {
    if ((this.state.keyword == '') || (this.state.time == '')) {
      Taro.showModal({
        title: 'Tips',
        content: 'Please enter a valid time and subject',
        showCancel: false,
      })
      //console.log(this.state.run)
      return
    } else {
      if (this.state.run) {//现在是run要变成不run
        const c = Taro.getStorageSync('Cookies')
        Taro.request({
          url: 'http://127.0.0.1:5000/api/sina/start',
          method: "POST",
          header: {
            'content-type': 'application/json',
            'Cookie': c
          },
          data: {
            "start": false,
            "topic": this.state.keyword,
            "days": this.state.days,
            "hours": this.state.hours,
            "minutes": this.state.minutes
          },
        })
      } else {//现在是不run,重启run
        this.setState({ loading: true })
        const c = Taro.getStorageSync('Cookies')
        Taro.request({
          url: 'http://127.0.0.1:5000/api/sina/start',
          method: "POST",
          header: {
            'content-type': 'application/json',
            'Cookie': c
          },
          data: {
            "start": true,
            "topic": this.state.keyword,
            "days": this.state.days,
            "hours": this.state.hours,
            "minutes": this.state.minutes
          },
          success: () => {
            const c = Taro.getStorageSync('Cookies')
            Taro.request({
              url: 'http://127.0.0.1:5000/api/sina/extract',
              method: "POST",
              header: {
                'content-type': 'application/json',
                'Cookie': c
              },
              success: (res) => {
                this.setState({ content: res.data.info, loading: false })
                console.log(res.data.info)
              }
            })
          }
        })

      }
      this.setState({
        run: !this.state.run
      })
    }

  }

  newshandleClick = news => {
    const { id, url, news_content, title, media, upload_time } = news

    Router.navigate(
      { url: '/pages/newsinfo/news' },
      {
        // url 参数，自动拼接
        params: { id: id, url: url, title: title, upload_time: upload_time, media: media },
        // 可携带其他数据，任意类型
        data: news_content,
      }
    )
  }

  reloadData = () => {
    if (this.state.run === false) {
      Taro.showModal({
        title: 'Tips',
        content: 'Please enable monitoring first',
        showCancel: false,
      })
      return
    }

    this.setState({ loading: true })
    console.log("pull down")
    const c = Taro.getStorageSync('Cookies')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/sina/extract',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'Cookie': c
      },
      success: (res) => {
        this.setState({ content: this.state.content.concat(res.data.info), loading: false })
        console.log(res.data.info)
      }
    })
  }

  render() {
    const scrollTop = 0
    const Threshold = 0
    const scrollStyle = {
      height: '600px',
    }

    return (
      <View>
        <View className='formationbox'>
          <View className='SinaPart'>
            <OsSwitch className='s1' color='blue' checked={this.state.run} onChange={this.runChange}></OsSwitch>
            <OsButton disabled={this.state.run} shape='round' bdColor='#00FFFF' bgColor='#00FFFF'
              onClick={this.openmonitor}
            >{this.state.keyword === '' ? "New monitor" : "Edit monitor"}</OsButton>
            <View className='topic'>Topic: {this.state.keyword}</View>
            <View className='r_time'>Refresh Interval: {this.state.time}</View>
            {this.state.run && !this.state.loading && (<View className='s2'>
              <Image style='width:25px; height:25px;' onClick={this.reloadData} src={ReloadIcon}></Image>
            </View>)}
          </View>
        </View>



        <View>
          {!this.state.loading && (
            <ScrollView
              className='ScrollView'
              scrollY
              scrollWithAnimation
              scrollTop={scrollTop}
              style={scrollStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
            // onScrollToUpper={this.reloadData}
            >
              {this.state.firstuse && (<View className='first_text'>Welcome to Sina news monitor!</View>)}
              <View>
                {
                  this.state.content && this.state.content.map(news => <NewsItem key={news.id} news={news} NewsonClick={this.newshandleClick} />)
                }
              </View>
            </ScrollView>
          )}
        </View>

        {this.state.loading && (
          <OsLoading className='loadingstyle' color='blue' size='100'></OsLoading>
        )}

        <Picker mode='selector' onChange={this.onOrderChange}>
        </Picker>
        {
          this.state.monitorcheck && (
            <View className='reply-input-wrapper'>
              <View className='t1'>Sina</View>
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
              <OsButton className='b1' onClick={this.closemonitor} shape='round' bdColor='#00FFFF' bgColor='#00FFFF'>Close</OsButton>
              <OsButton className='b2' shape='round' bdColor='#00FFFF' bgColor='#00FFFF' onClick={this.submitmonitor}>Submit</OsButton>
            </View>
          )
        }
      </View>
    )
  }
}
