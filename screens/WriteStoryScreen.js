import * as React from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
constructor(props){
    super(props)
    this.state = {
        title : " ",
        author : " ",
        writeStory: " "
    }
}

submitStory = async()=>{
    db.collection("transactions").add({
        "title" : this.state.title,
        "author" : this.state.author,
        "story" : this.state.writeStory
    })
    return Alert.alert("Your Story /has Been Submitted.")
}

    render(){
        return(
            <View style = {styles.container}>
                <KeyboardAvoidingView>
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Title of the story"}
                onChangeText = {(text)=>{
                    this.setState({
                    title : text
                    })
                }} />
                <TextInput
                style = {styles.inputBox}
                placeholder = {"Author of the story"}
                onChangeText = {(text)=>{
                    this.setState({
                        author : text
                    })
                }} />
                <TextInput
                style = {styles.inputBox2}
                placeholder = {"Write the story"}
                multiline = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        writeStory:text
                    })
                }} />
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.submitStory();
                }}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightblue",
    },
    inputBox:{
        backgroundColor:"yellow",
        marginTop:"2%",
        width:"90%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:"5%",
        borderWidth:2,
        borderColor:'blue',
        borderRadius:5
    },
    inputBox2:{
        backgroundColor:"yellow",
        marginTop:"2%",
        width:"90%",
        height:"50%",
        justifyContent:'center',
        alignItems:'center',
        marginLeft:"5%",
        borderWidth:2,
        borderColor:'blue',
        borderRadius:5
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"yellow",
        width:"20%",
        borderWidth:2,
        marginTop:"5%",
        height:"10%",
        marginLeft:"38%",
        borderRadius:5
    }
})