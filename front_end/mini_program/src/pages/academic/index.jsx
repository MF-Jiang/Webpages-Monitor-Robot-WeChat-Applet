import { Component } from 'react'
import { View, Text, Picker, Input, Icon, ScrollView, Image } from '@tarojs/components'
import Taro from "@tarojs/taro"
import { OsSwitch, OsStepper, OsLoading, OsButton, OsIcon } from 'ossaui'
import ReloadIcon from '../../static/reloadIcon.png'

import './index.scss'
import GoogleItem from '../../components/GoogleItem/GoogleItem'
import BingItem from '../../components/BingItem/BingItem'
import AcademicItem from '../../components/AcademicItem/AcademicItem'

const selector = ['All', 'Google', 'Bing']

export default class Index extends Component {

  state = { monitorcheck: false, keyword: '', number: 0, numbertxt: '', minutes: 0, hours: 0, days: 0, time: '', run: false, firstuse: true, content: [], loading: false,order:0, selector:0 }

  componentDidMount() {
    const bi = Taro.getStorageSync('State_aca')
    const c = Taro.getStorageSync('Cookies')
    console.log(bi)
    //this.setState({...bi})
    if (bi.run === true){
      Taro.request({
        url: 'http://127.0.0.1:5000/api/google_scholar/extract',
        header: {
          'content-type': 'application/json', // 默认值
          'Cookie':c
        },
        data:{
          "web":this.state.order,
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
    Taro.setStorageSync('State_aca', this.state)
  }

  openmonitor = () => {
    this.setState({ monitorcheck: true })
  }

  closemonitor = () => {
    if (this.state.keyword === '' && this.keyWordElement.value === '') {
      this.setState({ minutes: 0, hours: 0, days: 0, number: 0 })
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

  handleChange3(number) {
    this.setState({
      number
    })
  }

  submitmonitor = () => {
    const { minutes, hours, days, number } = this.state
    if ((days == 0 && hours == 0 && minutes == 0) || (number == 0) || (this.keyWordElement.value === '' && this.state.keyword === '')) {
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
    // console.log(days)
    // console.log(typeof(days))
    // console.log(typeof(0))
    // console.log(days===0)
    const d = days == 0 ? '' : `${days}d`
    const h = hours == 0 ? '' : `${hours}h`
    const m = minutes == 0 ? '' : `${minutes}mins`
    const new_time = d + h + m
    const n = number == 0 ? '' : `${number}`

    this.setState({ keyword: this.keyWordElement.value, time: new_time, run: true, monitorcheck: false, firstuse: false, loading: true, numbertxt: n })
    const c = Taro.getStorageSync('Cookies')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/google_scholar/start',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'Cookie':c
      },
      data: {
        "start": true,
        "number": this.state.number,
        "topic": this.keyWordElement.value,
        "days": this.state.days,
        "hours": this.state.hours,
        "minutes": this.state.minutes
      },
      success: () => {
        const c = Taro.getStorageSync('Cookies')
        Taro.request({
          url: 'http://127.0.0.1:5000/api/google_scholar/extract',
          method: "POST",
          header: {
            'content-type': 'application/json',
            'Cookie':c
          },
          data:{
            "web":this.state.order,
          },
          success: (res) => {
            this.setState({ content: this.state.content.concat(res.data.info), loading: false })
            console.log(res.data.info)
            console.log(this.state.order)
          }
        })
      }
    })
  }

  runChange = () => {
    if ((this.state.keyword == '') || (this.state.time == '') || this.state.numbertxt == '') {
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
          url: 'http://127.0.0.1:5000/api/google_scholar/start',
          method: "POST",
          header: {
            'content-type': 'application/json',
            'Cookie':c
          },
          data: {
            "start": false,
            "number": this.state.number,
            "topic": this.state.keyword,
            "days": this.state.days,
            "hours": this.state.hours,
            "minutes": this.state.minutes
          },
        })
      } else {//现在是不run,重启run
        const c = Taro.getStorageSync('Cookies')
        Taro.request({
          url: 'http://127.0.0.1:5000/api/google_scholar/start',
          method: "POST",
          header: {
            'content-type': 'application/json',
            'Cookie':c
          },
          data: {
            "start": true,
            "number": this.state.number,
            "topic": this.state.keyword,
            "days": this.state.days,
            "hours": this.state.hours,
            "minutes": this.state.minutes
          },
          success: () => {
            const c = Taro.getStorageSync('Cookies')
            Taro.request({
              url: 'http://127.0.0.1:5000/api/google_scholar/extract',
              method: "POST",
              header: {
                'content-type': 'application/json',
                'Cookie':c
              },
              data:{
                "web":this.state.order,
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

    console.log(id, url, news_content, title, media, upload_time)
  }

  open_url_msg = news => {
    const { link } = news
    Taro.showModal({
      title: 'Kindly Reminder',
      content: 'Due to restrictions on WeChat, please copy the link and open it in your web browser.',
      confirmText: 'Copy url',
      cancelText: 'Cancel',
      success: function (res) {
        if (res.confirm) {
          Taro.setClipboardData({
            data: link,
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

  pdfcopylink = news => {
    const { pdf } = news
    Taro.showModal({
      title: 'Kindly Reminder',
      content: 'Due to restrictions on WeChat, please copy the link and open it in your web browser.',
      confirmText: 'Copy url',
      cancelText: 'Cancel',
      success: function (res) {
        if (res.confirm) {
          Taro.setClipboardData({
            data: pdf,
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

  reloadData = () => {
    if (this.state.run === false){
      Taro.showModal({
        title: 'Tips',
        content: 'Please enable the monitor first',
        showCancel:false,
      })
      return
    }

    this.setState({ loading: true })
    console.log("Pull down")
    const c = Taro.getStorageSync('Cookies')
    Taro.request({
      url: 'http://127.0.0.1:5000/api/google_scholar/extract',
      method: "POST",
      header: {
        'content-type': 'application/json',
        'Cookie':c
      },
      data:{
        "web":this.state.order,
      },
      success: (res) => {
        this.setState({ content: this.state.content.concat(res.data.info), loading: false })
        console.log(res.data.info)
      }
    })
  }

  onOrderChange =(evt)=>{
    if(evt.detail.value ==='2'){
      this.setState({selector:2})
    }else if(evt.detail.value ==='1'){
      this.setState({selector:1})
    }else{
      this.setState({selector:0})
    }
    this.setState({order:Number(evt.detail.value)})
  }

  render() {
    const scrollTop = 0
    const Threshold = 0
    const scrollStyle = {
      height: '550px',
    }

    return (
      <View>
        <View className='formationbox'>
          <View className='SinaPart'>
            <OsSwitch className='s1' color='blue' checked={this.state.run} onChange={this.runChange}></OsSwitch>
            {/* <AtButton className='newmonitor' disabled={this.state.run} type='default' size='normal' plain circle
              onClick={this.openmonitor}
            >{this.state.firstuse ? 'New Monitor' : 'Edit Monitor'}</AtButton> */}
            <OsButton disabled={this.state.run} shape='round' bdColor='#00FFFF' bgColor='#00FFFF'
          onClick={this.openmonitor}
        >{this.state.keyword === '' ? "New monitor" : "Edit monitor"}</OsButton>
            <View className='topic'>Topic: {this.state.keyword}</View>
            <View className='r_time'>Refresh Interval: {this.state.time}</View>
            <View className='r_time'>Limited Number: {this.state.numbertxt}</View>

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
            {this.state.firstuse && (<View className='first_text'>Welcome to Acadamic monitor!</View>)}
            {this.state.order===1 && (<View>
              {
                this.state.content && this.state.content.map(news => <GoogleItem key={news.id} news={news} NewsonClick={this.open_url_msg} pdfClick={this.pdfcopylink} />)
              }
            </View>)}
            {this.state.order===2 && (<View>
              {
                this.state.content && this.state.content.map(news => <BingItem key={news.id} news={news} NewsonClick={this.open_url_msg}/>)
              }
            </View>)}
            {this.state.order===0 && (<View>
              {
                this.state.content && this.state.content.map(news => <AcademicItem key={news.id} news={news} NewsonClick={this.open_url_msg} pdfClick={this.pdfcopylink}/>)
              }
            </View>)}
          </ScrollView>
          )}
        </View>

        {this.state.loading && (
          <OsLoading className='loadingstyle' color='blue' size='100'></OsLoading>
        )}

        {
          this.state.monitorcheck && (
            <View className='reply-input-wrapper'>
              <Picker
                mode='selector'
                range={selector}
                onChange={this.onOrderChange}
              >
                <View className='t1'> {selector[this.state.order]} <OsIcon type='pull-down-big' size={20}></OsIcon></View>
              </Picker>
              {/* <View className='t1'>Google Scholar</View> */}
              <View className='t2' >Topic:</View>
              <Input className='input1' ref={c => this.keyWordElement = c} placeholder={this.state.keyword}></Input>
              <View className='t4' >Limited numbers:</View>
              <OsStepper
                min={0}
                max={100}
                step={1}
                value={this.state.number}
                onChange={this.handleChange3.bind(this)}
              ></OsStepper>
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
