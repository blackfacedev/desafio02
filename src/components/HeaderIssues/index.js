import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const HeaderIssues = ({ repositories }) => (
  <Container>
    <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="avatar" />
    <div>
      <strong>Facebook</strong>
      <small>react</small>
    </div>
  </Container>
);

HeaderIssues.propTypes = {
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

export default HeaderIssues;
