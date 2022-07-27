import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
    margin-top: 16px;
    background-color:  ${props => props.bg || "#2A9F85"};
    padding-vertical: 16px;
    border-radius: 6px;
`

export const TextButton = styled.Text`
    text-align: center;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 26px;
    font-family: "MontserratBold"; 
`
