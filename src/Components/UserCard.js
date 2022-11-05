import React from "react";

const UserCard = ({ user, dispatch }) => {
  return (
    <figure>
      <img className="image" src={user.image} alt={user.header} />
      <figcaption>
        <h3>{user.header}</h3>
        <p>{user.description}</p>
        <p>{user.meta}</p>
      </figcaption>

      <section className="vote-container">
        <span>
          <h3>vote</h3>

          <span>
            <h4>{user.vote}</h4>
          </span>
        </span>
      </section>

      <section className="vote-button">
        <span>
          <button
            onClick={() =>
              dispatch({ type: "increment", payload: { id: user.id } })
            }
          >
            +
          </button>
          <button
            className="vote-reset"
            onClick={() =>
              dispatch({ type: "reset", payload: { id: user.id } })
            }
          >
            Reset
          </button>
          <button
            onClick={() =>
              dispatch({ type: "decrement", payload: { id: user.id } })
            }
          >
            -
          </button>
        </span>

        <span className="input-value">
          <span className="value">
            <p>Input Value</p>
          </span>

          <input
            type="number"
            onChange={(e) =>
              dispatch({
                type: "setValue",
                payload: { id: user.id, value: e.target.value },
              })
            }
          />
        </span>
      </section>
    </figure>
  );
};

export default UserCard;
