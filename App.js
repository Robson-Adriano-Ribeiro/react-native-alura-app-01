import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import Card from './src/screen/Card';
import cartMock from './src/mocks/cart'

export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView >
        <StatusBar />
        <Card {...cartMock} />
      </SafeAreaView>
    );
  }
}