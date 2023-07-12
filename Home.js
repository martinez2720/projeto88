import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
            <SafeAreaView style={styles.droidSafeArea} />

            <Text style={styles.Titulo}>App Estrelar</Text>
            
     
            <TouchableOpacity style={styles.botoes} >
                <Text style={styles.nomes}>botao1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoes} >
                <Text style={styles.nomes}>botao2</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.botoes} >
                <Text style={styles.nomes}>botao3</Text>
                </TouchableOpacity>
               
                </View>
   
    ); 

  }

}

const styles = StyleSheet.create({

droidSafeArea: {
marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
Titulo: {
fontSize: 50,
fontWeight: "bold",
color: "blue"
},
botoes: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 120,
    backgroundColor: "gray"
},
nomes: {
fontSize: 30,
fontWeight: "bold",
justifyContent: "center",
alignItems: "center",
color: 'greenlight'
}
});
