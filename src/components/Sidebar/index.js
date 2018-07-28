import React from 'react';
import { Container, Form } from './styles';
import RepoList from '../RepoList';

const Sidebar = ({
  repositories,
  repositoryInput,
  handleChangeInput,
  handleAddRepository,
  handleGetInfo,
}) => (
  <Container>
    <Form onSubmit={handleAddRepository}>
      <input
        type="text"
        placehorlder="Digite um repo"
        value={repositoryInput}
        onChange={handleChangeInput}
      />
      <button type="submit">OK</button>
    </Form>
    <RepoList repositories={repositories} handleGetInfo={handleGetInfo} />
  </Container>
);

export default Sidebar;
