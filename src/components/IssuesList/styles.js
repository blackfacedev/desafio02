import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  flex-wrap: wrap;
  align-content: flex-start;
`;

export const Box = styled.div`
  display: flex;
  height: 115px;
  padding: 20px;
  background: white;
  margin: 10px;
  flex-basis: 350px;
  flex-direction: row;

  img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background: #b286d1;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  button {
    background: #b286d1;
    color: white;
    border-radius: 3px;
    padding: 5px 15px;
    margin-top: 10px;
    width: 128px;
    text-align: left;
  }

  strong {
    font-size: 14px;
  }

  small {
    color: #d3d3d3;
    padding-top: 4px;
  }

  i {
    font-size: 14px;
    padding-right: 8px;
  }
`;
