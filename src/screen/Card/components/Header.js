import React from "react";
import { Image, StyleSheet, Dimensions } from 'react-native';
import topo from '../../../../assets/topo.png';
import CustomText from '../../../components/CustomText';

const width = Dimensions.get('screen').width

export default function Header({ title }) {
    return (
        <>
            <Image source={topo} style={style.header} />
            <CustomText style={style.title}>{title}</CustomText>
        </>
    )
}

const style = StyleSheet.create({
    header: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    }
})