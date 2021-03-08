import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import AddIcon from 'react-native-vector-icons/Feather';

export interface OnPressProp {
    onPress: () => void
  }
const AddButton: React.FC<OnPressProp> = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AddIcon name="plus" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AddButton
