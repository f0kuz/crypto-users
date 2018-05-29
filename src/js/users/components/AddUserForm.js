import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import green from '@material-ui/core/colors/green';


class AddUserForm extends Component {
    state = {
        nickname: "",
        email: "",
        ip_address: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validateFields(email, ip_address) {
        const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validIPAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;

        return {
            email: !(validEmail.test(email)),
            ip_address: !(validIPAddress.test(ip_address))
        }
    };

    allowToAddUser() {
        const errors = this.validateFields(this.state.email, this.state.ip_address);
        const isDisabled = Object.keys(errors).some(error => errors[error]);

        return !isDisabled;
    };

    addUser = e => {
        e.preventDefault();
        if (!this.allowToAddUser) return;
        this.props.addUser(this.state);
        // clear form
        this.setState({
            nickname: "",
            email: "",
            ip_address: ""
        });
    };

    render() {
        const errors = this.validateFields(this.state.email, this.state.ip_address);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        const theme = createMuiTheme({
            palette: {
                primary: green,
            }
        });

        return (
            <form>
                <MuiThemeProvider theme={theme}>
                    <TextField
                        name='nickname'
                        type='text'
                        value={this.state.nickname}
                        onChange={e => this.change(e)}
                        label="Nickname"
                    />
                    <br/><br/>
                    <TextField
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={e => this.change(e)}
                        label="Email"
                    />
                    <br/><br/>
                    <TextField
                        name='ip_address'
                        placeholder="IP Address"
                        value={this.state.ip_address}
                        onChange={e => this.change(e)}
                        label="IP Address"
                    />
                    <br /><br />
                    <Button
                        variant="fab"
                        color="primary"
                        aria-label="add"
                        disabled={isDisabled}
                        onClick={e => this.addUser(e)}>
                        <AddIcon />
                    </Button>
                </MuiThemeProvider>
            </form>
        );
    }
};

export default AddUserForm;
