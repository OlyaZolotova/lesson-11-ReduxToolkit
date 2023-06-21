import React from "react";
import "./App.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addCash, addUsers, changeNick, getCash, removeUsers} from "./store/reducers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state: any) => state.cash.cash);
  const nick = useSelector((state: any) => state.nick.username);
  const users = useSelector((state: any) => state.users.users);
  const store = useStore();

  console.log(store.getState());

  const addCashFun = (cash: number) => {
    dispatch(addCash(cash));
  };

  const getCashFun = (cash: number) => {
    dispatch(getCash(cash));
  };

  const changeNickFun = (nick: string) => {
    dispatch(changeNick(nick));
  };

  const addUsersFun = (user: string) => {
    dispatch(addUsers(user));
  };

  const removeUsersFun = (user: string) => {
    dispatch(removeUsers(user));
  };

  return (
    <div className='App'>
      <div>{cash}</div>
      <div>{nick}</div>
      <div>
        <button onClick={() => changeNickFun(prompt("Введите ник") || "Any")}>
          Сменить ник
        </button>
        <button onClick={() => addCashFun(Number(prompt("Введите сумму")))}>
          Положить деньги
        </button>
        <button onClick={() => getCashFun(Number(prompt("Введите сумму")))}>
          Снять деньги
        </button>
        <button onClick={() => addUsersFun(prompt("Введите имя") || "Any user")}>
          Добавить юзера
        </button>
      </div>
      { users.map((user: string) => {
        return (
          <div
            key={user}
            style={{ padding: "10px" }}
            onClick={() => {
              removeUsersFun(user);
            }}>
            {user}
          </div> 
        );
      })}
    </div>
  );
}

export default App;
