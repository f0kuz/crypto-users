import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const User = ({ user, id, userToRemove }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">{user.nickname}</TableCell>
            <TableCell numeric>{user.email}</TableCell>
            <TableCell numeric><button onClick={() => userToRemove(id)}>Remove</button></TableCell>
        </TableRow>
    );
};

export default User;
