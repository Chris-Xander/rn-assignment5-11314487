import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Switch, Pressable, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, {useState,useContext} from 'react';
import {EventRegister} from 'react-native-event-listeners';
import theme from './theme';
import themeContext from './themeContext';

export default function Screen2 () {
  const theme= useContext(themeContext)
    const[darkMode,setDarkMode]= useState(false)
  return (
    <ScrollView style={[styles.scrollView, {backgroundColor:theme.backgroundColor}]}> 
        <View style=
    {styles.container}>
      <Text style={[styles.settings, {color:theme.color}]}>Settings</Text>
      <View style={{alignItems:'flex-start'}}>
      <Pressable style={styles.button}><Text style={[styles.text,{color:theme.color}]}>Language</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/></Pressable>
      <Pressable style={styles.button}><Text style={[styles.text,{color:theme.color}]}>My Profile</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/></Pressable>
      <Pressable style={styles.button}><Text style={[styles.text,{color:theme.color}]}>Contact </Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/>
      </Pressable>
      <Pressable style={styles.button}><Text style={[styles.text,{color:theme.color}]}>Change password</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300}/></Pressable>
      <Pressable style={styles.button}><Text style={[styles.text,{color:theme.color}]}>Privacy Policy</Text><Ionicons name="chevron-forward-outline" size={25} color="grey" left={300} /></Pressable>
      </View>
      <StatusBar style="auto" />
     <Text style={[{fontSize: 25, top:120, right:140},{color:theme.color}]}> Device Theme </Text>
     </View>
     <Switch style={{top:130, left: 310}}
     value={darkMode}
     onValueChange={(value)=> { setDarkMode(value);
    EventRegister.emit('ChangeTheme', value) 
    }}
     />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: '#fff',

  },
  container:{
   alignItems:'center',
   top: 40
  },
  settings:{
    fontWeight: 'bold',
    fontSize: 25,
    
    
  },
  button: {
    marginBottom:-40,
    justifyContent: 'center',
    padding:20,
    borderRadius: 15,
    elevation: 3,
    top: 40,
    width:370,
    left: -5,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor:'grey'
  },
  text:{
    fontSize:20,
    top: 30
  },

});
