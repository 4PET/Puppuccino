import React from "react";

const DogComponent = props => {
    return (
        <div>
            <h2>Dog Profile</h2>
            <form id="dogProfileForm">
                <label >Name *</label>
                <input
                    type="text"
                    name="dogName"
                    placeholder={props.dogName}
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <label >Age *</label>
                <input
                    type="text"
                    name="dogAge"
                    placeholder={props.dogAge}
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <label >Gender *</label>
                <select name="dogGender" onChange={e => props.updateInfo(e.target.name, e.target.value)} >
                    <option defaultValue={props.dogGender}>{props.dogGender}</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
                <label >Breed *</label>
                <select name="dogBreed" onChange={e => props.updateInfo(e.target.name, e.target.value)} >
                    <option defaultValue={props.dogBreed}>{props.dogBreed}</option>
                    <option value="Australian Shepherd">Australian Shepherd</option>
                    <option value="Beagle">Beagle</option>
                    <option value="Bernese Mountain Dog">Bernese Mountain Dog</option>
                    <option value="Boston Terrier">Boston Terrier</option>
                    <option value="Boxer">Boxer</option>
                    <option value="Bulldog">Bulldog</option>
                    <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
                    <option value="Cocker Spaniel">Cocker Spaniel</option>
                    <option value="Corgi">Corgi</option>
                    <option value="Dachshund">Dachshund</option>
                    <option value="Doberman Pinscher">Doberman Pinscher</option>
                    <option value="English Springer Spaniel">English Springer Spaniel</option>
                    <option value="French Bulldog">French Bulldog</option>
                    <option value="German Shepherd">German Shepherd</option>
                    <option value="Great Dane">Great Dane</option>
                    <option value="Golden Retriever">Golden Retriever</option>
                    <option value="Havanese">Havanese</option>
                    <option value="Labrador Retriever">Labrador Retriever</option>
                    <option value="Mastiff">Mastiffs</option>
                    <option value="Miniature Schnauzers">Miniature Schnauzers</option>
                    <option value="Other">Other</option>
                    <option value="Pointer">Pointer</option>
                    <option value="Pomeranian">Pomeranian</option>
                    <option value="Poodle">Poodle</option>
                    <option value="Rottweiler">Rottweiler</option>
                    <option value="Shih Tzu">Shih Tzu</option>
                    <option value="Siberian Huskie">Siberian Huskie</option>
                    <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                    <option value="Vizsla">Vizsla</option>
                </select>
                <label >Size *</label>
                <select name="dogSize" onChange={e => props.updateInfo(e.target.name, e.target.value)} >
                    <option defaultValue={props.dogSize}>{props.dogSize}</option>
                    <option value="Under 10 lbs">Under 10 lbs</option>
                    <option value="10-20 lbs">10-20 lbs</option>
                    <option value="20-30 lbs">20-30 lbs</option>
                    <option value="30-40 lbs">30-40 lbs</option>
                    <option value="40-60 lbs">40-60 lbs</option>
                    <option value="60-80 lbs">60-80 lbs</option>
                    <option value="Over 80 lbs">Over 80 lbs</option>
                </select>
                <label >Temperament *</label>
                <select name="dogTemperament" onChange={e => props.updateInfo(e.target.name, e.target.value)} >
                    <option defaultValue={props.dogTemperament}>{props.dogTemperament}</option>
                    <option value="Fairly calm">Fairly calm</option>
                    <option value="Likes to play a little">Likes to play a little</option>
                    <option value="Extremely energetic">Extremely energetic</option>
                </select>
                <label >Neutered/Spayed? *</label>
                <select name="dogNeuteredSpayed" onChange={e => props.updateInfo(e.target.name, e.target.value)} >
                    <option defaultValue={props.dogNeuteredSpayed}>{props.dogNeuteredSpayed}</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label >Bio:</label>
                <textarea
                    type="text"
                    name="dogBio"
                    placeholder={props.dogBio}
                    onChange={e => props.updateInfo(e.target.name, e.target.value)} />
                <label >Photo:</label>
                <input
                    type="text"
                    name="dogPhoto"
                    placeholder="Enter URL"
                    onChange={e => props.updateInfo(e.target.name, e.target.value)}
                />
                <button type="button" onClick={() => { props.saveDogInfo() }}>Save Dog Profile</button>
            </form>
        </div>
    )
}

export default DogComponent;