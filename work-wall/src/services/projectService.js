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

export const getProject = (id) =>  {
    let result = fetch(`${url}/projects/${id}`, {
        method: "GET"
    })
    .then((resp) => resp.json())

    return result;
}

export const editProject = (data, accessToken, id) => {

    let result = fetch(`${url}/projects/${id}`, {
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

export const getProjectsPage = (page) => {
    let offset = (page * 6) - 6;
    let result = fetch(`${url}/projects?offset=${offset}&pageSize=6`, {
        method: "GET"
    })
    .then((resp) => resp.json())

    return result;
}

export const getProjectsNumPages = () => {
    let result = fetch(`${url}/projects?count`, {
        method: "GET"
    })
    .then((resp) => resp.json())

    return result;
}

export const getProjectsByOwnerId = (id) => {
    let result = fetch(`${url}/projects?where=_ownerId%3D%22${id}%22`, {
        method: "GET"
    })
    .then((resp) => resp.json())

    return result;
}

export const getProjectsByCategory = (category) => {
    let result = fetch(`${url}/projects?where=category%3D%22${category}%22`, {
        method: "GET"
    })
    .then((resp) => resp.json())
    // .then((resp) => console.log(resp))

    return result;
}