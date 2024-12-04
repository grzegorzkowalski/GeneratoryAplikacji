const api = "http://10.0.2.2:88/travel-api/wp-json/wp/v2";
const auth = "Basic cG9kcm96bmlrOnVaWk43QEY5a0t0OFAmRVg5eA==";

export const getPosts = (setPosts) => {
    fetch(`${api}/posts`, {
        method: "GET",
        "headers": {
            Authorization: auth
        },
    })
        .then(res => res.json())
        .then(resUncoded => {
            console.log(resUncoded);
            setPosts(resUncoded);
        } )
        .catch(err => console.warn(err));
}
export const getPostById = (id, setPosts) => {
    fetch(`${api}/posts/${id}`, {
        method: "GET",
        "headers": {
            Authorization: auth
        },
    })
        .then(res => res.json())
        .then(resUncoded => {
            setPosts(resUncoded);
        } )
        .catch(err => console.warn(err));
}

export const getCategories = (setCategories) => {
    fetch(`${api}/categories`, {
        method: "GET",
        "headers": {
            Authorization: auth
        },
    })
        .then(res => res.json())
        .then(resUncoded => {
            setCategories(resUncoded);
        } )
        .catch(err => console.warn(err));
}