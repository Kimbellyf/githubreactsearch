import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import {HashRouter, Route, Switch, Link, Redirect, useParams} from 'react-router-dom';
import Routes from './Routes';

import Header from "./components/header";
import Form from "./components/form/Form.jsx";
import RepoList from "./components/repolist/RepoList.jsx";
import StarredList from "./components/starredlist/StarredList.jsx";
import FollowersAndFollowingList from './components/followersAndFollowingList/FollowersAndFollowingList.jsx'

class App extends Component {
  state = {
    user: '',
    repos: [],
    starreds: [],
    error: "",
    repoespecif: "",
    followers : [],
    following : [],
    activateRepos: false,
    activateStarred: false,
    activateFollowing : false,
    activateFollowers : false,
    loading: false
  };


  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true, activateStarred: false, activateFollowers: false, activateFollowing: false });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      console.log(repos);

      this.setState({ repos, error: "", activateRepos: true, loading: false, activateStarred: false, activateFollowers: false, activateFollowing: false });
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
    this.setState({ loading: true, activateRepos: false, activateStarred: true,  activateFollowing :false , activateFollowers: false});

    try {
      const { data: starreds } = await axios.get(
        `https://api.github.com/users/${user}/starred`
      );

      this.setState({ starreds, error: "", loading: false, activateFollowers: false, activateFollowing: false  });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        starreds : [],
        followers : [],
        following: [],
        loading: false
      });
    }
  };

  searchFollowers = async () => {
    const { user } = this.state;
    this.setState({ loading: true, activateRepos: false, activateStarred:false,  activateFollowing : false, activateFollowers: true});

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
        following: [],
        loading: false
      });
    }
  };

  searchFollowing = async () => {
    const { user } = this.state;
    this.setState({ loading: true, activateRepos: false, activateStarred:false, activateFollowers: false, activateFollowing: true });

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
        followers: [],
        loading: false
      });
    }
  };



  render() {
    const { user, repos, error, loading, starreds, repoespecif,  followers,
      following, activateRepos, activateStarred, activateFollowing ,
      activateFollowers } = this.state;
    
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
            <div className="conteudouser">
              
              <div className="cabecalho">
                <h1>{user}</h1>
              </div>
        
              <div className="basicsButtonsTogether">
                <button  className="basicsButton" onClick={this.searchUser}>
                  Repositórios
                </button>
                <button  className="basicsButton" onClick={this.searchUserStarred}>
                  Estrelas
                </button>
                <button type="button" className="basicsButton" onClick={this.searchFollowers}>
                  Seguidores
                </button>
                <button  className="basicsButton" onClick={this.searchFollowing}>
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
            
            <div hidden={!activateFollowers}>
              <FollowersAndFollowingList followersorfollowinglist = {followers}/>
            </div>
            <div hidden={!activateFollowing}>
              <FollowersAndFollowingList followersorfollowinglist = {following}/>
            </div>
          </div>     
        </div>
      //</HashRouter>

    );
  }
}

export default App;