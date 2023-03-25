let url = "http://localhost:3030/jsonstore";

export const setContactUsMessage = (data) => {

    let result = fetch(`${url}/contactusmessages`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((resp) => resp.json())

    return result;
}