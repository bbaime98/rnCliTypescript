import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../utils/colors'
import AppText from './AppText'

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
            <AppText style={[styles.cardName, cardNameStyle]}>{cardName}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    cardName: {
        fontSize: 14,
        fontFamily: "bold"
    },
    counter: {
        color: colors.primary,
        fontFamily: "bold",
        fontSize: 25,
        marginVertical: 0
    },
    smallCard: {
        backgroundColor: colors.white,
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
