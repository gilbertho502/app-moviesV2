const APIURL = import.meta.env.VITE_APP_API_URL
const APIBEARER = import.meta.env.VITE_APP_API_BEARER
// const APIURL = 'https://api.themoviedb.org/3'
export async function Get(path) {
    const result = await fetch(APIURL + path, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + APIBEARER,
            accept: 'application/json;charset=utf-8'
        }
    })
    return await result.json()
}

