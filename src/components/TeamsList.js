import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import Teams from "./Teams";

const TeamsList = () => {
    const [teamList, setTeamList] = useState();

    useEffect(() => {
        const teamRef = firebase.database().ref('Teams');
        teamRef.on('value', (snapshot) => {
            const teams = snapshot.val();
            const teamList = [];
            for (let id in teams) {
                teamList.push({ id, ...teams[id] });
            }
            setTeamList(teamList);
        });
    }, []);
    return (
        <>
            {teamList
                ? teamList.map((team, index) => <Teams team={team} key={index} />)
                : ''}
        </>
    );
}
export default TeamsList;
