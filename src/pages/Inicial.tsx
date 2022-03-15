import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";
import colors from "../styles/colors";
import wateringImg from '../assets/dog-init.png'
import fonts from "../styles/fonts";
import { Feather } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';

export function Inicial(){
    type Nav = {
        navigate: (value: string) => void;
    }
      
    const { navigate } = useNavigation<Nav>()
      
     
    const navigation = useNavigation();


    function handleStart(){
       navigate('UserIdentification');
    }
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.wrapper}>

                <Text style={styles.title}>
                    Aprenda como{'\n'}
                    cuidar do seu pet {'\n'}
                    de forma correcta
                </Text>

                <Image source={require('../assets/Dog.png')} style={styles.image}/>

                <Text style={styles.subtitle}>
                    Aprenda connosco a cuidar devidamente do seu amiguinho{'\n'}
                    de estimação.
                </Text>

                <TouchableOpacity style={styles.button}
                activeOpacity={0.7}
                onPress={handleStart}>
                    <Feather name="chevron-right" style={styles.buttonIcon}/>
                </TouchableOpacity>

            </View>
            
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapper:{
        flex:1,
        alignItems:"center",
        justifyContent: 'space-around',
        paddingHorizontal:20
    },
    title: {
        fontSize:30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop:38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.brown_dark,
        fontFamily: fonts.text,
        
    },
    button:{
        backgroundColor: colors.brown,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 16,
        marginBottom: 10,
        height:56,
        width:56,
    },
    buttonIcon:{
        fontSize: 28,
        color:colors.white,
    },
    image:{
        height: Dimensions.get('window').width * 0.7,
        borderRadius:100
    },
    
});