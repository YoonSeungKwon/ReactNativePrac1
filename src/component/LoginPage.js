import React from "react";
import {Text, View, Button, TextInput, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () =>{

    const [email, setEmail] = React.useState("");
    
    const [password, setPassowrd] = React.useState("");

    
    const handleLogin = async () => {
        await fetch("http://10.0.2.2:8080/api/v1/members/login", {
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

                console.log(data);

                const acc_token = response.headers.get("authorization");
                const ref_token = response.headers.get("refreshtoken");
                
                AsyncStorage.setItem('@accToken', acc_token);
                AsyncStorage.setItem('@refToken', ref_token);

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

    const handleToken = async() =>{
        const acc_token = await AsyncStorage.getItem("@accToken")
        const ref_token = await AsyncStorage.getItem("@refToken")
        Alert.alert("엑세스 토큰:" + acc_token + " 리프레쉬 토큰:" + ref_token)
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
            <Button
                title="토큰 보기"
                onPress={handleToken}
            />
        </View>
    )
}
export default LoginPage;