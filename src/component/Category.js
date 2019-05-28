import React from 'react';
import { View,Text,FlatList,TouchableOpacity} from 'react-native'
import { Actions } from 'react-native-router-flux';
class Category extends React.Component{
    renderSeperator()
    {
        return(
            <View
            style={{height:1,width:'100%',backgroundColor:'black'}}>

            </View>
        )
    }
    actionOnRow(item) {
        Actions.newsDisplay({country:this.props.country,category:item.key})
     }
    render()
    {
       
        return(
                
                <FlatList 
                 data={[{key:'All'},{key:'business'},{key:'entertainment'},{key:'health'},{key:'science'},{key:'sports'},{key:'technology'}]}
                 renderItem={({item}) =>   <TouchableOpacity onPress={ () => this.actionOnRow(item)}>
                 <Text style ={{fontSize: 25, marginLeft:10, marginTop:10}}>{item.key}</Text>
                 </TouchableOpacity>}
                 ItemSeparatorComponent={this.renderSeperator}
                />

        
        )
    }
}
export default Category
     