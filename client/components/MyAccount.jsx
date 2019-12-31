import React from "react";
import axios from "axios";
import Signout from "./Signout.jsx"
import UserComponent from "./UserComponent.jsx"
import DogComponent from "./DogComponent.jsx"

const MyAccount = props => {
    return (
        <div>
            <Signout handleSignout={props.handleSignout} />
            <h1>My Account</h1>
            <UserComponent
                saveUserInfo={props.saveUserInfo}
                updateInfo={props.updateInfo}
                userAge={props.userAge}
                userGender={props.userGender}
                userBio={props.userBio}
            />
            <DogComponent
                saveDogInfo={props.saveDogInfo}
                updateInfo={props.updateInfo}
                dogName={props.dogName}
                dogAge={props.dogAge}
                dogGender={props.dogGender}
                dogBreed={props.dogBreed}
                dogSize={props.dogSize}
                dogTemperament={props.dogTemperament}
                dogNeuteredSpayed={props.dogNeuteredSpayed}
                dogBio={props.dogBio}
                dogPhoto={props.dogPhoto}
            />
        </div>
    )
}

export default MyAccount;
