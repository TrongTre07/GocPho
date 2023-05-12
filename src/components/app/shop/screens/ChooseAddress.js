import { Button, StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const ChooseAddress = () => {
    return (
        <View style={styles.container}>
            <View style={styles.hoho}>
                <Image style={styles.Imageback}source={require('../../../../media/images/icBack.png')}/>
                <Text style={styles.text1}>Chọn địa chỉ nhận hàng</Text>
            </View>
            <Text style={styles.text2}>Địa chỉ</Text>
            <View style={styles.hihi}>
            <Text style={styles.text3}>Nguyễn Minh Trọng        (+84) 344 569 541     Sửa </Text>
            <Text style={styles.text4}>305/16 Đường Tân Sơn Nhì, Phường Tân Sơn Nhì,Quận Tân Phú,TP. Hồ Chí Minh</Text>
            </View>
            <Text style={styles.text5}>Mặc Định</Text>
            
            <Pressable>
            <View style={styles.hehe}>
            <Image style={styles.ImageNew} source={require('../../../../media/images/PlusIcon.png')}/>
            <Text style={styles.text6}>Thêm Địa Chỉ Mới</Text>
            </View>
            </Pressable>
            
        </View>
    )
}

export default ChooseAddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3137',
    },
    hoho:{
        flexDirection:'row',
        alignItems:'center',
    },
    Imageback:{
        with:25,
        height:21,
        marginLeft:10,
    },
    text1: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        borderColor: 'grey',
        backgroundColor: '#2D3137',
        marginLeft:10,
        height:40,
    },
    text2: {
        color: 'white',
        width:'100%',
        height:30,
        backgroundColor: '#484F59',
        justifyContent: 'center',
        textAlign:'left',
    },
    hihi:{
        backgroundColor: '#2D3137',
    },
    text3: {
        color: 'white',
        fontSize: 17,
        marginLeft:10,
    },
    text4: {
        color: 'white',
    },
    text5: {
        borderWidth: 1,
        borderColor: 'red',
        width: 80,
        textAlign: 'center',
        color: 'red',
        backgroundColor: '#2D3137',
        marginTop:5,
    },
    text6:{
        marginTop:5,
        backgroundColor:'#2D3137',
        borderColor: 'red',
        color: 'red',
        fontSize:18,
        height:30,
        justifyContent:'center',
    },
    ImageNew:{
        width:21,
        height:21,
     
    },
    hehe:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius: 1,
        borderWidth:1,
        textAlign: 'center',
        justifyContent:'center',
        backgroundColor:'#2D3137',
        height:80,
    },
})