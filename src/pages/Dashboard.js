import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import '../App.css';
import firebase from "../firebase";
import 'antd/dist/antd.css';
import TeamsList from "../components/TeamsList";
// const { Option } = Select;

const Dashboard = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [user, setUser] = useState({
        name: "",
        email: "",
        category: "",
    });

    let name, value;
    const getUserData = (e1) => {
        name = e1.target.name;
        value = e1.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e2) => {
        // e2.preventDefault();       
        const { name, email, category } = user;
        if (name && email && category) {

            const teamRef = firebase.database().ref('Teams');
            const team = {
                name,
                email,
                category,
            };
            teamRef.push(team);
            setIsModalVisible(false);
            if (teamRef) {
                setUser({
                    name: "",
                    email: "",
                    category: "",
                });
            }
        }
        else {
            alert('kindly fill all input fields...')
        }

    };

    // function isTeamAva(){
    // let numTeam = TeamsList < 0;
    // if (numTeam) {
    //     return <TeamsList />;

    // } else {
    //     return <p>You Have Not Created Any Team,Click On Plus Button And Create A New Team</p>;

    // }
    // }

    return (
        <>
            <div className='main'>
                <div className="container">
                    <h1>TEAMS YOU OWN</h1>
                    <div className='team'>
                        <TeamsList />
                    </div>

                </div>

                <div className="container">
                    <h1>TEAMS YOU ARE PART OF</h1>
                    <div>
                        <p>You Are Not Part Of Any Team,Click On Plus Button And Create A New Team</p>
                    </div>
                </div>

                <div className="modal">
                    <Button type="primary" onClick={showModal}>
                        +
                    </Button>

                    <Modal
                        title="Basic Modal"
                        visible={isModalVisible}
                        onCancel={handleCancel}
                    >
                        <h2 className='hdng'>Create new Team</h2>
                        <form method='POST'>
                            <Input
                                type='text'
                                placeholder="Team Name"
                                name='name'
                                value={user.name}
                                onChange={getUserData} />
                            <Input
                                type='email'
                                placeholder="Members (Type Email)"
                                name='email'
                                value={user.email}
                                onChange={getUserData} />
                            <Input
                                type='text'
                                placeholder="Category"
                                name='category'
                                value={user.category}
                                onChange={getUserData} />
                            {/* <SelectdefaultValue="" style={{ width: 400, margin: '5px 0 12px 0' }} name='category' value={user.category}onChange={getUserData} ><Option value="">Category</Option><Option value="developers">Developers</Option><Option value="maintenance">Maintenance</Option><Option value="leads">Leads</Option><Option value="others">Others</Option> </SelectdefaultValue=> */}

                            <div className="modalButtons">
                                <Button onClick={postData}>Create</Button>
                                <Button onClick={handleCancel}>Cancel</Button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>

        </>
    )
}
export default Dashboard;