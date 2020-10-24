import * as React from 'react';
import {TouchableOpacity, View, Text, TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native';

export default class MyHeader extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:0.2,
        width:"100%",
        height:"10%",
        backgroundColor:"lightgreen",
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:50,
        fontWeight:"bold",
        fontStyle:"italic",
        color:"blue"
    }
})