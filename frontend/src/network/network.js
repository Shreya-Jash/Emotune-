
export function getUrl(){
    const url=import.meta.env.VITE_BACKEND_HOST
    console.log(url)
    return url
}