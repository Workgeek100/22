import * as React from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize';

export default class WriteStoryScreen extends React.Component {
constructor(props){
    super(props)
    this.state = {
        title : " ",
        author : " ",
        writtenStory: " "
    }
}

submitStory = ()=>{
    db.collection("submissions").add({
        title : this.state.title,
        author : this.state.author,
        story : this.state.writtenStory
    })
    this.setState({
        title : " ",
        author : " ",
        writtenStory : " "
    })
    Alert.alert("Your story has been submitted.")
}

    render(){
        return(
            <View style = {styles.container}>
                <KeyboardAvoidingView>
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Story title"}
                onChangeText = {(text)=>{
                    this.setState({
                    title : text
                    })
                }} />
                <TextInput
                style = {styles.inputBox}
                placeholder = {"Story author"}
                onChangeText = {(text)=>{
                    this.setState({
                        author : text
                    })
                }} />
                <TextInput
                style = {styles.inputBox2}
                placeholder = {"Write your story"}
                multiline = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        writeStory:text
                    })
                }} />
                <TouchableOpacity 
                style = {styles.button}
                onPress = {this.submitStory}>
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : "white",
    },
    inputBox:{
        backgroundColor:"white",
        marginTop:"5%",
        width:"90%",
        height:"10%",
        justifyContent:'center',
        alignItems:'center',
        marginLeft:"5%",
        borderWidth:RFValue(2),
        borderColor:'black',
        borderRadius:RFValue(5)
    },
    inputBox2:{
        backgroundColor:"white",
        marginTop:"5%",
        width:"90%",
        height:RFValue(200),
        justifyContent:'center',
        alignItems:'center',
        marginLeft:"5%",
        borderWidth:RFValue(2),
        borderColor:'black',
        borderRadius:RFValue(5)
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"lightgreen",
        width:"20%",
        borderWidth:RFValue(2),
        marginTop:"5%",
        height:"8%",
        marginLeft:"38%",
        borderRadius:RFValue(5)
    }
})