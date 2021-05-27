import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Counter, UserList, Spacer } from '../components'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
    const { characterListLength } = useSelector(state => state.globalState)

    const { container } = styles
    return (
        <View style={container}>
            <UserList />
            <Spacer />
            <Text>Karakter Sayısı: {characterListLength}</Text>
            <Spacer />
            <Counter />
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    }
})
