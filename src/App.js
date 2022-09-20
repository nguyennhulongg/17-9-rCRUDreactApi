import { useEffect } from 'react';
import { useState } from 'react';
import friendApi from './api/friendApi';
import './App.css';
import AddFriend from './components/AddFriend';
import Header from './components/Header';


function App() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        const response = await friendApi.getAll();
        setFriendList(response);
      } catch(errors) {
        console.log(errors);
      }
    }

    fetchFriendList();
  }, []);

  return (
    <div className="App">
      <div className='nav-bar'>
        <h1>friends</h1>
      </div>
      <div className='container'>
        <AddFriend 
          friendList={friendList}  
          setFriendList= { setFriendList }/>
        <Header 
          friendList = {friendList} 
          setFriendList= { setFriendList }/>
      </div>
    </div>
  );
}

export default App;
