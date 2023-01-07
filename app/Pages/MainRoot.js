import React, { Component } from 'react'
import { SafeAreaView, View, Text , StyleSheet} from 'react-native'
import  Constants from 'expo-constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favorite from './Favorite'
import Settings from './Settings'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();


class MainRoot extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }} initialRouteName='Home' >
      <Tab.Screen options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create( {
  container:{
    flex: 1, 
    marginTop: Constants.statusBarheight,
  },
})

export default MainRoot
