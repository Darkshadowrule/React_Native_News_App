import React from 'react';
import { View,Text,FlatList,TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'

class Country extends React.Component{
    renderSeperator()
    {
        return(
            <View
            style={{height:1,width:'100%',backgroundColor:'black'}}>

            </View>
        )
    }
    actionOnRow(item) {
        Actions.categorySelect({country:item.value})
     }
     

    render()
    {
       
        return(
                
                <FlatList 
                 data={[{key:'All',value:'All'},{key: 'India',value:'in'}, {key: 'United States',value:'us'}
                 ,{key: 'United Kingdom',value:'gb'}
                 ,{key: 'Germany',value:'de'},
                 {key: 'France',value:'fr'},{key: 'Egypt',value:'eg'},{key: 'Italy',value:'it'},{key: 'Japan',value:'jp'}
                 ,{key: 'Australia',value:'au'},{key: 'Austria',value:'at'},{key: 'Israel',value:'il'}
                ,{key: 'Brazil',value:'br'},{key: 'Canada',value:'ca'},{key: 'China',value:'cn'},{key: 'South Africa',value:'za'}
                 ,{key: 'New Zealand',value:'nz'},{key: 'Switzerland',value:'ch'}]}
                 renderItem={({item}) =>   <TouchableOpacity onPress={ () => this.actionOnRow(item)}>
                 <Text style ={{fontSize: 25, marginLeft:10, marginTop:10}}>{item.key}</Text>
                 </TouchableOpacity>}
                 ItemSeparatorComponent={this.renderSeperator}
                />

        
        )
    }
}
export default Country

