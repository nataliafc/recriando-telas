import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const iconBars = <FontAwesome name='bars' size={22} color='#999' />
const iconUser = <FontAwesome name='user' size={22} color='#999' />
const iconBell = <FontAwesome name='bell' size={22} color='#999' />
const iconCloud = <FontAwesome name='cloud' size={22} color='#999' />
const iconImage = <FontAwesome name='image' size={22} color='#999' />
const iconPerson = <FontAwesome name='users' size={22} color='#999' />
const iconTrash = <FontAwesome name='trash' size={22} color='#999' />
const iconBarsToggle = <FontAwesome name='bars' size={12} color='#999' />
const iconPlus = <FontAwesome name='plus' size={12} color='#999' />
const iconNew = <FontAwesome name='plus' size={22} color='#999' />
const iconBiblo = <FontAwesome name='book' size={22} color='#999' />
const iconShare = <FontAwesome name='users' size={22} color='#999' />
const iconKnow = <FontAwesome name='bolt' size={22} color='#999' />
const iconFind = <FontAwesome name='globe' size={22} color='#999' />


const Lightroom = () => {
    return (
        <>
            <View style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.icons}>{iconBars}</Text>
                    <Text style={{ color: '#fff', flex: 2, fontSize: 20 }}>Biblioteca</Text>
                    <Text style={styles.icons}>{iconUser}</Text>
                    <Text style={styles.icons}>{iconBell}</Text>
                    <Text style={styles.icons}>{iconCloud}</Text>
                </View>
                <View style={styles.options}>
                    <View><Text style={styles.icons}>{iconImage}</Text></View>
                    <Text style={{ color: '#fff' }} >Tudo</Text>
                </View>
                <View style={styles.options}>
                    <View><Text style={styles.icons}>{iconPerson}</Text></View>
                    <Text style={{ color: '#fff' }}>Pessoas</Text>
                </View>
                <View style={styles.options}>
                    <View><Text style={styles.icons}>{iconTrash}</Text></View>
                    <Text style={{ color: '#fff' }}>Excluída(s)</Text>
                </View>
                <View style={{ height: 40, padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: '#fff', flex: 2 }}>ÁLBUNS</Text>
                    <Text style={styles.icons}>{iconBarsToggle}</Text>
                    <Text style={styles.icons}>{iconPlus}</Text>
                </View>
                <View style={styles.options}>
                    <View><Text style={styles.icons}>{iconNew}</Text></View>
                    <Text style={{ color: '#fff' }}>Novo Item(s)</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 320, backgroundColor: '#222', padding: 10 }}>
                    <Text style={styles.icons}>{iconBiblo}</Text>
                    <Text style={styles.icons}>{iconShare}</Text>
                    <Text style={styles.icons}>{iconKnow}</Text>
                    <Text style={styles.icons}>{iconFind}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#222', }}>

                    <Text style={{ color: 'white' }}>Biblioteca</Text>
                    <Text style={{ color: 'white' }}>Compartilhado</Text>
                    <Text style={{ color: 'white' }}>Saiba mais</Text>
                    <Text style={{ color: 'white' }}>Descobrir</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#111',
        flex: 1
    },
    header: {
        backgroundColor: '#222',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 60
    },

    options: {
        backgroundColor: '#222',
        height: 70,
        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }, 

    icons: {
        padding: 10
    }

});

export default Lightroom;





