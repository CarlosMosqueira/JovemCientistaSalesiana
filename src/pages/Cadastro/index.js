import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

import { useForm, Controller} from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    nome: yup.string().required("Infome seu nome"),
    email: yup.string().required("Informe seu Email"),
    senha: yup.string().min(6, "A senha deve ter pelo menos  6 digitos").required("Informe sua senha")
})

export default function SignIn(){

    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function handleSignIn(data){
       console.log(data)
    }
    
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome completo</Text>
                    <Controller
                        control={control}
                        name ="nome"
                        render={({ field: {onChange, onBlur, value} }) => (
                            <TextInput
                            placeholder="Digite um nome.."
                            style={[styles.input, {
                                borderColor: errors.nome && '#ff375b'
                            }]}
                            onBlur = {onBlur}
                            value = {value}
                            onChangeText = {onChange}
                            />
                        )}
                    />
                    {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}

                <Text style={styles.title}>E-mail</Text>
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
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
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
    labelError:{
        alignSelf: 'flex-start',
        color: '#ff375b',
        marginBottom: 8,
    }

})
