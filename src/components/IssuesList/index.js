import React from 'react';
import { Container, Box } from './styles';

const IssuesList = ({ issuesArr }) => (
  <Container>
    {issuesArr.map(issue => (
      <Box key={issue.id}>
        <p>{issue.id}</p>
      </Box>
    ))}
  </Container>
);

export default IssuesList;
