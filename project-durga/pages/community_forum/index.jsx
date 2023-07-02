import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'Alice',
      content: 'Hi, everyone! Let\'s empower each other.',
    },
    {
      sender: 'Bob',
      content: 'Absolutely! I\'m here to support and learn.',
    },
  ]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        sender: 'You',
        content: message.trim(),
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#ea028b] py-4">
        <div className=" flex justify-center ">
          <h1 className="text-[white] text-2xl font-semibold"> COMMUNITY CHAT</h1>
        </div>
      </header>
      <main className="flex-grow p-6">
        <div className=" mx-auto flex flex-col justify-between h-full bg-[white] rounded-lg shadow-xl shadow-[grey] p-6">
          <div>
          {chatMessages.map((chat, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={chat.sender === 'You' ? 'https://res.cloudinary.com/ddtzbznea/image/upload/v1685636248/samples/bike.jpg' : 'https://res.cloudinary.com/ddtzbznea/image/upload/v1685636266/cld-sample.jpg'}
                  alt={chat.sender === 'You' ? 'Your Avatar' : 'Other Avatar'}
                />
                <span className="font-bold">{chat.sender}</span>
              </div>
              <button className="text-[white] bg-main p-2 rounded-lg">{chat.content}</button>
            </div>
          ))}
          </div>
          
          <div className="flex items-center">
            <input
              type="text"
              className="flex-grow mr-2 py-2 px-4 border border-[gray] rounded-lg focus:outline-none"
              placeholder="Type your message..."
              value={message}
              onChange={handleMessageChange}
            />
            <button
              className="bg-[#ea028b] text-[white] py-2 px-4 rounded-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;







