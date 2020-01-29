import React from "react";
import axios from "axios";
import UserComponent from "../components/UserComponent.jsx";
import DogComponent from "../components/DogComponent.jsx";

class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: -1,
            dogId: -1,
            //User Profile
            
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
    }

    componentDidMount() {
        this.getUserInfo()
    }

    updateInfo = (property, value) => {
        let updateObj = {};
        updateObj[property] = value;
        this.setState(updateObj);
    }

    saveUserInfo = () => {
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

    saveDogInfo = () => {
        let url = "";
        if(this.state.dogId < 0){
            url = '/user/createNewDog';
        }
        else{
            url = '/user/saveDogInfo';
        }
        axios.post(url, {
            dogName: this.state.dogName,
            dogAge: this.state.dogAge,
            dogGender: this.state.dogGender,
            dogBreed: this.state.dogBreed,
            dogSize: this.state.dogSize,
            dogTemperament: this.state.dogTemperament,
            userId: this.state.userId,
            dogNeuteredSpayed: this.state.dogNeuteredSpayed,
            dogBio: this.state.dogBio,
            dogPhoto: this.state.dogPhoto
        })
        .then(response => {
            console.log('this is response for saving dog info', response);
            this.props.toMatch(this.props.userId, response.data[0]._id);
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    getUserInfo = () => {
        axios.post('/user/login', { userId: this.props.userId })
        .then(response => {
            console.log('this is response for first sign in', response, this.props.userId, this.props.dogId);
            if(this.props.dogId < 0){ // no dog info yet!
                this.setState({
                    userId: this.props.userId,
                    dogId: this.props.dogId
                })
                if(typeof response.data[0].age === "number"){
                    this.setState({
                        userAge: response.data[0].age,
                        userGender: response.data[0].gender,
                        userBio: response.data[0].bio,
                        userPhoto: response.data[0].photo,
                        userLocation: response.data[0].location,
                    });
                }
            }
            else{
                this.setState({
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
            }
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    render() {
        console.log('my account', this.props.userId, this.props.dogId, this.state);
        return (
            <div>
                <h2>My Account</h2>
                <UserComponent
                    saveUserInfo={this.saveUserInfo}
                    updateInfo={this.updateInfo}
                    userAge={this.state.userAge}
                    userGender={this.state.userGender}
                    userBio={this.state.userBio}
                    userPhoto = {this.state.userPhoto} 
                    userLocation={this.state.userLocation}
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
