import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../media/images/Arrow.png')}
            />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Edit Profile</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyAccount}>
                    <Image
                        source={require('../../../../media/images/iconAccount.png')}
                        style={{width: 20, height: 24}}
                    />
                    <Text style={styles.textAccount}>Change Password</Text>
                </View>

                <View style={styles.bodyAccount}>
                    <Image
                        source={require('../../../../media/images/iconKey.png')}
                        style={{width: 24, height: 24}}
                    />
                    <Text style={styles.textAccount}>My Cards</Text>
                </View>

                <View style={styles.bodyAccount}>
                    <Image
                        source={require('../../../../media/images/iconCard.png')}
                        style={{width: 24, height: 21}}
                    />
                    <Text style={styles.textAccount}>Notifications</Text>
                </View>

                <Text style={styles.textBody}>App Settings</Text>

                <View style={styles.bodyAccount}>
                    <Image
                        source={require('../../../../media/images/iconNotification.png')}
                        style={{width: 20, height: 24}}
                    />
                    <Text style={styles.textAccount}>Language</Text>
                </View>

                <View style={styles.bodyAccount}>
                    <Image
                        source={require('../../../../media/images/iconLanguage.png')}
                        style={{width: 24, height: 24}}
                    />
                    <Text style={styles.textAccount}>Payment</Text>
                </View>

                <View style={styles.bodyAccount}>
                    <Image
                        source={require('../../../../media/images/iconLogout.png')}
                        style={{width: 25, height: 25}}
                    />
                    <Text style={styles.textAccount}>Logout</Text>
                </View>
                
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    textBody:{
        fontWeight: '700',
        fontSize: 22,
        color: '#FF5E00',
        marginBottom: 25
    },
    textAccount:{
        fontSize: 18,
        fontWeight: '700',
        color: '#6D3805',
        marginLeft: 27
    },
    bodyAccount:{
        flexDirection: 'row',
        marginBottom: 25
    },
    body:{

    },
    textHeader: {
        marginBottom: 21,
        fontWeight: '700',
        fontSize: 24,
        color: '#FF5E00'
    },
    header: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 28,
        flexDirection: 'column',
    }
})