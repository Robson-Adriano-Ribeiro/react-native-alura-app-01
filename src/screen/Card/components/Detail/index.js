import React from "react";
import { Button } from 'react-native';
import { Card, SubTitle, Farm, ImageFarm, NameFarm, Description, Price } from "./style";

export default function Detail({ subTitle, logo, name, description, price, button }) {
    return (
        <>
            <Card >
                <SubTitle>{subTitle}</SubTitle>
                <Farm>
                    <ImageFarm source={logo} />
                    <NameFarm>{name}</NameFarm>
                </Farm>
                <Description>{description}</Description>
                <Price>{price}</Price>
            </Card>
            <Button title={button} />
        </>
    )
}
