import React from 'react';
import {View, Button, Text} from 'react-native';


const NetWorkPage = () =>{ 

    const textStyle = {
        color:'green'
    }

    const [data, setData] = React.useState("");

    const handleClick = () =>{
        fetch('http://10.0.2.2:8080/api/v1/test/')
        .then(response=>response.json()
        .then((data) => {
            console.log(data)
            setData(data.data)
        }))
        .catch(error=>console.error)
    }

    return(
        <View>
            <Text>Test</Text>
            <Text style={textStyle}>{data}</Text>
            <Button
                title="Send Request"
                onPress={handleClick}
            />
        </View>
    )

}

export default NetWorkPage;