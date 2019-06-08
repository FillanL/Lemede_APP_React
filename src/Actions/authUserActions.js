import { AUTH_USER, CREATE_USER } from "./types";

// USER CRUDDD
export const createUser = (userCreateValues) => dispatch => {

  fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(
      {user: userCreateValues
    })
  })
};

export const updateUser = (userCreateValues) => dispatch => {

    fetch("http://localhost:3000/api/v1/users", {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(
        {user: userCreateValues
      })
    })
  };

  export const deleteUser = (userCreateValues) => dispatch => {

    fetch("http://localhost:3000/api/v1/users", {
      method: "UPDATE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(
        {user: userCreateValues
      })
    })
  };
