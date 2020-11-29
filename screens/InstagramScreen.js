import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class InstagramScreen extends React.Component{

    render(){

        return(

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
        style={styles.imageIcon}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png'
        }}/>
                <Text style={{color: 'red', fontWeight:'bold', marginTop: 40}}>Instagram</Text>
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