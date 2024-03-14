import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

function CommentScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Comment screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})
export default CommentScreen;