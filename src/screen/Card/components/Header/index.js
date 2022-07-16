import React from "react";
import { Image, StyleSheet, Dimensions } from 'react-native';
import imageHeader from '../../../../../assets/topo.png';
import CustomText from '../../../../components/CustomText';
import { ImageHeader, Title } from "./style";

const width = Dimensions.get('screen').width

export default function Header({ title }) {
    return (
        <>
            <ImageHeader source={imageHeader} />
            <Title>{title}</Title>
        </>
    )
}