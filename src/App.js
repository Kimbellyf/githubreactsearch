import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import {HashRouter, Route, Switch, Link, Redirect} from 'react-router-dom';
import Routes from './Routes';

import Header from "./components/header";
import Form from "./components/form/Form.jsx";
import RepoList from "./components/repolist/RepoList.jsx";
import StarredList from "./components/starredlist/StarredList.jsx";

class App extends Component {
  state = {
    user: "",
    repos: [],
    starreds: [],
    error: "",
    repoespecif: "",
    loading: false
  };

  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      console.log(repos);

      this.setState({ repos, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        loading: false
      });
    }
  };

   searchUserStarred = async () => {
    const { user } = this.state;
    this.setState({ loading: true });

    try {
      const { data: starreds } = await axios.get(
        `https://api.github.com/users/${user}/starred`
      );

      this.setState({ starreds, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        starreds : [],
        loading: false
      });
    }
  };


  render() {
    const { user, repos, error, loading, starreds, repoespecif } = this.state;

    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Routes></Routes>
          <Form
            changeUser={this.changeUser}
            user={user}
            error={error}
            loading={loading}
            buttonAction={this.searchUser}
          />
          <div>
            <h1>{user}</h1>
            <div>
              <button className="searchButton" onClick={this.searchUser}>
                Repositórios
              </button>
              <button className="searchButton" onClick={this.searchUserStarred}>
                Favoritos/Estrelas
              </button>
              <button className="searchButton" onClick={buttonAction}>
                Seguidores
              </button>
              <button className="searchButton" onClick={buttonAction}>
                Seguindo
              </button>
            </div>
          </div>
            
          <RepoList repos={repos} />        
          <StarredList starreds={starreds} />

        </div>
      </HashRouter>

    );
  }
}

export default App;