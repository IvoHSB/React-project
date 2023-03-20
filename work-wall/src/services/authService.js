// let url = "http://localhost:3030/users";

export const register =  (email, password) => {

    const payload = {email: email, password: password};
    console.log(payload)
    let result = fetch('http://localhost:3030/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password}),
    })
    .then((resp) => resp.json())

    return result;
}