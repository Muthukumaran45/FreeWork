import React from 'react';
function CardRoom({ participants, onChatStart, currentUser }) {

  const filteredParticipants = participants.filter(participant => participant.id !== currentUser);

  return (
    <>
    <section id='chat_room_bg'>
      <div className='container pt-5'>
        <h2 className='text-center text-white'>CHAT ROOM</h2>
        <p className='text-center mb-5 text-white'>Here you can click the chat button to chat with them...</p>

        <div className='row'>
          {filteredParticipants.map((participant) => (
            <div className='col-md-3 mb-4'>
              <div className="card  card_" key={participant.id} onClick={() => onChatStart(participant.id, participant.name)}>
                <div className="card-body bg-light">
                  <h5 className="card-title">{participant.name}</h5>
                  <p className="card-text">Click to start chatting</p>
                  <button className=" mt-3 btn chat-card-btn text-light">Chat &raquo;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default CardRoom;
