import { Component } from 'react'
import { View, Text, Icon } from '@tarojs/components'

import './GoogleItem.scss'

export default class NewsItem extends Component {

    NewsClick = () => {
        const { NewsonClick, news } = this.props
        NewsonClick && NewsonClick(news)
    }

    pdfClick = () => {
        const { pdfClick, news } = this.props
        pdfClick && pdfClick(news)
    }

    render() {
        const { news } = this.props

        return (
            <View className='NewsItem' >
                <View className='GoogleupPart' onClick={this.NewsClick}>
                    <View className='News-title' style='word-break:normal;
	word-wrap:break-word;
	display:-webkit-box;
	-webkit-line-clamp:2;
	overflow:hidden;
	-webkit-box-orient: vertical'>{news.title}</View>
                    {/* <View className='News-description' style='overflow:hidden; white-space:nowrap; text-overflow:ellipsis'>{news.news_content}</View>
                    <View className='News-data'>{news.media + " " + news.upload_time}</View> */}
                    <View className='News-description'>{news.content}</View>

                </View>
                {news.pdf && (<View><Icon type='download' news={news} onClick={this.pdfClick}></Icon></View>)}
                <View className='News-data'>Google Scholar</View>
            </View>
        )
    }
}
