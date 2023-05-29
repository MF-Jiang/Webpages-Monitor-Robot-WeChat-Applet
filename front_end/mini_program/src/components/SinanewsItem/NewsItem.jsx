import { Component } from 'react'
import { View } from '@tarojs/components'

import './NewsItem.scss'

export default class NewsItem extends Component {

    NewsClick = () => {
        const { NewsonClick, news } = this.props
        NewsonClick && NewsonClick(news)
    }

    render() {
        const { news } = this.props

        return (
            <View className='NewsItem' onClick={this.NewsClick}>
                <View className='News-title' style='overflow:hidden; white-space:nowrap; text-overflow:ellipsis'>{news.title}</View>
                <View className='News-description' style='overflow:hidden; white-space:nowrap; text-overflow:ellipsis'>{news.news_content}</View>
                <View className='News-data'>{news.media + " " + news.upload_time}</View>
            </View>
        )
    }
}