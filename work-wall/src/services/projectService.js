let url = "http://localhost:3030/data";

export const setProject = (data, accessToken) => {

    let result = fetch(`${url}/projects`, {
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