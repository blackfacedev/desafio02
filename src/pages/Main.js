import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Issues from '../components/Issues';
import { Container } from './styles';
import api from '../services/api';

class Main extends Component {
  state = {
    repositoryInput: '',
    selectedRepo: {
      id: 0,
      name: '',
      owner: {
        avatar_url: '',
        login: '',
      },
    },
    repositories: [],
    issuesArr: [],
  };

  handleChangeInput = (e) => {
    this.setState({
      repositoryInput: e.target.value,
    });
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        repositories: [...this.state.repositories, response.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleGetInfo = async (repository) => {
    try {
      const res = await api.get(`/repos/${this.state.repositoryInput}/issues?state=all`);
      this.setState({
        issuesArr: [...this.state.issuesArr, res.data],
        selectedRepo: repository,
      });
      console.log('pegando o array de issues');
      console.log(res);

      this.setState({
        selectedRepo: repository,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <Sidebar
          repositories={this.state.repositories}
          repositoryInput={this.state.repositoryInput}
          handleChangeInput={this.handleChangeInput}
          handleAddRepository={this.handleAddRepository}
          handleGetInfo={this.handleGetInfo}
        />
        <Issues
          repositories={this.state.repositories}
          selectedRepo={this.state.selectedRepo}
          issuesArr={this.state.issuesArr}
        />
      </Container>
    );
  }
}

export default Main;
