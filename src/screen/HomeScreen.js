import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../layout/Header';
import Body from '../layout/Body';


function HomeScreen(props) {
    return (
        <View style={styles.container} >
            <Body />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 15,
        paddingVertical: 40
    },
})

export default HomeScreen;