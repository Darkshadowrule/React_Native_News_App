import React from 'react';
import {Stack,Scene,Router} from 'react-native-router-flux'
import Country from './component/Country'
import Category from './component/Category'
import News from './component/News'

const RouterComponent = () =>{
    return(
        <Router>
            <Stack key="root">
            <Scene key="countrySelect" component={Country} title="Choose Country" initial />
            <Scene key="categorySelect" component={Category} title="Choose Category" />
            <Scene key="newsDisplay" component={News} title="Your News is Here" />
            </Stack>
            
        </Router>
    )
}
export default RouterComponent