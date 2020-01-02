import React from "react";

const UserComponent = props => {
    return (
        <div>
            <h2>User Profile</h2>
            <form id="userProfileForm">
                <label >Age *</label>
                <input
                    type="text"
                    name="userAge"
                    placeholder={props.userAge}
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <label >Gender *</label>
                <select name="userGender" onChange={e => props.updateInfo(e.target.name, e.target.value)} >
                    <option defaultValue={props.userGender}>{props.userGender}</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
                <label >Location *</label>
                <input
                    type="text"
                    name="userLocation"
                    placeholder={props.userLocation}
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <label >Bio:</label>
                <textarea
                    type="text"
                    name="userBio"
                    placeholder={props.userBio}
                    onChange={e => props.updateInfo(e.target.name, e.target.value)} />
                <label >Photo:</label>
                <input
                    type="text"
                    name="userPhoto"
                    placeholder="Enter URL"
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />

                <button type="button" onClick={() => { props.saveUserInfo() }}>Save User Profile</button>
            </form>
        </div>
    )
}

export default UserComponent;