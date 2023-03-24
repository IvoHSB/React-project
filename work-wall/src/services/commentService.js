let url = "http://localhost:3030/data";

export const setComment = (data, accessToken) => {

    let result = fetch(`${url}/comments`, {
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

export const getComments = (projectId) => {
    console.log(projectId)
    let result = fetch(`${url}/comments?where=projectId%3D%22${projectId}%22&load=author%3DprofileId%3AuserDetails`, {
        method: "GET",
    })
    .then((resp) => resp.json())

    return result;
}