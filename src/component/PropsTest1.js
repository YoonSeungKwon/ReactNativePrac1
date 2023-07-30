import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';


const PropsTest1 = ({route, navigation}) =>{

    React.useEffect(()=>{
        if(route.params?.name){
            setName(route.params.name)
        }
    },[route.params?.name])

    const [prev_name, setName] = useState("")

    return(
        <View>
            <Text>Your Name</Text>

            <Text>Name : {prev_name}</Text>


            <Button
                title="Change Name"
                onPress={()=>{navigation.navigate("PropsTest2")}}
            />
        </View>
    );
};
export default PropsTest1;