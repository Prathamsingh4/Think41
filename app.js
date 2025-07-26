import React, { useEffect, useState } from 'react';
import ChatWindow from './ChatWindow';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get('http://localhost:5000/api/message');
      setMessages(res.data);
    };
    fetchMessages();
  }, []);

  return (
    <div>
      <ChatWindow />
    </div>
  );
}

export default App;
