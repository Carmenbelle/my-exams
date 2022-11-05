import React, { useReducer } from "react";
import useValue from "./useValue";
import UserCard from "./UserCard";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [initialState, reducer] = useValue;
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  return (
    <>
      <main>
        <NavLink to="/" className="nav-back">
          Home
        </NavLink>
        <section className="sub-main">
          <section className="sub-container">
            <section className="header">
              <h1>Vote Your Favourite Track</h1>
            </section>

            <section className="card-container">
              {users.map((user) => (
                <UserCard key={user.id} user={user} dispatch={dispatch} />
              ))}
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default Users;
