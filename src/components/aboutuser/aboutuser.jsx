import React from "react";
import CircleAvatar from '../circleavatar/CircleAvatar.jsx';
import './AboutUser.css';


/*searchUser = async () => {
    const { user } = this.state;
    this.setState({ loading: true, activateStarred: false, activateFollowers: false, activateFollowing: false });

    try {
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${user}`
      );

      this.setState({ repos, error: "", activateRepos: true, loading: false, activateStarred: false, activateFollowers: false, activateFollowing: false, activateButtonsUser: true });
    } catch (error) {
      this.setState({
        error: "Usuário não encontrado",
        repos: [],
        activateButtonsUser: false,
        loading: false
      });
    }
}; */

const AboutUser = ({objuser}) => (
  <div>
    <div className="spaceimage">
        <CircleAvatar urlImage={objuser.avatar_url}/>
    </div>
   
    <div className="spacetextbio">
        <div className="repoListContainer">
            <h1>{objuser.name}</h1><h3> ({objuser.login}) </h3>
           
            <p>{objuser.bio} </p> 

        </div>
    </div>
  </div>

);

export default AboutUser;