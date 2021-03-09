import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Colors} from '../styles'
import AppText from './AppText'
import { Typography} from '../styles'

 interface CardProps {
    cardName: string;
    cardStyle?: {};
    cardNameStyle?: {};
    count: number;
    counterStyle?: {}
}

const Card: React.FC<CardProps>=({ cardName, cardStyle, cardNameStyle, count, counterStyle }) => {
    return (
        <View style={[styles.smallCard, cardStyle]}>
            <AppText style={[styles.counter, counterStyle]}>{count}</AppText>
            <AppText style={[Typography.SMALL_BOLD_TEXT, cardNameStyle]}>{cardName}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    counter: {
        ...Typography.LARGE_BOLD_TEXT,
        color: Colors.primary,
        marginVertical: 0
    },
    smallCard: {
        backgroundColor: Colors.white,
        width: "43%",
        height: 80,
        padding: 5,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginHorizontal: 5,
    },
})

export default Card
