import React from "react"
import { FlatList } from "react-native";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Item from "./components/Item";

export default function Cart({ header, detail, items }) {
    return (
        <>
            <FlatList
                data={items.list}
                renderItem={Item}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => {
                    return <>
                        <Header {...header} />
                        <Detail {...detail} />
                    </>
                }}

            />
        </>
    )
}
