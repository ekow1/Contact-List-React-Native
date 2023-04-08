
import  React , {Components} from 'react';

import { StyleSheet, View  , SafeAreaView , Text} from "react-native";
import { MaterialCommunityIcons , SimpleLineIcons } from '@expo/vector-icons';
import ContactScreen from './ContactScreen';
// import Contact from './Contact';



export default function Page() {
  return (

    

        <View style={styles.container}>
          
          <View style={styles.head} >
          <MaterialCommunityIcons name="contacts-outline" size={17} color="black" />
             <Text style={styles.text}>Contacts</Text>
             <SimpleLineIcons name="options-vertical" size={17} color="#000" />

             </View>

             <ContactScreen />

            
            </View>



    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems : 'center',
    paddingVertical : 70,
    
  },

  text :{

   
    fontSize : 23,
    fontWeight : 'bold',
  },

  head : {
    marginBottom : 30,
    flexDirection : 'row',
    width : 100,
    justifyContent : 'center',
    gap : 110
   
  }




 
});
