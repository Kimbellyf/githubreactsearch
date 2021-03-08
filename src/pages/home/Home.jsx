import React, { Component } from "react";
import axios from "axios";

import "./Home.css";
import {HashRouter} from 'react-router-dom';
import Routes from '../../Routes.jsx';

import Header from "./components/header";
import Form from "./components/form/Form.jsx";
import RepoList from "./components/repolist/RepoList.jsx";
import StarredList from "./components/starredlist/StarredList.jsx";
import UserAndRepos from "../userandrepos/UserAndRepos";

class Home extends Component {
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

  render() {
    const { user, repos, error, loading, starreds, repoespecif } = this.state;

    return (
      <HashRouter>
        <div className="Home">
          <Header />
          <Routes></Routes>
          <Form
            changeUser={this.changeUser}
            user={user}
            error={error}
            loading={loading}
            buttonAction={this.searchUser}
          />
          <UserAndRepos 
            user={user}
          />
        </div>
      </HashRouter>

    );
  }
}

export default Home;