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
      dog1_id: null,
      dog2_id: null
    };
  }

  componentDidMount() {
    this.fetchProfile();
  }

  handlePass = () => {
    this.setState(prevState => ({
      currentPhoto: prevState.currentPhoto += 1,
      dogPhoto: prevState.dogList[this.state.currentPhoto]
    }));
  }

  handleMatch = async (e) => {
    e.preventDefault();
    // console.log('here', {dog1_id: this.props.dogId})
    // console.log('here2', {dog2_id: this.state.dogList[this.state.currentPhoto]._id})
    try {
      const result = await this.setState(() => (
        {
          dog1_id: this.props.dogId, 
          dog2_id: this.state.dogList[this.state.currentPhoto]._id
        }
      ))

      axios.get('/user/checkExistingMatch', { dog1_id: this.state.dog1_id, dog2_id: this.state.dog2_id })
      .then(response => {
        if (response.data[0] && response.data[1]) {
          this.props.toMatch(response.data[0]._id,response.data[1]._id);
        }
        else if (response.data[0]) {
          this.props.toMyAccount(response.data[0]._id);
        }
        else {
          alert('password wrong!');
        }
      })

      const response = await axios.post('/user/matchDogs', { dog1_id: this.state.dog1_id, dog2_id: this.state.dog2_id})
    }
    catch (e) {
      console.error(e);
    }
  }

  fetchProfile = async () => {
    try {
      const response = await axios.get('/user/getOtherDogs', {
        params: {
          userId: this.props.userId
        }
      })
      const profiles = await this.setState(() => ({ dogList: response.data}))
    }
    catch (e) {
      console.log(e)
    }
  }


  render() {
    return (
      <>
        <Profile dogList={this.state.dogList} currentPhoto={this.state.currentPhoto} handlePass={this.handlePass} handleMatch={this.handleMatch} />
      </>
    )
  }
}

export default MatchContainer;


