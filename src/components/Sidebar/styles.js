import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  height: 100vh;
  background: white;
  padding: 20px;
  padding-top: 30px;
`;

export const Form = styled.form`
  width: 100px;
  width-max: 400px;
  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 20px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #444;
    font-size: 16px;
  }

  button {
    height: 40px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: white;
    border: 0;
    font-size: 18px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
