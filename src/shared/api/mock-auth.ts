export const mockAuth = () => {
    localStorage.setItem('token','mock')
    window.location.replace('/trips ')
}

export const mockLogOut = () => {
    localStorage.removeItem('token')
    window.location.replace('/')
}