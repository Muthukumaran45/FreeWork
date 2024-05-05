import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const ChatRoom = ({ participantId, participantName, username, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [amount, setamount] = useState('');


  // payment code
  const handlePayment = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_cwnVfYp1buhRnx",
        key_secret:"zL1PENEO2GDyRqFnM20OKbuF",
        amount: amount *100,
        currency:"INR",
        name:"FreeWork Payment",
        description:"To Kannan",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Muthu kumaran",
          email:"muthukumarann4545@gmail.com",
          contact:"9840247340"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  // payment code end


  
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
    <>

      <section id='chat_room_bg'>


        <div id="chatRoom">
          <h2>Chat Room &raquo;<span id="closeChat" onClick={onClose}>X</span></h2>
          <div id="chatContainer">
            <h2>{participantName}</h2>
            <div id="chatMessages">
              {messages.map((message, index) => (
                <div className="message" key={index}>
                  {message.sender === username ? `You: ${message.text}` : `${message.sender}: ${message.text}`}
                </div>
              ))}
            </div>


            <div className='row'>

              <div className='col mt-4'>
                <input className='border-light' type="text" placeholder="Type a message..." value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
                <button className='btn b-1 btn-primary mx-1' onClick={sendMessage}>Send</button>
              </div>

              <div className='col mt-4'>
                <input className='border-light' type="text" placeholder="Enter amount..." value={amount} onChange={(e) => setamount(e.target.value)} />
                <button className='btn b-1 btn-primary mx-1' onClick={handlePayment}>Pay</button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default ChatRoom;
