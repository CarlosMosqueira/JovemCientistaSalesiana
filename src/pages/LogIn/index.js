import React , {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

import { useForm, Controller} from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().required("Informe seu Email"),
    senha: yup.string().min(6, "A senha deve ter pelo menos  6 digitos").required("Informe sua senha")
})

export default function LogIn(){
    const navigation = useNavigation();

    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function handleLogIn(data){
        console.log(data)
    }
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <Controller
                        control={control}
                        name ="email"
                        render={({ field: {onChange, onBlur, value} }) => (
                            <TextInput
                            placeholder="Digite um E-mail.."
                            style={[styles.input, {
                                borderColor: errors.email && '#ff375b'
                            }]}
                            onBlur = {onBlur}
                            value = {value}
                            onChangeText = {onChange}
                            />
                        )}
                    />
                    {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

                <Text style={styles.title}>Senha</Text>
                <Controller
                        control={control}
                        name ="senha"
                        render={({ field: {onChange, onBlur, value} }) => (
                            <TextInput
                            placeholder="Digite uma senha.."
                            style={[styles.input, {
                                borderColor: errors.senha && '#ff375b'
                            }]}
                            onBlur = {onBlur}
                            value = {value}
                            onChangeText = {onChange}
                            secureTextEntry={true}
                            />
                        )}
                    />
                    {errors.senha && <Text style={styles.labelError}>{errors.senha?.message}</Text>}

                    <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogIn)}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegistro} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
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
    containerHeader:{
        margin: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerForm:{
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: '#5ccbff',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegistro:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#a1a1a1'
    },
    labelError:{
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
    }

})