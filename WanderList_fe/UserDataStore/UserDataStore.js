import React, {Component} from 'react';

/**
 * Store to retain user data from login point all throughout the app.
 * This is a simple alternative to having to pass user information  as props through the components.
 * 
 */
class UserDataStore {
    // main component constructor function - boilerplate
    constructor(props) {
        // variable which stores all user data retrieved at login
        this.userData = {};
    }
    
    // sets the user data variable
    setUserData(data) {
        this.userData = data;
    }

    // retrieves the user data variable
    getUserData() {
        return this.userData;
    }

    // retrieves the user id only
    getUserID() {
        return this.userData.id;
    }

    // retrieves the user name only
    getUserName() {
        return this.userData.name;
    }

}

const userDataStore = new UserDataStore();

export default userDataStore;