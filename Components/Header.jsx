import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Fontisto} from '@expo/vector-icons';
import {SIZES} from '../Config/Sizes';

const Header = () =>{

    return(
        <View style={styles.headerContaier}>
            <Text style={styles.headerTitle}>Andalouse Coffee</Text>
            <Fontisto name="coffeescript" size={24} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({

    headerContaier : {
        marginTop: SIZES.statusBarHeight,
        width: SIZES.width,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgb(51, 55, 69)'
    },

    headerTitle : {
        color: 'white',
        fontSize: 24,
        marginHorizontal: 15,
    }
});
export default Header;