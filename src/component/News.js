import React, { Component } from 'react';
import { FlatList,View,ActivityIndicator} from 'react-native';
import {getUSANews} from '../fetchNews'
import Article from './Article'
class News extends Component {
    state = {
        articles: [],
        loading:true,
        refreshing:true,
        url:""
    };
    componentDidMount()
    {   
        if(this.props.country=='All' && this.props.category=='All')
        {
            const url='https://newsapi.org/v2/top-headlines?language=en&pagesize=50&apiKey=49e02f0e80bc4fa5a498a275e7e9d99f'
            this.fetchNews(url)
            this.setState({
                url
            })
        }
        else if(this.props.country=='All' && this.props.category!='All')
        {
            const url=`https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&pagesize=50&apiKey=49e02f0e80bc4fa5a498a275e7e9d99f`
            this.fetchNews(url)    
            this.setState({
                url
            })   
        }
        else if(this.props.country!='All' && this.props.category=='All')
        {
            const url=`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&pagesize=50&apiKey=49e02f0e80bc4fa5a498a275e7e9d99f`
            this.fetchNews(url) 
            this.setState({
                url
            })  
        }
        else{
            const url=`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&pagesize=50&apiKey=49e02f0e80bc4fa5a498a275e7e9d99f`
            this.fetchNews(url)
            this.setState({
                url
            })
        }
        
    }
    fetchNews = (url) => {
        getUSANews(url)
            .then(articles => {
                this.setState({ articles,loading:false,refreshing:false});
            })
            .catch((e) => {
                this.setState({ articles,loading:false,refreshing:false});
      });
    };
    
	handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.fetchNews(this.state.url));
	};
    render() {
        return (
            this.state.loading
            ?
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
                <ActivityIndicator size="large" color="#330066" animating/>
            </View>
            :
            <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} />}
                keyExtractor={item => item.title+item.url}
                refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh}
                
            />
        );
    }
}
export default News