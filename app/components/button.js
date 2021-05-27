import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Button as PaperButton } from 'react-native-paper';


const Button = (props) => {

    const { container, btnText } = styles
    return (
        <PaperButton mode="contained" style={container} onPress={props.callback}>
            <Text style={btnText}>
                {
                    props.plus ? "Arttır" : props.minus ? "Azalt" : null
                }
            </Text>
        </PaperButton>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
})
