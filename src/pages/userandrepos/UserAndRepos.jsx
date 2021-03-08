import React, {Component} from "react";
import axios from 'axios';

import Spinner from "../../components/spinner/Spinner.jsx";
import Nav from '../../components/nav/Nav.jsx'
import CircleAvatar from '../../components/circleavatar/CircleAvatar.jsx'
import RepoList from "../../components/repolist/RepoList.jsx";
import StarredList from "../../components/starredlist/StarredList.jsx";
import FollowersAndFollowindList from '../../components/followersAndFollowingList/FollowersAndFollowingList.jsx';


const userProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Pesquisa'
}


class UserAndRepos extends Component{
    //props.match.params.id
    state = {
        user: "",
        repos: [],
        starreds: [],
        error: "",
        repoespecif: "",
        urlImage: "",
        loading: false,
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
    

    render(){
        const { user, repos, error, loading, starreds, repoespecif, urlImage } = this.state;

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
                <RepoList  repos={repos} />
            </div>
        );
    }
    
}

export default UserAndRepos;



