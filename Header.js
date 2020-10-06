import * as React from 'react';
import {TouchableOpacity, View, Text, TextInput, KeyboardAvoidingView, StyleSheet} from 'react-native';

export default class Header extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Story Hub</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"10%",
        backgroundColor:"orange",
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