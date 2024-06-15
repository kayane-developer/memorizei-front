import { Image, StyleSheet } from "react-native";
import CardBottom from "@/src/assets/cardBottom.png";
import { Box } from "native-base";

export default function CardTopComponent(){
    return(
        <Box>
            <Image 
                source={CardBottom} 
                alt={'cardBotton'} 
                style={styles.cardBottom}
            />
        </Box>
    )
}

const styles = StyleSheet.create({
    cardBottom: {
      resizeMode:'contain',
      position: 'absolute',
      marginTop: '141%',
      marginLeft: '-50%'
  },
  })