import { StyleSheet, Text, View, Pressable, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

const ChangePassword = (props) => {
    const { navigation } = props;
    const [hover, SetHover] = useState(false);
    const [hover1, SetHover1] = useState(false);

    const isHover = () => {
        SetHover(!hover);
        console.log(hover)
    }

    const isHover1 = () => {
        SetHover1(!hover1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.v}>
                <Image style={styles.image1} source={require('../../../../media/images/vector.png')} />
                <View style={styles.ipContainer}>

                    <TextInput style={styles.txtInput} placeholder='Old Password :' />
                    <Image
                        source={require('../../../../media/images/visibility.png')}
                        style={styles.iconEye}
                    />
                </View>
            </View>

            <View style={styles.v2}>
                <Image style={styles.image1} source={require('../../../../media/images/vector.png')} />
                <View style={styles.ipContainer}>

                    <TextInput style={styles.txtInput} placeholder='New password :' />
                    <Image
                        source={require('../../../../media/images/visibility.png')}
                        style={styles.iconEye}
                    />
                </View>
            </View>

            <View style={styles.v3}>
                <Image style={styles.image1} source={require('../../../../media/images/vector.png')} />
                <View style={styles.ipContainer}>

                    <TextInput style={styles.txtInput} placeholder='Confirm password :' />
                    <Image
                        source={require('../../../../media/images/visibility.png')}
                        style={styles.iconEye}
                    />
                </View>
            </View>
            <Pressable onPress={isHover} style={() => hover ? styles.confirm1 : styles.confirm11}
                title='Update Profile' >
                {hover ?
                    <Text style={styles.updateText}>Confirm</Text>
                    :
                    <Text style={styles.updateText2}>Confirm</Text>}

            </Pressable>
            <Pressable onPress={isHover1} style={() => hover1 ? styles.confirm2 : styles.confirm22}
                title='Update Profile' >
                {hover1 ?
                    <Text style={styles.updateText}>Back To Sign In</Text>
                    :
                    <Text style={styles.updateText2}>Back To Sign In</Text>}
            </Pressable>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    v: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    txtInput: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#F3F3F3',
        borderRadius: 5,
        margin: 20,
        padding: 10,
        height: 40,
        width: '100%',
        backgroundColor: '#F3F3F3'
    },
    iconEye: {
        position: 'absolute',
        right: 10,
        top: 30,
    },
    ipContainer: {
        position: 'relative',
        width: '90%',
        top: 50,

    },
    iconEye1: {
        position: 'absolute',
        right: 3,
    },
    image1: {
        position: 'absolute',
        top: 90,
    },
    v2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        top : 30,
    },
    v3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        top: 10,
    },
    container: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
    },
    confirm1: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#FF5E00',
        marginTop: 555,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirm11: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#FF5E00',
        marginTop: 555,
        alignItems: 'center',
        justifyContent: 'center',
    },
    updateText: {
        height: 22,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.165,
        color: '#fff'

    },
    updateText2: {
        height: 22,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: -0.165,
        color: '#000'

    },
    confirm2: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderRadius: 30,
        marginTop: 615,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5E00',

    },
    confirm22: {
        position: 'absolute',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#FF5E00',
        backgroundColor: '#fff',
        marginTop: 615,
        alignItems: 'center',
        justifyContent: 'center',

    },
})