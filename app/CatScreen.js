
import  React from 'react';

import {   FlatList, View , Text ,  StyleSheet} from "react-native";



// import Contact from './Contact';
import CatCard from './CatCard';


export default function Page() {

  const pets =[

    {

        id : 1,
        name : "MaineCoon",
        type : "Cat",
        age : "3 years old",
        location : "Madina",
        image : require("../assets/mainecoon.webp")
    },
    {

        id : 2,
        name : "Allan Swamp",
        type : "Monkey",
        age : "4 years old",
        location : "East-Legon",
        image : require("../assets/allan.webp")
    },
    {

        id : 3,
        name : "Rottweiler",
        type : "Dog",
        age : "3.5 years old",
        location : "Ogbojo",
        image : require("../assets/rottweiler.jpeg")
    },
    {

        id : 4,
        name : "Russian Blue",
        type : "Cat",
        age : "2 years old",
        location : "Danfa",
        image : require("../assets/Russian.jpg")
    },
    {

        id : 5,
        name : "Samll Fuffy",
        type : "Dog",
        age : "2.5 years old",
        location : "Amasaman",
        image : require("../assets/small.jpg")
    },
    {

        id : 6,
        name : "Vervet",
        type : "Monkey",
        age : "3 years old",
        location : "Caprice",
        image : require("../assets/vervet.jpg")
    },
    
    
  ]


const onePet = ({item}) => {   

      return <CatCard name={item.name}  type={item.type}   image ={item.image} location ={item.location} age={item.age}/>

 }


  return (

    

        <View style={styles.container} >


            

            <FlatList
            showsVerticalScrollIndicator ={false}
             data={pets}
             renderItem={onePet}
            // 
            
            
            
             

            />

           
         
         </View>



    
  );
}




const styles = StyleSheet.create({

  container : {

      
       flex : 1,
      
      width : '100%',
      height : '100%',
      gap : 50,
     
     
      

  },

  

 
});