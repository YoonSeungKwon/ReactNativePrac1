import React from "react";
import {Text, View, Button, TextInput, Alert} from 'react-native';

const LoginPage = () =>{

    const [email, setEmail] = React.useState("");
    
    const [password, setPassowrd] = React.useState("");

    
    const handleLogin = () => {
        fetch("http://10.0.2.2:8080/api/v1/members/login", {
            method:'POST',
            headers:{
                'Access':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }).then(response=>response.json()
        .then(data => {
            if(response.status === 200){
                console.log(data)
                Alert.alert(data.name + "님 환영합니다.")
                //navigate
            }
            else{
                console.log(data)
                Alert.alert(data.message +"    " + data.code)
            }
        }).catch(error=>console.log(error))
        )
    }

    return(
        <View>
            <Text>Login Here</Text>
            <Text>Email:</Text>
            <TextInput
                value={email}
                onChangeText={text=>{setEmail(text)}}
            />
            <Text>Password:</Text>
            <TextInput
                value={password}
                onChangeText={text=>{setPassowrd(text)}}
            />
            <Button
                title="로그인"
                onPress={handleLogin}
            />
        </View>
    )
}
export default LoginPage;