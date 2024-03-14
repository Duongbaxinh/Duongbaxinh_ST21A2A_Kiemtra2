import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Bars3Icon, BellIcon, HomeIcon, UserGroupIcon, UserIcon, VideoCameraIcon, HeartIcon } from 'react-native-heroicons/outline';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';
import { icons } from '../../assets/icons';
import { images } from '../../assets/image';

function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_icon}>Logo</Text>
                <Image
                    source={{ uri: icons.message_icon }}
                    style={{ width: 30, height: 30 }}
                />
            </View>
            {/* ICON TAG */}
            <View style={styles.header_tag}>
                <HomeIcon />
                <UserGroupIcon />
                <UserIcon />
                <BellIcon />
                <VideoCameraIcon />
                <Bars3Icon />
            </View>
            {/* END ICON TAG */}

            {/*  */}
            <View style={styles.header_underIcon}>
                <Image
                    source={{ uri: images.profile }}
                    style={{ width: 80, height: 80, borderRadius: 20 }}
                />
                <TextInput
                    placeholder="Nhập văn bản"
                    onChangeText={(text) => console.log(text)}
                    style={{ backgroundColor: '#F6F6F6', flexGrow: 1, padding: 5, borderRadius: 10 }}
                />
                <TouchableOpacity onPress={() => console.log('Đã nhấp')}
                >
                    <MagnifyingGlassIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
        gap: 25
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_icon: {
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '700',
        color: 'blue'
    },
    header_tag: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_underIcon: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        gap: 5,
        alignItems: 'center'
    },

})
export default Header;