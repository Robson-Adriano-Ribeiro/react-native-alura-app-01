import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

export const ImageHeader = styled.Image`
    width: 100%;
    height: ${578 / 768 * width}px;
`

export const Title = styled.Text`
    width: 100%;
    position: absolute;
    textAlign: center;
    fontSize: 16px;
    lineHeight: 26px;
    color: white;
    fontWeight: bold;
    padding: 16px;
`