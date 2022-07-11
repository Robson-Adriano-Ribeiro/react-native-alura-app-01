import React from "react"
import Detail from "./components/Detail";
import Header from "./components/Header";

export default function Cart({ header, detail }) {
    return (
        <>
            <Header {...header} />
            <Detail {...detail} />
        </>
    )
}
