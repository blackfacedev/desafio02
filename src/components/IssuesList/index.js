import React from 'react';
import { Container, Box, Info } from './styles';

const IssuesList = ({ issuesArr }) => (
  <Container>
    <Box>
      <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="img" />
      <Info>
        <strong>Aqui vai entrar algum titulo</strong>
        <small>username</small>
        <button type="button">
          <i className="fa fa-share-square" />ABRIR ISSUE
        </button>
      </Info>
    </Box>
  </Container>
);

export default IssuesList;
