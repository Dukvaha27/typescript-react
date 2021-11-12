import React  from "react";
import "./style.css";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import UsersFrom from "../UsersForm";
import User from "./User";



const UsersList: React.FC = () => {
  const { users } = useTypeSelector((state) => state.users);



  return (
    <>
      <UsersFrom/>
      <ul>
        {users.map((user) => {
            return (
              <User key={user.id} user={user}/>
          );
        })}
      </ul>
    </>
  );
};

export default UsersList;
