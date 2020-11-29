import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class FacebookSceen extends React.Component{

    render(){

        return(

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
        style={styles.imageIcon}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
        }}/>
                <Text style={{color: 'blue', fontWeight:'bold', marginTop: 40}}>FaceBook</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    imageIcon: {
        width: 150,
        height:150,
        marginLeft:95
      }
})