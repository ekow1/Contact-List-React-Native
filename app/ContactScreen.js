
import  React from 'react';

import {   FlatList, View , Text ,  StyleSheet} from "react-native";



import Contact from './Contact';


export default function Page() {

  const contacts =[

    {

        id : 1,
        name : "Jude Bellingham",
        number : "+ 233 -111-555-333",
        image : require("../assets/jude.jpeg")
    },
    {

        id : 2,
        name : "Mason Mount",
        number : "+ 233 -111-555-444",
        image : require("../assets/mount.jpg")
    },
    {

        id : 3,
        name : "Kim Minjae",
        number : "+ 233 -111-555-555",
        image : require("../assets/minjae.jpg")
    },
    {

        id : 4,
        name : "Coady Gakpo",
        number : "+ 233 -111-555-666",
        image : require("../assets/cody.jpg")
    },
    {

        id : 5,
        name : "Ruben Neves",
        number : "+ 233 -111-555-111",
        image : require("../assets/Ruben.jpg")
    },
    {

        id : 6,
        name : "Alexis  Mac Allister",
        number : "+ 233 -111-555-222",
        image : require("../assets/alex.jpeg")
    },
    {

        id : 7,
        name : "Pabo Gavira",
        number : "+ 233 -111-555-777",
        image : require("../assets/0_Gva.jpg")
    },
    {

        id : 8,
        name : "Stefan Bajectic",
        number : "+ 233 -111-555-888",
        image : require("../assets/stefan.jpg")
    },
    {

        id : 9,
        name : "Ryan Gravenberch",
        number : "+ 233 -111-555-999",
        image : require("../assets/ryan.jpg")
    },
    {

        id : 10,
        name : "Alisson Becker",
        number : "+ 233 -111-555-123",
        image : require("../assets/ali.jpeg")
    },
    {

        id : 11,
        name : "Darwin Nunez Gabriel",
        number : "+ 233 -111-555-543",
        image : require("../assets/darwin.jpeg")
    },
    {

        id : 12,
        name : "Ibrahima Konate",
        number : "+ 233 -111-555-534",
        image : require("../assets/konate.jpg")
    },
    {

        id : 14,
        name : "Kudus Mohammed",
        number : "+ 233 -111-555-865",
        image : require("../assets/Kudus.jpg")
    },
    {

        id : 15,
        name : "Pedri Gonzalez",
        number : "+ 233 -111-555-765",
        image : require("../assets/pedri.jpg")
    },
    {

        id : 13,
        name : "Fabio Carvalho",
        number : "+ 233 -111-555-765",
        image : require("../assets/fabio.jpg")
    },
  ]


const oneContact = ({item}) => {   




      return <Contact name={item.name}  phone={item.number}   image ={item.image} />

//    return  <View style={[styles.container , styles.boxShadow]}>
//     <Image source={ item.image} style={styles.image}/>

//     <View style={styles.name}>
//         <Text style={styles.text} numberOfLines={1}>{item.name}</Text>
//         <Text style={styles.text} numberOfLines={1}>{item.number}</Text>
//     </View>

//     <View style={styles.icons}>
//     <Ionicons name="phone-portrait-outline" size={20} color="#2291F2" />
//     <Ionicons name="chatbox-ellipses-sharp" size={20} color="#2291F2" />
//     <SimpleLineIcons name="options-vertical" size={20} color="#BFBFBF" />
//     </View>
                                                                                                                                         

// </View>

 }


  return (

    

        <View style={styles.container} >

            <FlatList
            showsVerticalScrollIndicator ={false}
             data={contacts}
             renderItem={oneContact}
            // 
            
            
            
             

            />

           
         
         </View>



    
  );
}




const styles = StyleSheet.create({

  container : {

 
      flexDirection : 'row',
      marginVertical : 15,
      marginHorizontal : 20,
      gap : 20,
      
     
      

  },

  // image: {
  //   width : 50,
  //   height : 50,
  //   borderRadius : 100,
  //   alignItems : "center",
  //   borderColor : "#2291F2",
  //   borderWidth : 2.5,

    
  // },

  // name :{

      
  //     flex: 2,
  //     justifyContent : "center",
     
      

  // },

  // text :{

  //     fontWeight : "bold",
  //     fontSize : 16

  // },

  // icons:{
  //     flexDirection : 'row',
  //     gap : 10,
  //     flex:1,
  //     justifyContent : "center",
  //     alignItems: "center",
  // },

  // boxShadow: {
  //     backgroundColor: '#fff',
  //     borderRadius: 10,
  //     padding: 10,
  //     ...Platform.select({
  //       ios: {
  //         shadowColor: '#000',
  //         shadowOffset: {
  //           width: 0,
  //           height: 2,
  //         },
  //         shadowOpacity: 0.25,
  //         shadowRadius: 2.84,
  //       },
  //       android: {
  //         elevation: 3,
  //       },
  //     }),
  //   },
 
});