import { Button, StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const ChooseAddress = () => {
    return (
        <View style={styles.container}>
            <View style={styles.hoho}>
                 
                <Text style={styles.text1}>Chọn địa chỉ nhận hàng</Text>
            </View>
            <Text style={styles.text2}>Địa chỉ</Text>
            <View style={styles.hihi}>
            <Text style={styles.text3}>Nguyễn Minh Trọng        (+84) 344 569 541     Sửa </Text>
            <Text style={styles.text4}>305/16 Đường Tân Sơn Nhì, Phường Tân Sơn Nhì,Quận Tân Phú,TP. Hồ Chí Minh</Text>
            </View>
            <Text style={styles.text5}>Mặc Định</Text>
            <Pressable>
            <Text style={styles.text6}>Thêm Địa Chỉ Mới</Text>
            </Pressable>
        </View>
    )
}



export default ChooseAddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    hoho:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',

    },
    text1: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'grey',
        backgroundColor: 'grey'
    },
    text2: {
        color: 'white',
        marginTop:5,
        marginBottom:5,
        backgroundColor: 'grey',

    },
    hihi:{
        backgroundColor: 'grey',
    },
    text3: {
        color: 'white',
        fontSize: 17,
    },
    text4: {
        color: 'white',
    },
    text5: {
        borderRadius: 1,
        borderWidth: 2,
        borderColor: 'red',
        width: 80,
        textAlign: 'center',
        color: 'red',
        backgroundColor: 'grey',
        marginTop:5,
    },
    text6:{
        marginTop:5,
        borderWidth:1,
        backgroundColor:'grey',
        borderColor: 'red',
        color: 'red',
        textAlign: 'center',
        fontSize:18,
        height:50,
        justifyContent:'center',
        
    },
})