import React from "react";
import {View, Text, Button} from 'react-native';

const HomePage = ({navigation}) =>{

    return(
        <View>
            <Text>Home Page</Text>

            <Button
                title="Props Test"
                onPress={()=>{navigation.navigate("PropsTest1")}}
            />
            <Button
                title="Register Test"
                onPress={()=>{navigation.navigate("RegisterPage")}}
            />
            <Button
                title="Login Test"
                onPress={()=>{navigation.navigate("LoginPage")}}
            />
            <Button
                title="My Page"
                onPress={()=>{navigation.navigate("MyPage")}}
            />
            <Button
                title="네트워크 확인"
                onPress={()=>{navigation.navigate("NetWorkPage")}}
            />
            <Button
                title="게시판"
                onPress={()=>{navigation.navigate("BoardPage")}}
            />
        </View>
    );

};
export default HomePage;