import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import Issues from '../components/Issues';
import { Container } from './styles';
import api from '../services/api';

class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
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
        repositoryInput: '',
        repositories: [...this.state.repositories, response.data],
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  handleGetInfo = (id) => {
    console.log(id);
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
        <Issues repositories={this.state.repositories} />
      </Container>
    );
  }
}

export default Main;
