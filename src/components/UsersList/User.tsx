import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {
    changeVaccinate,
    deleteUser,
    editUser
} from "../../redux/features/users";

type TUserProps = {
  user: { id: number; name: string; vaccinate: boolean };
};

const User: React.FC<TUserProps> = ({ user }): JSX.Element => {
    const dispatch = useDispatch()

  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(user.name);

  const handleEdit = () => {
      dispatch(editUser(editName,user.id))
      setEdit(false)
  }

  const handleChangeCheck = () => {
    dispatch(changeVaccinate(user.id,user.vaccinate))
  }

  return (
      <li className="todo">
          <label>
              <input
                  type="checkbox"
                  defaultChecked={user.vaccinate}
                  onChange={handleChangeCheck}
              />
              <span/>
          </label>
        {edit ?
          <>
              <div className="input-field col s6 inputMargin">
                  <input
                      onChange={(e) => setEditName(e.target.value)}
                      value={editName}
                      id="input"
                      />

              </div>
              <button
                  className='waves-effect waves-light btn #bbdefb blue lighten-4'
                  onClick={handleEdit}>
                  save
              </button>
          </>

         :
            <>
                <span>{user.name}</span>
                <button
                    className='waves-effect waves-light btn'
                    onClick={()=>setEdit(true)}>
                    edit
                </button>
            </>
        }

        <span className={user.vaccinate ? "green-text" : "red-text"}>
          {user.vaccinate ? "вакцинирован" : "не вакцинирован"}
        </span>
              <i
                  onClick={()=> dispatch(deleteUser(user.id))}
                  className='material-icons red-text cursor'>
                  delete
              </i>
      </li>
  );
};

export default User;
