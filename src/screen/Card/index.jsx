import React, { useState } from "react"
import { Alert, FlatList, Text } from "react-native";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Item from "./components/Item";
import { TitleItem } from "./style";

export default function Cart({ header, detail, items }) {
    const [itemSelected, setItemSelected] = useState(null)
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("R$ 0,00")
    const [productImage, setProductImage] = useState(null)

    function handlePressItem(item) {
        setItemSelected(item)
        setItemToState(item)
    }

    function handleBuyItem() {
        if (!itemSelected) {
            Alert.alert(`Selecione um item para comprar`)
            return
        }
        Alert.alert(`Compra do ${itemSelected.name} realizada com sucesso!`)
        clearState()
    }

    function setItemToState(item) {
        setPrice(item.price)
        setProductName(item.name)
        setProductImage(item.image)
    }

    function clearState() {
        setItemSelected(null)
        setProductName("")
        setPrice("R$ 0,00")
        setProductImage(null)
    }

    return (
        <>
            <FlatList
                data={items.list}
                renderItem={({ item }) =>
                    <Item item={item} onPress={() => handlePressItem(item)} />}
                keyExtractor={({ name }) => name}
                extraData={itemSelected}
                ListHeaderComponent={() => {
                    return <>
                        <Header {...header} />
                        <Detail price={price} productName={productName} productImage={productImage} {...detail} onPress={handleBuyItem} />
                        <TitleItem>{items.title}</TitleItem>
                    </>
                }}
            />
        </>
    )
}
