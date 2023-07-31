import React from "react";
import axios, { HttpStatusCode } from "axios";
import {View, Button, Text, TextInput, Alert} from "react-native";

const RegisterPage = () =>{
    
    const [check, setCheck] = React.useState(false)

    const [email, setEmail] = React.useState("")

    const [password, setPassword] = React.useState("")

    const [name, setName] = React.useState("")

    const [btnStyle, setBtnStyle] = React.useState(colorDefault)

    const colorChecked = '#9acd32'

    const colorDefault = '#2196F3'

    const handleCheck = () =>{
        fetch('http://10.0.2.2:8080/api/v1/members/check/'+email, {method:'GET'}
        ).then(response => response.json()
        ).then(json=>{
            if(json === true){
                Alert.alert("이미 등록된 이메일 주소입니다.")
                setCheck(false)
            }
            else{
                Alert.alert("사용 가능한 이메일 주소입니다.")
                setCheck(true)
                setBtnStyle(colorChecked)
            }
        }
        ).catch(error=>console.log(error)
        )
    }

    const handleClick = () =>{
        if(check){
            fetch('http://10.0.2.2:8080/api/v1/members/join',{
                method:"POST",
                headers:{
                    "Access":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password,
                    name:name,
                })
            }).then(response => response.json()
            .then((data) =>{
                if(response.status === 200){
                    console.log(data)
                    Alert.alert(data.name + "님 환영합니다. 로그인 페이지로 이동합니다.")
                    //navigate
                }
                else{
                    console.log(data)
                    Alert.alert(data.message +"    " + data.code)
                }
            }
            )).catch((error) => {
                console.log(error)
            })
        }else{
            Alert.alert("이메일 중복체크를 해주세요.")
        }
    }

    return(
        <View>
            <Text>
                Register
            </Text>
            <Text>Email: </Text>
            <TextInput
                value={email}
                onChangeText={(text)=>{setEmail(text);setCheck(false);setBtnStyle(colorDefault)}}
            />
            <Button
                color={btnStyle}
                title="중복 체크"
                onPress={handleCheck}
            />
            <Text>Password: </Text>
            <TextInput
                value={password}
                onChangeText={(text) => {setPassword(text)}}
            />
            <Text>Name: </Text>
            <TextInput
                value={name}
                onChangeText={(text)=>{setName(text)}}
            />
            <Button
                title="가입"
                onPress={handleClick}
            />
        </View>
    )

}
export default RegisterPage;
