import styled from 'styled-components/native'

export const Card = styled.View`
    padding-vertical: 8px;
    padding-horizontal: 16px;
`
export const Farm = styled.View`
    flex-direction: row;
    padding-vertical: 12px;
`
export const SubTitle = styled.Text`
    font-family: "MontserratBold"; 
    font-size: 26px;
    line-height: 42px;
    color: #464646;
`

export const ImageFarm = styled.Image`
    width: 32px;
    height: 32px;
`
export const NameFarm = styled.Text`
    font-family: "MontserratRegular";
    font-size: 16px;
    line-height: 26px;
    padding-left: 12px;
`

export const Description = styled.Text`
    font-family: "MontserratRegular";
    color: #A3A3A3;
    font-size: 16px;
    line-height: 26px;
`

export const Price = styled.Text`
    font-family: "MontserratBold"; 
    color: #2A9F85;
    font-size: 26px;
    line-height: 42px;
    margin-top: 8px;
`