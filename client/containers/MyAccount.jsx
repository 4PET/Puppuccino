import React from "react";
import axios from "axios";
import Signout from "../components/Signout.jsx";
import UserComponent from "../components/UserComponent.jsx";
import DogComponent from "../components/DogComponent.jsx";
import Navigation from '../components/Navigation/Navigation';

class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //User Profile
            userId: '',
            userAge: '',
            userGender: '',
            userBio: '',
            userPhoto: '',
            userLocation: '',

            //Dog Pofile
            dogName: '',
            dogAge: '',
            dogGender: '',
            dogBreed: '',
            dogSize: '',
            dogTemperament: '',
            dogNeuteredSpayed: '',
            dogBio: '',
            dogPhoto: '',
        }
        this.saveUserInfo = this.saveUserInfo.bind(this);
        this.saveDogInfo = this.saveDogInfo.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.updateInfo = this.updateInfo.bind(this)
    }

    componentDidMount() {
        this.getUserInfo()
    }

    updateInfo(property, value) {
        let updateObj = {};
        updateObj[property] = value;
        this.setState(updateObj);
    }

    saveUserInfo() {
        axios.post('/user/saveUserInfo', {
            userId: this.state.userId,
            userAge: this.state.userAge,
            userGender: this.state.userGender,
            userBio: this.state.userBio,
            userPhoto: this.state.userPhoto,
            userLocation: this.state.userLocation
        })
            .then(response => {
                console.log("User info saved.");
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    saveDogInfo() {
        axios.post('/user/saveDogInfo', {
            dogName: this.state.dogName,
            dogAge: this.state.dogAge,
            dogGender: this.state.dogGender,
            dogBreed: this.state.dogBreed,
            dogSize: this.state.dogSize,
            dogBreed: this.state.dogBreed,
            dogTemperament: this.state.dogTemperament,
            userId: this.state.userId,
            dogNeuteredSpayed: this.state.dogNeuteredSpayed,
            dogBio: this.state.dogBio,
            dogPhoto: this.state.dogPhoto
        })
            .then(response => {
                console.log("Dog info saved.");
            })
            .catch(function (error) {
                console.error(error);
            });
        console.log(this.state)
    }

    getUserInfo() {
        axios.post('/user/login', { userId: this.props.userId })
            .then(response => {
                this.setState({
                    isLoggedIn: true,
                    userId: response.data[0]._id,
                    userAge: response.data[0].age,
                    userGender: response.data[0].gender,
                    userBio: response.data[0].bio,
                    userPhoto: response.data[0].photo,
                    userLocation: response.data[0].location,
                    dogName: response.data[1].name,
                    dogAge: response.data[1].age,
                    dogGender: response.data[1].gender,
                    dogBreed: response.data[1].breed,
                    dogSize: response.data[1].size,
                    dogTemperament: response.data[1].temperament,
                    dogNeuteredSpayed: response.data[1].neutered_spayed,
                    dogBio: response.data[1].bio,
                    dogPhoto: response.data[1].photo,
                });
            })
            .then(this.fetchProfile)
            .catch(function (error) {
                console.error(error);
            });
    }

    render() {
        console.log('this is my account state', this.state)
        return (
            <div>
                <Navigation signOut={this.props.signOut} handleClickMyAccount={this.props.toMyAccount} toChat ={this.props.toChat} toMatch={this.props.toMatch} />
                <h1>My Account</h1>
                <UserComponent
                    saveUserInfo={this.saveUserInfo}
                    updateInfo={this.updateInfo}
                    userAge={this.state.userAge}
                    userGender={this.state.userGender}
                    userBio={this.state.userBio}
                />
                <DogComponent
                    saveDogInfo={this.saveDogInfo}
                    updateInfo={this.updateInfo}
                    dogName={this.state.dogName}
                    dogAge={this.state.dogAge}
                    dogGender={this.state.dogGender}
                    dogBreed={this.state.dogBreed}
                    dogSize={this.state.dogSize}
                    dogTemperament={this.state.dogTemperament}
                    dogNeuteredSpayed={this.state.dogNeuteredSpayed}
                    dogBio={this.state.dogBio}
                    dogPhoto={this.state.dogPhoto}
                />
            </div>
        )
    }
}

export default MyAccount;
