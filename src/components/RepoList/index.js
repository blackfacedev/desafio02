import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repo } from './styles';

const RepoList = ({ repositories, handleGetInfo }) => (
  <Container>
    {repositories.map(repository => (
      <Repo key={repository.id} onClick={() => handleGetInfo(repository)}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <div>
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </div>
      </Repo>
    ))}
  </Container>
);

RepoList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default RepoList;
