import React from "react";
import { Text, View, StyleSheet} from "react-native";
import { EnviromentButton } from "../components/EnviromenButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";


export function PetSelect(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>

                <Header />

                <Text style={styles.title}>
                    Em que ambiente
                </Text>

                <Text style={styles.subtitle}>
                    você quer colocar a seu animal?
                </Text>
            </View>
            
            <EnviromentButton title="cooking" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.backgroung,

    },
    header:{
        paddingHorizontal:30
    },
    title:{
        fontSize:17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight:20,
        marginTop:15
    },
    subtitle:{
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    }
})