
import { useState } from 'react';
import friendApi from '../../api/friendApi';
import './header.css'

const Header = (props) => {
  const {friendList, setFriendList} = props

  const [friendUpdate, setFriendUpdate] = useState({
    name: "",
    id:""
  })

  const [newName, setNewName] = useState("");

  const handleDelete = async (id) => {
    try {
      await friendApi.delete(id)
      const fetchFriendList = async () => {
        try {
          const response = await friendApi.getAll();
          setFriendList(response);
        } catch(errors) {
          console.log(errors);
        }
      }
  
      fetchFriendList();
    } catch (errors){
      console.log(errors);
    }
  }

  const handleNewName = e => {
    const newName = e.target.value;
    setNewName(newName);
  }

  const handleUpdate = async (id) => {
    setFriendUpdate(friendUpdate => ({
      ...friendUpdate,
      name: newName,
      id: id
    }))
    try {
      await friendApi.put(id, friendUpdate)
      const fetchFriendList = async () => {
        try {
          const response = await friendApi.getAll();
          setFriendList(response);
        } catch(errors) {
          console.log(errors);
        }
      }
  
      fetchFriendList();
    } catch (errors){
      console.log(errors);
    }
    
  }

  return (
    <header>
      <div className="friends">
        {friendList.map((friend) => {
          return ( 
            <div key={friend.id} className="friend-list">
              <form action="" className='change-name'>
                <input 
                  type="text" 
                  onChange={handleNewName} 
                  placeholder="Enter new name"/>
              </form>
              <div className='feature'>
                <i 
                  onClick={() => handleDelete(friend.id)} 
                  className="fa-solid fa-x"></i>
                <i 
                  onClick={() => handleUpdate(friend.id)} 
                  className="fa-solid fa-floppy-disk"></i>
              </div>
              <img 
                className="friend-img" 
                src= {friend.avatar} alt="" />
              <p className="friend-name">{friend.name}</p>
            </div>
          )
        })}
      </div>
    </header> 
  );
}

export default Header;
