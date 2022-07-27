import React from "react";
import { ItemView, Name, Image, Price } from "./style";

export default function Item({ item, onPress }) {

    return (
        <ItemView onPress={onPress}>
            <Image source={item.image} />
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
        </ItemView>
    )
}