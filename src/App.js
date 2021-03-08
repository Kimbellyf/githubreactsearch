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
    followers : [],
    following : [],
    activateRepos: false,
    activateStarred: false,
    loading: false
  };

  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true, activateStarred: false });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      console.log(repos);

      this.setState({ repos, error: "", activateRepos: true, loading: false, activateStarred: false });
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
    this.setState({ loading: true, activateRepos: false, activateStarred: true });

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
        followers : [],
        loading: false
      });
    }
  };

  searchFollowers = async () => {
    const { user } = this.state;
    this.setState({ loading: true, activateRepos: false, activateStarred:false });

    try {
      const { data: followers } = await axios.get(
        `https://api.github.com/users/${user}/followers`
        
      );

      this.setState({ followers, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuários não encontrados",
        repos: [],
        followers : [],
        loading: false
      });
    }
  };

  searchFollowing = async () => {
    const { user } = this.state;
    this.setState({ loading: true, activateRepos: false, activateStarred:false });

    try {
      const { data: following } = await axios.get(
        `https://api.github.com/users/${user}/following`
        
      );

      this.setState({ following, error: "", loading: false });
    } catch (error) {
      this.setState({
        error: "Usuários não encontrados",
        repos: [],
        following : [],
        loading: false
      });
    }
  };



  render() {
    const { user, repos, error, loading, starreds, repoespecif,  followers,
      following, activateRepos, activateStarred  } = this.state;
//<Routes></Routes>
    return (
      //<HashRouter>
        <div className="App">
          <Header />
          
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
              <button className="basicsButton" onClick={this.searchUser}>
                Repositórios
              </button>
              <button className="basicsButton" onClick={this.searchUserStarred}>
                Favoritos/Estrelas
              </button>
              <button type="button" className="btn btn-primary" onClick={this.searchFollowers}>
                Seguidores
              </button>
              <button className="basicsButton" onClick={this.searchFollowing}>
                Seguindo
              </button>
            </div>
          </div>
          <div hidden={!activateRepos}>
             <RepoList repos={repos} />  
          </div> 
          <div hidden={!activateStarred}>
            <StarredList starreds={starreds} />
          </div>      
          

        </div>
      //</HashRouter>

    );
  }
}

export default App;