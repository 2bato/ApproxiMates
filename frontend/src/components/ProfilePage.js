import React, {useState} from 'react'

function ProfilePage(props) {
    const [editProfile, setEditProfile] = useState(false);

    const [username, setUsername] = useState("");
    const [file, setFile] = useState();
    

    return (
        <div>
            <h2>
                upload profile picture
            </h2>
            <input type = 'file' onChange={(e) => {setFile(URL.createObjectURL(e.target.files[0]));}}/>
            <img src = {file}/>
        </div>
    );
}

export default ProfilePage;