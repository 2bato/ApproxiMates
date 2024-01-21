import React, {useState} from 'react'

function ProfilePage(props) {
    const [editProfile, setEditProfile] = useState(false);

    const [username, setUsername] = useState("");
    const [file, setFile] = useState();
    

    return (
        <div>
            <button onClick={() => setEditProfile(!editProfile)}>
                edit profile
            </button>
            <h2>
                change username
            </h2>
            <input type = 'text' value = {username} onChange = {(e) => {setUsername(e.target.value);}}/>
            <h2>
                upload profile picture
            </h2>
            <input type = 'file' onChange={(e) => {setFile(URL.createObjectURL(e.target.files[0]));}}/>
            <img src = {file}/>
        </div>
    );
}

export default ProfilePage;