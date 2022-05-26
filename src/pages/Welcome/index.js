import React from "react";
import { View, 
        Text,
        StyleSheet,
    Image,
TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
           <View style={styles.containerLogo}>
               <Animatable.Image
               animation="flipInY"
               source={require('../../assets/logo-foco.png')}
               resizeMode="contain"
               style={{
                   width: '100%',
                   height: 100,
               }}
               />
           </View>

           <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
               <Text style={styles.title}>Bem vindo!</Text>
               <Text style={styles.titleOne}>O aplicativo foi desenvolvido com o intuito de dar continuidade ao trabalho desenvolvido pelos integrantes do projeto Jovem Cientista Salesiano, denominado: A Influência dos Processos Atencionais nos Mecanismos de Memória e Aprendizagem.</Text>

               <TouchableOpacity style={styles.button}
               onPress={() => navigation.navigate('WelcomeTwo')}>
                   <Text style={styles.textButton}>Proximo</Text>
               </TouchableOpacity>
           </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#5ccbff'
    },
    containerLogo:{
        flex: 1,
        backgroundColor: '#5ccbff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    titleOne:{
        fontSize: 20,
        marginTop: 28,
        marginBottom: 12
    },

    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    button:{
        position: 'absolute',
        backgroundColor: '#5ccbff',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textButton:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
})