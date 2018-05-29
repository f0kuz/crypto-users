import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import User from './../components/User';
import AddUserForm from './../components/AddUserForm';


class UsersList extends Component {
    state = {
        users: [],
        userToRemove: null
    };

    addUser = fields => {
        const existingUsers = this.state.users.filter(user => {
            return (user.nickname.toLowerCase() === fields.nickname.toLowerCase()) || (user.email.toLowerCase() === fields.email.toLowerCase());
        });
        if (existingUsers.length > 0) return;
        this.setState({
            users: [...this.state.users, fields]
        });
    };

    onUserRemove = userToRemove => {
        this.setState({
            userToRemove
        });
        if (window.confirm(`Are you sure you want to remove ${this.state.users[userToRemove].nickname}?`)) {
            this.state.users.splice(userToRemove, 1)
        }
    }

    removeAllUsers = () => {
        if (window.confirm("Are you sure you want to remove all users?")) {
            this.setState({
                users: []
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <AddUserForm addUser={fields => this.addUser(fields)} />
                <br/>
                {this.state.users.length > 0 ? <button onClick={this.removeAllUsers}>Remove All Users</button> : ""}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nickname</TableCell>
                            <TableCell numeric>Email</TableCell>
                            <TableCell numeric>Remove User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map((user, i) => {
                            return (
                                <User
                                    user={user}
                                    key={i}
                                    id={i}
                                    userToRemove={this.onUserRemove}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
};

export default UsersList;
