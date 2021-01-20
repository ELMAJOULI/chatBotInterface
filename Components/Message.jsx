import React from 'react';
import {View, StyleSheet,Text} from 'react-native';


const Message = ({incomingMsg, sentMsg, msg}) => {
    return(
        <View>
  {incomingMsg && (
        <View style={styles.incomingMsgBox}>
          <Text style={styles.MsgText}>{msg}</Text>
        </View>
      )}
      {sentMsg && (
        <Text style={styles.sentMsgBox}>
          <Text style={styles.MsgText}>{msg}</Text>
        </Text>
      )}
        </View>
    );
}
const styles = StyleSheet.create({

  incomingMsgBox: {
    backgroundColor: 'rgb(230, 52, 98)',
    maxWidth: '70%',
    minWidth:'50%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
  },

  MsgText :{
      fontSize: 18,
      color:'white'
  },

  sentMsgBox: {
    backgroundColor: 'rgb(254, 95, 85)',
    maxWidth: '70%',
    minWidth:'50%',
    borderRadius: 10,
    paddingHorizontal:7,
    padding: 5,
    alignSelf: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
  },
});
export default Message;