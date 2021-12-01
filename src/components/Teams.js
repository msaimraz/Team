import React from 'react';
import firebase from '../firebase';
import '../App.css';

const Teams = ({ team }) => {

    const deleteTeams = () => {
        const teamRef = firebase.database().ref('Teams').child(team.id);
        teamRef.remove();
    };

    return (
        <>
            <div className='teamDiv'>
                <h2>Team Name: {team.name}</h2>
                <h3>Category: {team.category}</h3>
                <h4>Members: {team.email}</h4>
                <button onClick={deleteTeams}>Delete Team</button>
            </div>
        </>
    );
}

export default Teams