import React, { Component } from 'react';
import { View, Linking,Image,Text} from 'react-native';
import {Card,CardSection,Button} from './common'
import moment from 'moment'
class Article extends Component {

render()
{ const {title,url,urlToImage,description,publishedAt}=this.props.article
   const time = moment(publishedAt || moment.now()).fromNow();
    return(
        <Card>
            <CardSection>
            <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.thumbnailStyle} source={{ uri: urlToImage || "http://izuum.com/noimage.jpg"}} />
        </View>
        <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{description || 'Read more...'}</Text>
        <View>
        <Text style={{margin: 5,fontStyle: 'italic',color: 'black',fontSize: 15}}>{time}</Text>
        </View>
        
        </View>
            </CardSection>
            <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
                Read Full News
            </Button>
            </CardSection>
        </Card>
    )
}
}
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1,
        flexWrap: 'wrap'

    },
    headerTextStyle:{
  fontSize: 18,
  flex: 1,
  flexWrap: 'wrap'
    },

    thumbnailStyle: {
         height: 110,
         width: 70
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}
export default Article;