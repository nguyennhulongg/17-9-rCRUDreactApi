import { useState } from "react";
import friendApi from "../../api/friendApi";
import './addfriend.css'


const AddFriend = (props) => {
  const { friendList, setFriendList } = props;
  const [addedFriend, setAddedFriend] = useState({
    name: "",
    originalPrice: "",
    id: "",
    avatar:""
  })

  const randomId = Math.floor(Math.random() * 10000);

  const newFriendName = e => {
    const name = e.target.value 
    setAddedFriend(addedFriend => ({
      ...addedFriend,
        name: name,
        id: randomId,
    }))
  }

  const newFriendImage = e => {
    const avatar = e.target.files[0].name
    setAddedFriend(addedFriend => ({
      ...addedFriend, 
      avatar: avatar,
      id:randomId
    }))
  }
  

  const handleAddFriend = async (e) => {
    e.preventDefault();
    await friendApi.post(addedFriend)
    const fetchFriendList = async () => {
      try {
        const response = await friendApi.getAll();
        setFriendList(response);
      } catch(errors) {
        console.log(errors);
      }
    }

    fetchFriendList();
  }

  return (
    <div className="add-friend">
      <h2>Create a new friend</h2>
      <form action="">
        <label>Name:</label>
        <input className="new-friend-name" type="text" onChange={newFriendName} placeholder="Enter friend's name"/>
        <div className="avatar">
          <label>Avatar:</label>
          <i className="fa-solid fa-image"></i>
          <input className="new-friend-avatar" type="file" onChange={newFriendImage} accept="image/jpeg"/>
        </div>
        <button onClick={handleAddFriend}>Add new friend</button>
      </form>
    </div>
  );
}

export default AddFriend;
