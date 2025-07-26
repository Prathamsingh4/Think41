import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import UserUI from './UserUI';

const ChatWindow = () => {
  return (
    <div style={styles.chatWindow}>
      <h2>ChatBot</h2>
      <UserUI />
      <MessageList />
      <MessageInput />
    </div>
  );
};

const styles = {
  chatWindow: {
    border: '1px solid #ccc',
    padding: '10px',
    width: '400px',
    margin: 'auto',
    marginTop: '20px',
  },
};

export default ChatWindow;
