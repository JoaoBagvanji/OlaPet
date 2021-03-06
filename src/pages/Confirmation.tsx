import React from "react";
import { StyleSheet, Text, View, SafeAreaView  } from "react-native";

import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import {useNavigation} from "@react-navigation/native";

export function Confirmation(){
    //Inicio da tipagem, estamos a atribuir o tipo de valor do navigate
    type Nav ={
        navigate: (value: string) =>void;
    }

    const { navigate } = useNavigation<Nav>()

    function handleMoveOn(){
        navigate('PetSelect')
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😻
                </Text>

                <Text style={styles.title}>
                    Pronto
                </Text>

                <Text style={styles.subtitle}>
                    Agora iremos iniciar a cuidar dos seus
                    queridos pets com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button title="Começar" onPress={handleMoveOn}/>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji:{
        fontSize:44
    },
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    footer:{
        width:"100%",
        paddingHorizontal:50,
        marginTop: 20
    }

})