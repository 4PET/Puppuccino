import React from "react";
import axios from 'axios';
import Profile from "../components/Match/Profile";

class MatchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: [],
      currentPhoto: 0,
      pass: false,
      matches: [],
    };
  }

  componentDidMount() {
    this.fetchProfile();
  }

  handlePass = () => {
    if (this.state.currentPhoto === this.state.dogList.length - 1) {
      this.setState(prevState => ({
        currentPhoto: 0,
        dogPhoto: prevState.dogList[this.state.currentPhoto]
      }));
    } else {

      this.setState(prevState => ({
        currentPhoto: prevState.currentPhoto += 1,
        dogPhoto: prevState.dogList[this.state.currentPhoto]
      }));
    }
  }

  handleMatch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/matchDogs', { dog1_id: this.props.dogId, dog2_id: this.state.dogList[this.state.currentPhoto]._id})
      if(response === 'matched!'){
        console.log('matched');
      }
      console.log('this is resonse dog id', response.data.dog2_id);
    }
    catch (e) {
      console.error(e);
    }
    if (this.state.currentPhoto === this.state.dogList.length - 1) {
      this.setState(prevState => ({
        currentPhoto: 0,
        dogPhoto: prevState.dogList[this.state.currentPhoto]
      }));
    } else {
      this.setState(prevState => ({
        currentPhoto: prevState.currentPhoto += 1,
        dogPhoto: prevState.dogList[this.state.currentPhoto]
      }));
    }
  }

  fetchProfile = async () => {
    try {
      const response = await axios.get('/user/getOtherDogs', {
        params: {
          userId: this.props.userId
        }
      })
      const profiles = await this.setState(() => ({ dogList: response.data }))
    }
    catch (e) {
      console.log(e)
    }
  }


  render() {
    return (
      <>
        <h2>Matches</h2>
        <Profile dogList={this.state.dogList} currentPhoto={this.state.currentPhoto} handlePass={this.handlePass} handleMatch={this.handleMatch} />
      </>
    )
  }
}

export default MatchContainer;


