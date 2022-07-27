import React from "react";
import { ItemView, Name, Image } from "./style";

export default function Item({ item: { name, image } }) {
    return (
        <ItemView>
            <Image source={image} />
            <Name>{name}</Name>
        </ItemView>
    )
}