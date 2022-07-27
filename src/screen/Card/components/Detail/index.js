import React from "react";
import { Card, SubTitle, Farm, ImageFarm, NameFarm, Description, Price } from "./style";
import { Button, TextButton } from "../../../../components/Button"

export default function Detail({ subTitle, logo, name, description, price, button }) {

    function handleBuy() {
        console.log('teste')
    }

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
            <Button onPress={handleBuy}>
                <TextButton >{button}</TextButton>
            </Button>
        </>
    )
}
