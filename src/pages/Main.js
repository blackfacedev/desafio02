import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Issues from '../components/Issues';
import { Container } from './styles';
import api from '../services/api';

class Main extends Component {
  state = {
    loading: false,
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

    this.setState({
      loading: true,
    });

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);
      this.setState({
        repositories: [...this.state.repositories, response.data],
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({
        loading: false,
      });
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
      console.log(this.state.issuesArr);

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
          loading={this.state.loading}
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
