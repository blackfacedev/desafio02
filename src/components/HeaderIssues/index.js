import React from 'react';
import { Container } from './styles';

const HeaderIssues = ({ selectedRepo }) => (
  <Container>
    <img src={selectedRepo.owner.avatar_url} alt={selectedRepo.owner.login} />
    <div>
      <strong>{selectedRepo.name}</strong>
      <small>{selectedRepo.owner.login}</small>
    </div>
  </Container>
);

export default HeaderIssues;
