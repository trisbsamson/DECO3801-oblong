import React, {Component} from 'react';

class UserDataStore {
    constructor(props) {
        this.userData = {};
    }

    setUserData(data) {
        this.userData = data;
        console.log("YO");
        console.log(data);
    }

    getUserData() {
        return this.userData;
    }

    getUserID() {
        return this.userData.id;
    }

    getUserName() {
        return this.userData.name;
    }

}

const userDataStore = new UserDataStore();

export default userDataStore;