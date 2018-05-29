import React, { Component } from 'react';
import './../../../css/App.css';
import UsersList from '../../users/views/UsersList';


class AppLayout extends Component {
  render() {
    return (
      <div className="app-root">
        <header>
          <h1>Crypto Users</h1>
        </header>
        <main>
          <UsersList />
        </main>
      </div>
    );
  }
}

export default AppLayout;
