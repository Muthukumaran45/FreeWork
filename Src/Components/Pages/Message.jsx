// App.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import LoginForm from '../Chat/LoginForm';
import CardRoom from '../Chat/CardRoom';
import ChatRoom from '../Chat/ChatRoom';

const firebaseConfig = {
  apiKey: "AIzaSyBLK3Wo4ltCL5bBo2ZmGqiqs78rRwyuSKo",
  authDomain: "sample-a2b07.firebaseapp.com",
  databaseURL: "https://sample-a2b07-default-rtdb.firebaseio.com",
  projectId: "sample-a2b07",
  storageBucket: "sample-a2b07.appspot.com",
  messagingSenderId: "187602197493",
  appId: "1:187602197493:web:e61ce7ba3b50c25a27debc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function createChatRoom(participantId, username) {
  const chatRoomId = [participantId, username].sort().join('-');
  const chatRef = database.ref('chats').child(chatRoomId);
  chatRef.set(null);
}

function App() {
  const [username, setUsername] = useState('');
  const [participants, setParticipants] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  useEffect(() => {
    const participantsRef = database.ref('participants');

    participantsRef.on('value', (snapshot) => {
      const participantsData = [];
      snapshot.forEach((childSnapshot) => {
        participantsData.push(childSnapshot.val());
      });
      setParticipants(participantsData);
    });

    return () => {
      participantsRef.off();
    };
  }, []);

  const handleLogin = (username) => {
    setUsername(username);
  };

  const handleChatStart = (participantId, participantName) => {
    const chatRoomId = [participantId, username].sort().join('-');
    const chatRef = database.ref('chats').child(chatRoomId);

    chatRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        setSelectedParticipant({ id: participantId, name: participantName });
      } else {
        createChatRoom(participantId, username);
        setSelectedParticipant({ id: participantId, name: participantName });
      }
    });
  };

  const handleCloseChat = () => {
    setSelectedParticipant(null);
  };

  return (
    <div>
      {username === '' ? (
        <LoginForm onLogin={handleLogin} />
      ) : selectedParticipant ? (
        <ChatRoom
          participantId={selectedParticipant.id}
          participantName={selectedParticipant.name}
          username={username}
          onClose={handleCloseChat}
        />
      ) : (
        <CardRoom participants={participants} onChatStart={handleChatStart} currentUser={username} />
      )}
    </div>
  );
}

export default App;
