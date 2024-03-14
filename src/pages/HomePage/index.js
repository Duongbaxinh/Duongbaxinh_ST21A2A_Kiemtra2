import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../redux/action';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

function HomePage(props) {
    const { count } = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <Text>{count}</Text>
            <Button title='Increment' onPress={() => dispatch({ type: 'increment' })} />
            <Button title='DecIncrement' onPress={() => dispatch({ type: 'decrement' })} />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HomePage;