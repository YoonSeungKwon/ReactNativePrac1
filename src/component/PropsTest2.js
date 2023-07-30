import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';


const PropsTest2 = ({route, navigation}) =>{

    const [name, setName] = useState("")

    return(
        <View>
            <Text>Change User Name</Text>
            <TextInput
                value={name}
                onChangeText={setName}
            />

            <Button
                title="Set Name"
                onPress={()=>{navigation.navigate({
                    name:"PropsTest1",
                    params:{name:name},
                    merge:true
                })}}
            />

        </View>
    );
};
export default PropsTest2;