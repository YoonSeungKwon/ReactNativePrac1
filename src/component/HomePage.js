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
        </View>
    );

};
export default HomePage;