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
        </View>
    );

};
export default HomePage;