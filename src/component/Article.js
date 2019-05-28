import React, { Component } from 'react';
import { View, Linking,Image,Text} from 'react-native';
import {Card,CardSection,Button} from './common'
class Article extends Component {

render()
{ const {title,url,urlToImage,description}=this.props.article

    return(
        <Card>
            <CardSection>
            <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.thumbnailStyle} source={{ uri: urlToImage}} />
        </View>
        <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{description}</Text>
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
         height: 100,
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