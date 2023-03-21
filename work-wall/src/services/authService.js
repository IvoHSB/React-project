 let url = "http://localhost:3030/users";

export const register = (email, password, username) => {

    let result = fetch(`${url}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password, username: username}),
    })
    .then((resp) => resp.json())

    return result;
}

export const login = (email, password) => {

    let result = fetch(`${url}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password}),
    })
    .then((resp) => resp.json())

    return result;
}