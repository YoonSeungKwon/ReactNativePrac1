import React from 'react';
import {View, Text, Button} from 'react-native';

const BoardPage = ({navigation}) =>{
    return(
        <View>
            <Text>게시판</Text>
            <Button
                title="글쓰기"
                onPress={()=>{navigation.navigate("BoardWritePage")}}
            />
        </View>
    )
}

export default BoardPage;