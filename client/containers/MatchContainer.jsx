import React, { Fragment } from "react";
import BioBtn from "../components/Match/BioBtn"
import LikeBtn from "../components/Match/LikeBtn"
import PassBtn from "../components/Match/PassBtn"
import Profile from "../components/Match/Profile";
import Navigation from '../components/Navigation/Navigation'

class MatchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: [],
    };
  }

  componentDIdMount() {
    console.log('fetching data');
    this.fetchProfile();
  }

  fetchProfile() {
    axios.get('/user/getOtherDogs', {
      params: {
        userId: this.props.userId
      }
    })
    .then(res => {
      this.setState(() => ({
        dogList: res.data,
        // dogPhoto: res.data[this.state.currentPhoto].photo
      }))
    })
    .catch(function (error) {
      console.error(error);
    });
  }


  render() {
    console.log(this.state);
    return (
      <>
        <Navigation signOut={this.props.handleSignout} handleClickMyAccount={this.handleClickMyAccount} />
        <Profile dogList={this.state.dogList} currentPhoto={this.state.currentPhoto} />
        <div>
          <PassBtn handlePass={this.handlePass} />
          <LikeBtn likeButton={this.likeButton} />          
        </div>
        <BioBtn />
      </>
    )
  }
}

export default MatchContainer;



