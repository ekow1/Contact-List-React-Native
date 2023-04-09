
import  React , {Components} from 'react';

import { StyleSheet, View  , SafeAreaView , Text} from "react-native";
import { MaterialCommunityIcons , SimpleLineIcons ,Ionicons } from '@expo/vector-icons';

// import Contact from './Contact';
import CatScreen from './CatScreen';



export default function Page() {
  return (

    

        <View style={styles.container}>
          
          {/* <View style={styles.head} >
          <MaterialCommunityIcons name="contacts-outline" size={17} color="black" />
             <Text style={styles.text}>Contacts</Text>
             <SimpleLineIcons name="options-vertical" size={17} color="#000" />

             </View> */}
          <View style={[styles.head , styles.boxShadow]} >
          <Ionicons name="ios-search-outline" size={24} color="black" />
             <Text style={styles.text}>Search</Text>
             

             </View>

             <CatScreen />


            
            </View>



    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 70,
    
    

    
  },

  text :{

   
    fontSize : 18,
    fontWeight : 'bold',
  },

  head : {
    marginBottom : 30,
    flexDirection : 'row',
    width : "75%",
    justifyContent : 'flex-start',
    marginRight :45,
    alignItems : 'center',
    gap :20,
    paddingHorizontal : 20,
   
  },

  boxShadow: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    ...Platform.select({
      ios: {
        // shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        // shadowRadius: 2.84,
      },
      android: {
        elevation: 10,
      },
    }),
  },




 
});
