import React from "react"
import {View, StyleSheet, Alert} from "react-native"
import AppButton from "./AppButton"
import AppText from "./AppText"
import Card from "./Card" 
import {Colors, Typography} from '../styles/'

const NoTasksAvailable = () => {
  return (
    <>
      <View style={styles.smallCardsContainer}>
        <Card count={0} cardName="Total Tasks" />
        <Card count={0} cardName="Active Tasks" />
      </View>
      <View style={styles.smallCardsContainer}>
        <Card count={0} cardName="Tasks Done" />
        <Card count={0} cardName="Active High Priority" />
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
            // style={{fontSize: 12, fontFamily: "bold"}}
            style={Typography.SMALL_BOLD_TEXT}
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
  nothing: {
    ...Typography.MEDIUM_BOLD_TEXT,
    color: Colors.dark,
    textTransform: "uppercase",
  },
  smallCardsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  subText: {
    ...Typography.MEDIUM_REGULAR_TEXT,
    color: Colors.secondary,
    fontSize: 14,
    marginVertical: 0,
  },
})

export default NoTasksAvailable
