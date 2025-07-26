import React, { useState } from 'react';
import axios from 'axios';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    try {
      await axios.post('http://localhost:5000/api/message', {
        text: message,
        user: 'User1',  // Replace with dynamic user if needed
      });
      setMessage('');
      window.location.reload();  // Quick reload to see new messages (improve later)
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  return (
    <div style={styles.inputBox}>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type a message"
        style={styles.input}
      />
      <button onClick={sendMessage} style={styles.button}>Send</button>
    </div>
  );
};

const styles = {
  inputBox: {
    display: 'flex',
    marginTop: '10px',
  },
  input: {
    flex: 1,
    padding: '8px',
  },
  button: {
    padding: '8px',
  },
};

export default MessageInput;
