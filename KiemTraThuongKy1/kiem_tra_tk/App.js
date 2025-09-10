import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Btn from './components/Btn'


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>

      <View style={{flex:1}}>
        <Text>Phép tính</Text>
        <Text style={[styles.text_view, {height:70}]}>Số nhập</Text>
        <Text>Kết quả</Text>
        <Text style={[styles.text_view, {height:70}]}>Số nhập</Text>
      </View>
      <View style={{flex:2, width: 250}}>
        <View style={{flexDirection:'row'}}>
          <Btn number={1}/>
          <Btn number={2}/>
          <Btn number={3}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Btn number={4}/>
          <Btn number={5}/>
          <Btn number={6}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Btn number={7}/>
          <Btn number={8}/>
          <Btn number={9}/>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btn_tinh}>+</TouchableOpacity>
          <TouchableOpacity style={styles.btn_tinh}>-</TouchableOpacity>
          <TouchableOpacity style={styles.btn_tinh}>*</TouchableOpacity>
          <TouchableOpacity style={styles.btn_tinh}>/</TouchableOpacity>
          <TouchableOpacity style={[styles.btn_tinh, {backgroundColor:'blue'}]}>=</TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.btn_tinh, {backgroundColor:'red', width:280}]}>+</TouchableOpacity>
      </View>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#D1F4F6",
    justifyContent: 'center',
    padding: 8,
  },
  text_view:{
    borderWidth:1,
    marginBottom:10,
    borderColor:'grey',
    borderRadius:5,
    padding:3
  },
  btn_tinh:{
    borderWidth:1,
    height: 40,
    width: 40,
    margin:10,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'green',
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
});
