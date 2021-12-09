import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const accountIcon = <FontAwesome name='user' size={20} color='white' />;
const contractIcon = <FontAwesome name='file' size={20} color='white' />;
const scheduleIcon = <FontAwesome name='calendar' size={20} color='white' />;
const evaluationIcon = <FontAwesome name='heartbeat' size={20} color='white' />;
const classesIcon = <FontAwesome name='users' size={20} color='white' />;
const trainingIcon = <FontAwesome name='dumbbell' size={20} color='white' />;

const image = { uri: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218batch4-mynt-20_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=b346ff28a73fe8cd9153d827e8a185e6' };

const AppLista = () => {
  return (
    <>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.headerText}>VIBE ACADEMIA</Text>
          <View>{accountIcon}</View>
        </View>
        <View>
          <View style={styles.listView}>
            <View style={styles.icons}>{contractIcon}</View>
            <Text style={styles.listText}>
              Contratos / Renovar
            </Text>
          </View>
          <View style={styles.listView}>
            <View style={styles.icons}>{scheduleIcon}</View>
            <Text style={styles.listText}>
              Agendamentos
            </Text>
          </View>
          <View style={styles.listView}>
            <View style={styles.icons}>{evaluationIcon}</View>
            <Text style={styles.listText}>
              Avaliação Funcional
            </Text>
          </View>
          <View style={styles.listView}>
            <View style={styles.icons}>{classesIcon}</View>
            <Text style={styles.listText}>
              Aulas Coletivas
            </Text>
          </View>
          <View style={styles.listView}>
            <View style={styles.icons}>{trainingIcon}</View>
            <Text style={styles.listText}>
              Training
            </Text>
          </View>
          <View style={styles.listView}>
            <View style={styles.icons}>{trainingIcon}</View>
            <Text style={styles.listText}>
              Treino do Dia
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#0fa2a4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    color: 'white',
    fontSize: 22
  },

  listView: {
    padding: 6,
    flexDirection: 'row',
    backgroundColor: '#ffffff0f'
  },

  icons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  listText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    flex: 6,
    padding: 8,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  image: {
    flex: 1
  }
})


export default AppLista;
