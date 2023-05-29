import { Component } from 'react'
import { View } from '@tarojs/components'

import './AcademicItem.scss'
import GoogleItem from '../../components/GoogleItem/GoogleItem'
import BingItem from '../../components/BingItem/BingItem'

export default class AcademicItem extends Component{

    NewsClick = () => {
        const { NewsonClick, news } = this.props
        NewsonClick && NewsonClick(news)
    }

    pdfClick = () => {
        const { pdfClick, news } = this.props
        pdfClick && pdfClick(news)
    }

    render(){
        const {news} = this.props
        console.log()
        return(
            <View>
                {news.id.charAt(0)=='g' && (<View>
                    <GoogleItem key={news.id} news={news} NewsonClick={this.NewsClick} pdfClick={this.pdfClick} />
                </View>)}
                {news.id.charAt(0)=='b' && (<View>
                    <BingItem key={news.id} news={news} NewsonClick={this.NewsClick}/>
                </View>)}
            </View>
        )
    }

}
