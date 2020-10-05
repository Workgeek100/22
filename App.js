import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigtor} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
    return(
      <View>
        <Text style = {styles.container}>Hi</Text>
        <TabNavigator />
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigtor({
  WriteStory:{screen: WriteStoryScreen},
  ReadStory:{screen: ReadStoryScreen}
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    console.log(routeName)
    if(routeName === "WriteStory"){
      return(
        <Image
        source={require("./assets/book.png")}
        style={{width:40, height:40}}
      />
      )
      
    }
    else if(routeName === "ReadStory"){
      return(
        <Image
        source={require("./assets/searchingbook.png")}
        style={{width:40, height:40}}
      />)
      
    }
  }
})
}
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
