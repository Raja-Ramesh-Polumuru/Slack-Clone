import React, { useRef } from 'react';
import styled from 'styled-components';
const HeaderWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: grid;
  align-items: center;
  height: 50px;
  padding: 0 10px;
`;
const ThreadWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
`;
const ThreadContainer = styled.div``;
const UserInputWrapper = styled.div`
  display: grid;
  border-top: 1px solid lightgray;
  align-items: center;
  justify-items: right;
  grid-template-columns: auto 50px;
  input {
    width: 100%;
    border: none;
    outline: none;
  }
  padding: 10px;
  column-gap: 10px;
`;

export const ThreadView = () => {
  const messageInput = useRef<HTMLInputElement>();
  const handleSendMessage = () => {
    console.log(
      'message sent',
      messageInput?.current?.value ?? 'Empty Message'
    );
  };
  return (
    <ThreadWrapper>
      <HeaderWrapper>Current Thread Name</HeaderWrapper>
      <ThreadContainer></ThreadContainer>
      <UserInputWrapper>
        <input placeholder="Type a question or start with @qbo to ask a question" />
        <button onClick={handleSendMessage}>Send</button>
      </UserInputWrapper>
    </ThreadWrapper>
  );
};
