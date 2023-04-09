import  React from 'react';
import { View, Text, StyleSheet ,Image,SafeAreaView} from 'react-native';
import {Ionicons , MaterialIcons , SimpleLineIcons} from "@expo/vector-icons"

function Contact({name ,phone , image}) {
  return (


    
         <View style={[styles.container , styles.boxShadow]}>
        <Image source={image} style={styles.image}/>

        <View style={styles.name}>
            <Text style={styles.text} numberOfLines={1}>{name}</Text>
            <Text style={styles.text} numberOfLines={1}>{phone}</Text>
        </View>

        <View style={styles.icons}>
        <Ionicons name="phone-portrait-outline" size={20} color="#2291F2" />
        <Ionicons name="chatbox-ellipses-sharp" size={20} color="#2291F2" />
        <SimpleLineIcons name="options-vertical" size={20} color="#BFBFBF" />
        </View>


    </View>
    

   
  )
}




const styles = StyleSheet.create({

    container : {

   
        flexDirection : 'row',
        marginVertical : 15,
        marginHorizontal : 20,
        position : 'relative',
        gap : 20,
        
       
        

    },

    image: {
      width : 50,
      height : 50,
      borderRadius : 100,
      alignItems : "center",
      borderColor : "#2291F2",
      borderWidth : 2.5,
    
      
    },

    name :{

        
        flex: 2,
        justifyContent : "center",
       
        

    },

    text :{

        fontWeight : "bold",
        fontSize : 16

    },

    icons:{
        flexDirection : 'row',
        gap : 10,
        flex:1,
        justifyContent : "center",
        alignItems: "center",
    },

    boxShadow: {
        backgroundColor: '#fff',
        // borderRadius: 10,
        padding: 10,
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            // shadowRadius: 2.84,
          },
          android: {
            elevation: 3,
          },
        }),
      },
   
  });

export default Contact;