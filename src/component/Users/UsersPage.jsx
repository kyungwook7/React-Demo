import UserList from "./UserList.jsx";
import {useState} from "react";

function UsersPage(){
    const [user, setUser] = useState(null);

    return(
        <main className="users-page">
            {/*선택한 user 를 형제 컴포넌트와 공유하기 위해
            부모 컴퍼넌트 UserPage 가 user 상태를 선언했으므로
            UserList 로 props 를 선언*/}
           <UserList user={user} setUser={setUser}/>
            <UserDetails user={user}/>
        </main>
    )
}

export default UsersPage