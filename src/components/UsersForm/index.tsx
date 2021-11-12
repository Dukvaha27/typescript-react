import React, { useRef, useState } from "react";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/users";
import "./style.css"

const UsersFrom: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { users } = useTypeSelector((state) => state.users);

  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);


  const ref = useRef<HTMLInputElement>(null);
  const one = users.find((item) => item.name === value);

  const AddTodo = (event: React.KeyboardEvent) => {
    if (one || value.length <1) return false;
    if (event.key === "Enter") {
      dispatch(addUser(value,check));
      setValue("");
    }
  };

  return (
    <div className="input-field df-jb mt2">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        ref={ref}
        onKeyPress={AddTodo}
        placeholder={"Введите имя"}
      />
      <form action="#">
        <p>
          <label>
            <input
              type="checkbox"
              defaultChecked={check}
              onChange={() => setCheck(!check)}
            />
            <span/>
          </label>
        </p>
      </form>
    </div>
  );
};

export default UsersFrom;
