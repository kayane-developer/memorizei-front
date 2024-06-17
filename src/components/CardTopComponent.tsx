import { Image, StyleSheet } from "react-native";
import { Box } from "native-base";
import CardTop from "@/src/assets/cardTop.png";

export default function CardTopComponent(){
    return(
        <Image 
            source={CardTop} 
            alt={'cardTop'} 
            style={styles.cardTop}
        />
    )
}

const styles = StyleSheet.create({
    cardTop: {
      resizeMode: 'contain',
      marginTop: '-13%',
      position: 'absolute'
    }
  })