import React, {useState} from 'react';

import Users from "./components/Users/Users"
import UserDetails from "./components/UserDetails/UserDetails"
import Posts from "./components/Posts/Posts"


const App = () => {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)
    const getUser = (user) =>{
        setUser(user)
        setUserId(null)
    }
    const getUserId = (id) => {
        setUserId(id)
    }

    return (
        <div>
          <div className='wrap'>
              <Users getUser={getUser}/>
              {user && <UserDetails user={user} getUserId={getUserId}/>}
          </div>
            <div >
                {userId && <Posts usedId={userId}/>}
            </div>

        </div>
    );
};

export default App;