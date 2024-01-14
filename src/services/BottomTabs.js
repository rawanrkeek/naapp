import colors from './appColors';

import {createMaterialBottomTabNavigator} from '@react-navigation/native/material-bottom-tabs';

import Dashboard  from "../screens/Dashboard/Dashboard";
import catalog from '../screens/catalog/Catalog';
import support from "../screens/Support/Support";
import Profile from "../screens/Profile/Profile";

const AppTabs = createMaterialBottomTabNavigator();

export const tabs=() => {
    return(
        <AppTabs.Navigator>
            <AppTabs.Screen name='dashboard' component={Dashboard}/>
            <AppTabs.Screen name='catalog' component={catalog}/>
            <AppTabs.Screen name='support' component={Support}/>
            <AppTabs.Screen name='Profile' component={Profile}/>
        </AppTabs.Navigator>
    )
}