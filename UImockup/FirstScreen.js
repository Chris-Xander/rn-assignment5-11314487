import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , Image, Pressable , FlatList} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from './theme';
import themeContext from './themeContext';
import React, {useContext} from 'react';


export default function Screen1 ({navigation}) {
  const theme= useContext(themeContext)
  const paw =[
    { index:1,
    application:"Apple Store",
    category:'Entertainment',
    debt:'-$20,99',
    image: require('./assets/apple.png')
    },
    { index:2,
      application:"Spotify",
      category:'Music',
      debt:'-$44,99',
      image: require('./assets/spotify.png')
      },
      { index:3,
        application:"Money Transfer",
        category:'Transaction',
        debt:'   $400,000',
        image: require('./assets/moneyTransfer.png')
        },
        { index:4,
          application:"Shopping",
          category:'Shopping',
          debt:'  -$ 0.88c',
          image: require('./assets/grocery (1).png')
          },
          { index:5,
            application:"Fees",
            category:'education',
            debt:'-$8,99',
            image: require('./assets/school.jpeg')
            },
            

  ];
  return (
    <ScrollView style={[{backgroundColor:theme.backgroundColor}]}> 
    <View style=
    {styles.container}>
      <View style={styles.profpic}>
      <Image source={require('./assets/profile.png')} style={{width:70, height:70}}/>
      </View>
      <Text style={[ styles.welkies,{color:theme.color} ]}>Welcome Back,</Text>
      <Text style={ [styles.name,{color:theme.color}]}>Eric Atsu</Text>
      <View style={styles.searchbuttoncontainer}>
      <Pressable style={styles.searchbutton}><Ionicons name="search-outline" size={30} color="black" /></Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/Card.png')} style={{width:370, height:230, borderRadius:20}}/>
        </View>
        <View style={styles.row}>
      <Pressable style={styles.upity}><Ionicons name="arrow-up-outline" size={30} color="black" /></Pressable>
      <Pressable style={styles.upity}><Ionicons name="arrow-down-outline" size={30} color="black" /></Pressable>
      <Pressable style={styles.upity}><Ionicons name="cash-outline" size={30} color="black" /></Pressable>
      <Pressable style={styles.upity}><Ionicons name="cloud-upload-outline" size={30} color="black" /></Pressable>
      </View>
      <View style={styles.btt}>
      <Text style={styles.bts}> send </Text>
      <Text style={styles.bts}> Receive</Text>
      <Text style={styles.bts}> Loan </Text>
      <Text style={styles.bts}> Top-up</Text>
      </View>
      <Text style={[styles.trans,{color:theme.color}]}>Transaction</Text>
      <View style={{alignItems:'flex-end'}}>
      <Text style={styles.see}>See all</Text>
      </View>
      <FlatList 
      horizontal={false}
      data={paw}
      renderItem={({item})=>(<View style={[styles.conco,{borderColor:theme.borderColor}]}><Image source={item.image} style={styles.companyIcons} />
      <Text style={[{fontWeight:'bold', left:70, fontSize:20, top:10},{color:theme.color}]}>{item.application}</Text>
      <Text style={[{left: 300, fontSize:16, alignItems:'flex-end', top:-12 },{color:theme.color}]}>{item.debt}</Text>
      <Text style={[{fontSize: 16, top:-7, left:70},{color:theme.color}]}>{item.category}</Text>
      </View>)}
        />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
   
  },
  welkies:{
    alignItems: 'flex-end',
    fontSize: 20,
    top:-20,
    left: 100,
    marginBottom:5,
    color: 'grey'
  },
  name:{
    alignItems: 'flex-start',
    fontSize: 25,
    fontWeight: 'bold',
    top: -20,
    left: 100,
    marginBottom:5,
  },
  imageContainer:{
    top:-20,
    justifyContent:'center',
    left: 10,
    borderRadius: 20,
    marginBottom: 20
  },
  profpic:{
    justifyContent:'center',
    left: 15,
    borderRadius: 20,
    marginVertical:30,
    marginTop:-30,
    top:75,
  },
  upity:{
    backgroundColor: '#F2F2F3',
    width: 60,
    height:60,
    borderRadius: 28,
    justifyContent:'center',
    alignItems:'center',
    top:-20,
    marginHorizontal: 20
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    right:1
    
  },
  searchbutton:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F2F2F3',  
    borderRadius: 30,
    height: 50,
    width: 50
  },
  searchbuttoncontainer:{
    alignItems:'flex-end',
    top:-75,
    right: 20
  },
btt:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  top:-15,
  alignItems:'center',
  flex: 1,
  marginTop:5
},
bts:{
fontSize:16,
marginHorizontal:20,
right:1,
color:'grey'
},
trans:{
  fontSize:22,
  top: 10,
  left:15
},
see: {
fontSize: 16,
color:'blue',
top: -10,
right: 30
},
conco:{
  marginVertical: 15,
  marginHorizontal:10,
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius:24,
    margin:20,
  right:1,
  width: 370,
  height: 100,
  borderColor:'white'
 
},
companyIcons:{
  width: 30, 
  height: 20, 
  resizeMode:'contain',
  justifyContent: 'center',
  alignSelf: 'flex-start',
  flexDirection:'row',
  top: 40,
  left: 25,
  borderRadius: 7
}
});