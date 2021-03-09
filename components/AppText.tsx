import React from "react"
import {Text, StyleSheet} from "react-native"
import {Colors} from "../styles"

export interface AppTextProps {
    style: {};
    children: number |string;
}
const AppText: React.FC <AppTextProps> =({children, style, ...otherProps}) =>{
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  )
}

export default AppText
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: Colors.black,
        fontFamily: 'semiBold',
        marginVertical: 10,
    }
})
