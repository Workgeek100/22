import * as React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {SearchBar}from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
constructor(){
    super()
    this.state = {
        allStories : [],
        search : " ",
    }
}

updateSearch = (text)=>{
    this.setState({
        search: text
    })
}

retriveStories =async()=>{
    await db.collection("search").where("search","==",this,state,search).get();
}

    render(){
        return(
            <View style = {styles.container}>
                <SearchBar 
                placeholder = "Type Here..."
                onChangeText = {this.updateSearch}
                value = {search} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"lightblue"
    }
})