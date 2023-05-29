import { Component } from 'react'
import { View, Text, Icon } from '@tarojs/components'

import './BingItem.scss'

export default class NewsItem extends Component {

    NewsClick = () => {
        const { NewsonClick, news } = this.props
        NewsonClick && NewsonClick(news)
    }

    render() {
        const { news } = this.props

        return (
            <View className='NewsItem' >
                <View className='GoogleupPart' onClick={this.NewsClick}>
                    <View className='News-title' style='word-break:normal;
	word-wrap:break-word;
	display:-webkit-box;
	-webkit-line-clamp:3;
	overflow:hidden;
	-webkit-box-orient: vertical'>{news.title}</View>
                    <View className='News-description'>{news.content}</View>
                    {/* <View className='News-data'>{news.url}</View> */}
                    <View className='News-data'>Bing Scholar</View>
                </View>
            </View>
        )
    }
}
