import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import MyHeader from './components/MyHeader';

export default class App extends React.Component {
  render(){
    return(
      <View style = {styles.container}>
        <MyHeader />
        <AppContainer />
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen: WriteStoryScreen},
  ReadStory:{screen: ReadStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon : ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName==="WriteStory"){
        return(
        <Image 
        source = {require("./assets/write.png")}
        style = {{width:40, height:40}}/>)
      }
      if(routeName==="ReadStory"){
        return(
        <Image
        source = {require("./assets/read.png")}
        style = {{width:40, height:40}} />)
      }
    }
  })
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
});
