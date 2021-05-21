import React from "react";

export let Account = [
    {
        id: 1,
        email: 'ali@mai.ru',
        password: 'Alebeark.789',
        firstName: 'Alibek',
        lastName: 'Aliman'
    },
    {
        id: 2,
        email: 'bek@mail.ru',
        password: 'admin',
        firstName: 'Beka',
        lastName: 'Quanysh'
    }
];

/**
 * @return {any}
 */
export function AuthenticateUser(email, password) {
    let user = null;

    if (localStorage.getItem("accounts") === null || localStorage.getItem("accounts") === undefined) {
        localStorage.setItem("accounts", JSON.stringify(Account));
    }

    Account = JSON.parse(localStorage.getItem("accounts"));

    Account.forEach(account => {
       if (account.email === email && account.password === password) {
           user = account;
       }
    });
    return user;
}

export function Register(userAcc) {
    console.log("I enter here");
    let userExist = false;

    Account.forEach(account => {
       if (account.email === userAcc.email) {
           userExist = true;
       }
    });

    console.log("I have checked accounts");
    console.log("User Exists: " + userExist);

    let Status = {
        message: '',
        state: true
    };

    if (localStorage.getItem("accounts") === null || localStorage.getItem("accounts") === undefined) {
        localStorage.setItem("accounts", JSON.stringify(Account));
    }

    if (userExist) {
        Status.message = 'User with this email already exists, use another email!';
        Status.state = false;
    } else {
        Account = JSON.parse(localStorage.getItem("accounts"));

        userAcc.id = Account.length;
        Account.push(userAcc);

        localStorage.setItem('accounts', JSON.stringify(Account));

        Status.message = 'User successfully registered!';
        Status.state = true;
    }

    return Status;
}

