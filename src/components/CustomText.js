import React from "react";
import { StyleSheet, Text } from "react-native";

export default function CustomText({ children, style }) {
    let styleDefault = styles.textRegular

    if (style?.fontWeight === 'bold') {
        styleDefault = styles.textBold
    }

    return <Text style={[styleDefault, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textBold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})