import React, { Component, createRef } from 'react'
import {
    TextInput,
    StyleSheet,
    View,
    Text
} from 'react-native'
import {
    Color
} from '../common'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class CustomInput extends  Component{
    
    render(){
        const{
            label,
            Iconname,
            errorText,
            errorTextColor,     
            ...props
        }= this.props
        return(
            <View>
                <View
                    style={styles.container}
                >
                    <MaterialIcons name={Iconname} size={20} color="white" />
                    <TextInput
                        {...props}
                        placeholder={label}
                        style={{
                            paddingLeft:10, 
                            color:"white"
                        }}
                        placeholderTextColor="white"
                    />
                </View>
                {errorText !=="" &&(
                    <Text 
                        style={{
                            marginTop: 4,
							marginLeft: 16,
							fontStyle: "italic",
							color: Color.red
                        }}
                    >
                        {errorText}
                    </Text>
                )}
            </View>
        )   
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        borderWidth:0.8,
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:6,
        alignItems:'center',
        borderColor:Color.white,
        marginTop:20
    },
})