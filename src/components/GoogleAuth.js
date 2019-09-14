import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // window. because we need to tell react that the variable is available in window scope.
    window.gapi.load("client:auth2", () =>
      window.gapi.client
        .init({
          clientId:
            "855573915270-vv0aqg9g4odaktqqtl6564c0c9s977bb.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
    );
  }

  onAuthChange = ()  => {
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignInClick = () => {
      this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div> I don't know if they're signed in </div>
    } else if (this.state.isSignedIn){
        return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
            <i className="google icon" />
            Sign Out
        </button>
        );
    } else {
        return (
            <button className="ui blue google button" onClick={this.onSignInClick}>
                <i className="google icon" />
                Sign In
            </button>
            );
    
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
