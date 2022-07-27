import styled from 'styled-components/native'

export const ItemView = styled.View`
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: #ECECEC;
    padding-vertical: 16px;
    align-items: center;
`

export const Title = styled.Text`
    font-family: "MontserratBold"; 
    color: #464646;
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    margin-top: 32px;
    margin-bottom: 8px;
`

export const Name = styled.Text`
    font-family: "MontserratRegular"; 
    color: #464646;
    font-size: 16px;
    line-height: 26px;
    margin-left: 12px;
`

export const Image = styled.Image`
    width: 46px;
    height: 46px;
`