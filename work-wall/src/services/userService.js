let url = "http://localhost:3030/data"

export const setDetails = (data, accessToken) => {

    let result = fetch(`${url}/userDetails`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data),
    })
    .then((resp) => resp.json())

    return result;
}

export const editDetails = (data, accessToken, id) => {

    let result = fetch(`${url}/userDetails/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data),
    })
    .then((resp) => resp.json())

    return result;
}