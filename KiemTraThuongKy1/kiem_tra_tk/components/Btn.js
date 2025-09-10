import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Btn({number}) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>{number}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn:{
    width:80,
    height:40,
    borderWidth:1,
    backgroundColor:'#00CCF9',
    justifyContent: 'center',
    alignItems:'center',
    margin: 10,
  },
  text:{
    fontWeight:'bold',
    fontSize:25
  }
});