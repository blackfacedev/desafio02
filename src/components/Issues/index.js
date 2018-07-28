import React from 'react';
import HeaderIssues from '../HeaderIssues';
import IssuesList from '../IssuesList';
import { Container } from './styles';

const Issues = ({ selectedRepo, issuesArr }) => (
  <Container>
    <HeaderIssues selectedRepo={selectedRepo} />
    <IssuesList issuesArr={issuesArr} />
  </Container>
);

export default Issues;
