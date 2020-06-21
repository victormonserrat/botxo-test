import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import UsersList from "./users/pages/UsersList";
import UsersProvider from "./users/state/UsersProvider";

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
      <UsersList />
    </UsersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
