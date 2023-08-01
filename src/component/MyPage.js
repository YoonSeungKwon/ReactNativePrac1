import React from "react";
import {View, Text, Button, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyPage = ({navigation}) =>{

    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [regdate, setRegdate] = React.useState("")


    const fetchInfo = async() =>{

        

        fetch('http://10.0.2.2:8080/api/v1/users/info', {
            method:'GET',
            headers:{
                "Access":"application/json",
                "Content-Type":"application/json",
                "Authorization":"Bearer " + await AsyncStorage.getItem("@accToken"),
            }
        }).then(response=>response.json()
        .then(data =>{
            console.log(data)
            if(response.status === 200){
                setEmail(data.email)
                setName(data.name)
                setRegdate(data.regdate)
            }
            // if(response.status === 401){
            //     fetch('http://10.0.2.2:8080/api/v1/users/info', {
            //         method:'GET',
            //         headers:ref_header
            //     }).then(response => response.json()
            //         .then(data =>{
            //             console.log(data)
            //             if(response.status === 401){
            //             Alert.alert(data.message +"    " + data.code)
            //         }})
            //     )
            // }
        })).catch(error=>console.log(error))
    }

    React.useEffect(()=>{
        fetchInfo()
    },[]);


    return(
        <View>
            <Text>내 정보</Text>
            <Text>이메일: {email}</Text>
            <Text>이름: {name}</Text>
            <Text>가입일: {regdate}</Text>
        </View>
    );
}

export default MyPage;