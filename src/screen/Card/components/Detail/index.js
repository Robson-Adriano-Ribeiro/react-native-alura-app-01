import React from "react";
import { Card, SubTitle, Farm, ImageFarm, NameFarm, Description, ProductView, ProductText, Image } from "./style";
import { Button, TextButton } from "../../../../components/Button"

export default function Detail({ subTitle, logo, name, description, button, productName, price, productImage, onPress }) {

    return (
        <>
            <Card >
                <SubTitle>{subTitle}</SubTitle>
                <Farm>
                    <ImageFarm source={logo} />
                    <NameFarm>{name}</NameFarm>
                </Farm>

                <Description>{description}</Description>
                <ProductView>
                    {(productImage) ? <Image source={productImage} /> : <></>}
                    {(productName) ? <ProductText>{productName}</ProductText> : <></>}
                    <ProductText>{price}</ProductText>
                </ProductView>
            </Card>
            <></>
            <Button onPress={onPress}>
                <TextButton >{button}</TextButton>
            </Button>
        </>
    )
}
