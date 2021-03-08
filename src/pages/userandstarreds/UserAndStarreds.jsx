import React, {Component} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import Spinner from "../../components/spinner/Spinner.jsx";
import Nav from '../../components/nav/Nav.jsx'
import CircleAvatar from '../../components/circleavatar/CircleAvatar.jsx'
import RepoList from "../../components/repolist/RepoList.jsx";
import StarredList from "../../components/starredlist/StarredList.jsx";
import FollowersAndFollowindList from '../../components/followersAndFollowingList/FollowersAndFollowingList.jsx';
import {Switch, Route, Redirect,Link} from 'react-router'



const userProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Pesquisa'
}


class UserAndStarreds extends Component{
    //({ user, loading, error, buttonAction, changeUser })

    state = {
        user: "",
        repos: [],
        starreds: [],
        error: "",
        repoespecif: "",
        urlImage: "",
        loading: false
    };
    repositories(){
      const history = useHistory();
      const goRepositories= () => history.push('');

    }

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
    

    render(){
        const { user, repos, error, loading, starreds, repoespecif } = this.state;

        return(
            <div>
                <Nav ></Nav>
                <div>
                    <CircleAvatar urlImage ={urlImage}></CircleAvatar>
                    <div>
                        <button>Seus repositórios</button>
                        <button>Repositórios favoritos</button>
                        <button>Seguidores</button>
                        <button>Seguindo</button>
                    </div>
                </div>
                <StarredList starreds={starreds} />
            </div>
        );
    }
    
}

export default UserAndStarreds;

