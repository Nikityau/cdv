export const mockAuth = () => {
    localStorage.setItem('token','mock')
    window.location.replace('/user/me ')
}

export const mockLogOut = () => {
    localStorage.removeItem('token')
    window.location.replace('/')
}