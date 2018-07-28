import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  height: 100px;
  padding: 30px;
  display: flex;
  flex-direction: row;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: #444;
  }

  small {
    color: #666;
  }
`;
