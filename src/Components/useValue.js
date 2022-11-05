import helenImage from "../img/helen.jpg";
import mollyImage from "../img/molly.png";
import imagesImages from "../img/images.jpg";

const initialState = {
  users: [
    {
      id: 1,
      image: imagesImages,
      header: "Frontend Engineer",
      description: "Competence with all JS libraries e.g. React",
      meta: "Joined in 2000",
      vote: 0,
    },
    {
      id: 2,
      image: helenImage,
      header: "Backend Engineer",
      description: "Exellent knowledge of Express and NodeJs",
      meta: "Joined in 2010",
      vote: 0,
    },
    {
      id: 3,
      image: mollyImage,
      header: "Cloud Engineer",
      description: "Exellent knowledge of AWS, GCP and Azure",
      meta: "Joined in 2015",
      vote: 0,
    },
  ],
};

const reducer = (initialState, action) => {
  const users = initialState.users;
  const userIndex = users.findIndex((user) => user.id === action.payload.id);
  
  switch (action.type) {
    case "increment":
      users[userIndex].vote += 1;
      initialState = { ...initialState, users };
      return initialState;

    case "decrement":
      if (initialState.users[userIndex].vote > 0) {
        users[userIndex].vote -= 1;
        initialState = { ...initialState, users };
      }
      return initialState;

    case "setValue":
      const value = parseInt(action.payload.value);
      if (isNaN(value)) {
        return initialState;
      } else {
        users[userIndex].vote = parseInt(value);
        initialState = { ...initialState, users };
        return initialState;
      }
    case "reset":
      users[userIndex].vote = 0;
      initialState = { ...initialState, users };
      return initialState;
    default:
      return initialState;
  }
};

const data = [initialState, reducer];

export default data;
