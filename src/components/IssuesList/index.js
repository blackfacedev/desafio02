import React from 'react';
import { Container, Box } from './styles';

const IssuesList = ({ issuesArr }) => (
  <Container>
    {issuesArr.map(issue => (
      <Box>
        <p>{issue.id}</p>
      </Box>
    ))}
  </Container>
);

export default IssuesList;
