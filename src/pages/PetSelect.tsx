import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet,FlatList} from "react-native";
import { EnviromentButton } from "../components/EnviromenButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from '../services/api';
import { AnimalsCardPrimary } from "../components/AnimalsCardPrimary";

interface EnviromentProps{
    key: string;
    title: string;
}

interface AnimalsProps{
    id: string;
    name:string;
    about:string;
    animal_tips:string;
    photo:string;
    environments: [string];
    frequency: {
         times: number;
         repeat_every:string;
    }
}
export function PetSelect(){


    const [enviroments,setEnviroments] = useState<EnviromentProps[]>([]);
    const [animals,setAnimals] = useState<AnimalsProps[]>([]);
    const [enviromentSelected, setEnviromentSelected] = useState('all');

    function handleEnviromentSelected(enviroment : string){
        setEnviromentSelected(enviroment);
    }

    useEffect(()=>{
        async function fetchEnviroment(){
            const {data} =await api.get('animals_enviroments');
            setEnviroments([
                {
                    key:'all',
                    title: 'todos',
                },
                ...data
            ]);
        }

        fetchEnviroment();
    },[]);

    useEffect(()=>{
        async function fetchAnimals() {
            const {data} = await api.get('animals');
            setAnimals(data);
        }
        fetchAnimals();
    },[])




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

            <View>
                <FlatList
                data={enviroments}
                renderItem={ ({item}) =>(
                    <EnviromentButton title={item.title}
                    active={item.key === enviromentSelected}
                    onPress={()=> handleEnviromentSelected(item.key)}/>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.enviromentList}
                />
            </View>

            <View style={styles.animals}>
                <FlatList
                data ={animals}
                renderItem={ ({item})=>(
                    <AnimalsCardPrimary data={item}/>
                )} 
                showsVerticalScrollIndicator={false}
                numColumns={2}
                />
            </View>
            
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
    },
    enviromentList:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    animals:{
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    }
})