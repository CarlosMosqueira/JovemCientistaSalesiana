import React from "react";
import { View, 
        Text,
        StyleSheet,
    Image,
TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function WelcomeTwo(){
    const navigation = useNavigation();
    
    return(
        
        <View style={styles.container}>
           <View style={styles.containerLogo}>
               <Animatable.Image
               animation="flipInY"
               source={require('../../assets/logo-fsma.png')}
               resizeMode="contain"
               style={{
                   width: '100%',
                   height: 100,
               }}
               />
           </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Sobre o aplicativo</Text>
                <Text style={styles.titleOne}>Trata-se de um jogo com o intuito de medir a velocidade de raciocínio e o tempo que o jogador consegue manter a atenção em uma atividade. Os dados coletados serão utilizados para futura análise com base na idade, escolaridade e gênero do jogador.
Os resultados serão mantidos em sigilo, sendo destinados apenas para fins científicos.</Text>

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.textButton}>Acessar Agora</Text>
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