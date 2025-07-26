import React from 'react';

const UserUI = () => {
  return (
    <div style={styles.userBox}>
      <p>User: <strong>User1</strong></p>
    </div>
  );
};

const styles = {
  userBox: {
    borderBottom: '1px solid #ccc',
    marginBottom: '10px',
  },
};

export default UserUI;