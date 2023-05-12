import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';


const ZaloPay = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <View style={ZaloPayS.container}>

            <View style={ZaloPayS.v}>
                <View style={ZaloPayS.v2}>
                    <Image style={ZaloPayS.img} source={require('../../../../media/images/Logo-ZaloPay.webp')} />
                </View>
                
                <View>
                    <Text style={ZaloPayS.text}>ZaloPay</Text>
                    <Text>Pay by account zaloPay</Text>
                </View>
                
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={[{ height: 20, width: 20 }]}
                    tintColors={{ true: '#1877f2', false: '#667080' }}
                />
            </View>

        </View>
    )
}

export default ZaloPay

const ZaloPayS = StyleSheet.create({
    v2: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 25,
        color: '#000',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    v: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    container: {
        padding: 20,
        flex: 1,
    },
})