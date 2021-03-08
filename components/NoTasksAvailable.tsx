import React from "react"
import {View, StyleSheet, Alert} from "react-native"
import AppButton from "./AppButton"
import AppText from "./AppText"
import Card from "./Card" 
import colors from '../utils/colors'

const NoTasksAvailable = () => {
  return (
    <>
      <View style={styles.smallCardsContainer}>
        <Card cardNameStyle={styles.cardName} count={0} cardName="Total Tasks" />
        <Card cardNameStyle={styles.cardName} count={0} cardName="Active Tasks" />
      </View>
      <View style={styles.smallCardsContainer}>
        <Card cardNameStyle={styles.cardName} count={0} cardName="Tasks Done" />
        <Card cardNameStyle={styles.cardName} count={0} cardName="Active High Priority" />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <AppText style={styles.nothing}>Nothing here</AppText>
        <AppText style={styles.subText}>Just like your crush's replies</AppText>
        <View>
          <AppButton
            style={{fontSize: 12, fontFamily: "bold"}}
            title="start with a new task"
            width="80%"
            onPress={() => Alert.alert("Yoo..., new task screen is not implemeted yet")}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cardName: {
    fontSize: 11,
    fontFamily: "bold"
},
  nothing: {
    fontFamily: "bold",
    color: colors.dark,
    textTransform: "uppercase",
    fontSize: 15,
  },
  smallCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  subText: {
    color: colors.secondary,
    fontSize: 14,
    marginVertical: 0,
  },
})

export default NoTasksAvailable
