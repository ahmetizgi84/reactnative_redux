import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Button } from './index'
import { useSelector, useDispatch } from 'react-redux'
import { decreaseCounter, increaseCounter } from '../redux/actions/actions'

const { width } = Dimensions.get('screen')

const Buttons = () => {
    const dispatch = useDispatch()
    const { counter } = useSelector(state => state.globalState)

    const { container, counterText } = styles
    return (
        <View style={container}>
            <Button plus callback={increaseCounter(dispatch)} />
            <Text style={counterText}>{counter}</Text>
            <Button minus callback={decreaseCounter(dispatch)} />
        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: width - 75,
        justifyContent: "space-between",
        alignItems: "center"
    },

    counterText: {
        fontSize: 36,
        fontWeight: "bold",
        color: '#232323'
    }
})