import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import softwareimg from '../../../static/software.png'

import './index.scss'

export default class Index extends Component {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    return (
      <View className='container'>
        <Image src={softwareimg} className="mine-avatar" />
        <View id='developerView'>
          <View class='developerItemView'>
            <Text>First, select a website you are interested in and click on its icon.</Text>
          </View>
          <View class='developerItemView'>
            <Text>Next, click the "New monitor" button and fill in the subject and refresh interval.</Text>
          </View>
          <View class='developerItemView'>
            <Text>Finally, once you have finished editing the monitor, click on the "Submit" button.</Text>
          </View>
          <View class='developerItemView1'>
            <Text>The software will start working and he will monitor the specified website for you, meanwhile, every certain refresh interval, you will receive an update alert of relevant content in your mailbox</Text>
          </View>

        </View>

      </View>
    )
  }
}
