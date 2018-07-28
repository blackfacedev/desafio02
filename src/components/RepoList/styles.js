import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-top: 1px solid #f6f6f6;
  padding-top: 20px;

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

export const Repo = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 20px;
`;
