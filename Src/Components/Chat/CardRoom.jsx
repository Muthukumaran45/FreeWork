import React from 'react';
function CardRoom({ participants, onChatStart, currentUser }) {

  const filteredParticipants = participants.filter(participant => participant.id !== currentUser);

  return (
    <div className='container mt-5'>
      <h2 className='text-center mb-5'>Card Room</h2>
      <div className='row'>
        {filteredParticipants.map((participant) => (
          <div className='col-md-3 mb-4'>
            <div className="card  card_" key={participant.id} onClick={() => onChatStart(participant.id, participant.name)}>
              <div className="card-body">
                <h5 className="card-title">{participant.name}</h5>
                <p className="card-text">Click to start chatting</p>
                <button className=" mt-3 btn btn-secondary button_">Chat &raquo;</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRoom;
