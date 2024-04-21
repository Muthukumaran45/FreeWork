import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const ChatRoom = ({ participantId, participantName, username, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const chatRoomId = [participantId, username].sort().join('-');
    const chatRef = firebase.database().ref('chats').child(chatRoomId);

    chatRef.on('value', (snapshot) => {
      const messagesData = [];
      snapshot.forEach((childSnapshot) => {
        messagesData.push(childSnapshot.val());
      });
      setMessages(messagesData);
    });

    return () => {
      chatRef.off();
    };
  }, [participantId, username]);

  const sendMessage = () => {
    const messageText = messageInput.trim();
    if (messageText !== '') {
      const chatRoomId = [participantId, username].sort().join('-');
      const chatRef = firebase.database().ref('chats').child(chatRoomId);
      chatRef.push().set({
        text: messageText,
        sender: username
      });
      setMessageInput('');
    }
  };

  return (
    <div id="chatRoom">
      <h2>
        Chat Room &raquo;<span id="closeChat" onClick={onClose}>X</span>
      </h2>
      <div id="chatContainer">
        <h2>{participantName}</h2>
        <div id="chatMessages">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              {message.sender === username ? `You: ${message.text}` : `${message.sender}: ${message.text}`}
            </div>
          ))}
        </div>

        <div className='mt-4'>
          <input className='px-3 mx-2 border-light' type="text" placeholder="Type a message..." value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
          <button className='btn b-1 btn-primary p-0 px-3 py-1' onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
