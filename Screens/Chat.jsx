import { StyleSheet ,View ,FlatList, TextInput, TouchableOpacity,ImageBackground} from "react-native";
import React,{useState} from 'react';
import { Feather } from '@expo/vector-icons';
import Header from '../Components/Header';
import { SIZES } from "../Config/Sizes";
import Msg from '../Components/Message'
 const data = [
  {
    question: 'hi',
    answer: 'Hello',
  },
  {
    question: 'hello',
    answer: 'Hi',
  },
  {
    question: 'hi bot',
    answer: 'Hello',
  },
  {
    question: 'hello bot',
    answer: 'Hi',
  },
  {
    question: 'how are you',
    answer: 'I am fine',
  },
  {
    question: 'what is your age',
    answer: 'I was developed yesterday',
  },
  {
    question: 'what is your name',
    answer: 'I am bot',
  },
];
let chats = [];
const Chat = () => {
    const [msg, setMsg] = useState('');
  const [chatList, setChatList] = useState([]);

  const getAnswer = q => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].question.includes(q.toLowerCase())) {
        chats = [...chats, {msg: data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        return;
      }
    }

    chats = [
      ...chats,
      {msg: "Didn't recognise tour question", incomingMsg: true},
    ];
    setChatList([...chats].reverse());
    return;
  };

  const onSendMsg = () => {
    chats = [...chats, {msg: msg, sentMsg: true}];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg('');
  };
    return (
        <View style={{flex:1,}}>
            <Header/>
            <ImageBackground source={require('../assets/coffee.jpg')} style={styles.backgroundImage}>
                <FlatList
                    style={{height: '87%', bottom: '3%'}}
                    inverted={true}
                    keyExtractor={(_, index) => index.toString()}
                    data={chatList}
                    renderItem={({item}) => (
                    <Msg
                        incomingMsg={item.incomingMsg}
                        msg={item.msg}
                        sentMsg={item.sentMsg}
                    />
                    )}
                />
                <View style={styles.boxMessageContainer}>
                    <TextInput
                    placeholder='Write message ...'
                    placeholderTextColor='white'
                    multiline={true}
                    value={msg}
                    onChangeText={val => setMsg(val)}
                    style={styles.messageInput}
                    />
                    <TouchableOpacity 
                      style={{marginRight: 5}}
                      disabled={msg ? false : true}
                      onPress={() => onSendMsg()}
                    >
                        <Feather name="send" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    boxMessageContainer : {
        position:"absolute",
        backgroundColor:'rgb(51, 55, 69)',
        marginHorizontal: 5,
        paddingHorizontal: 9,
        bottom: 8,
        borderRadius: 15,
        height: 55,
        width: SIZES.width -10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    messageInput :{
        color:'white',
        marginHorizontal: 6,
        fontSize: 17,
        flex: 1
    },
    backgroundImage :{
        flex:1,
        resizeMode:"cover",

    }
})
export default Chat
