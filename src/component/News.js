import React, { Component } from 'react';
import { FlatList} from 'react-native';
import {getUSANews} from '../fetchNews'
import Article from './Article'
class News extends Component {
    state = {
        articles: [],
    };
    componentWillMount()
    {   
        if(this.props.country=='All' && this.props.category=='All')
        {
            const url='https://newsapi.org/v2/top-headlines?language=en&pagesize=50&apiKey=Your_Api_key'
            this.fetchNews(url)
        }
        else if(this.props.country=='All' && this.props.category!='All')
        {
            const url=`https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&pagesize=50&apiKey=Your_Api_key`
            this.fetchNews(url)       
        }
        else if(this.props.country!='All' && this.props.category=='All')
        {
            const url=`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&pagesize=50&apiKey=Your_Api_key`
            this.fetchNews(url)   
        }
        else{
            const url=`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&pagesize=50&apiKey=Your_Api_key`
            this.fetchNews(url)
        }
        
    }
    fetchNews = (url) => {
        getUSANews(url)
            .then(articles => {
                this.setState({ articles});
            })
            .catch((e) => {
        console.log(e)
      });
    };
    render() {
        return (
            <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} />}
                keyExtractor={item => item.title+item.url}
            />
        );
    }
}
export default News