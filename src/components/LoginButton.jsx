import React, { Component } from 'react';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false, // Початковий стан для входу користувача
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
    this.props.onChange(true); // Передача стану входу через callback
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
    this.props.onChange(false); // Передача стану виходу через callback
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogout}>Вихід</button>
        ) : (
          <button onClick={this.handleLogin}>Вхід</button>
        )}
      </div>
    );
  }
}

export default LoginButton;
