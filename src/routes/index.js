import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import WelcomeTwo from '../pages/WelcomeTwo';
import LogIn from '../pages/LogIn'
import Cadastro from '../pages/Cadastro'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
            
            <Stack.Screen
            name="WelcomeTwo"
            component={WelcomeTwo}
            options={{headerShown: false}}
            />
        
            <Stack.Screen
            name="LogIn"
            component={LogIn}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}