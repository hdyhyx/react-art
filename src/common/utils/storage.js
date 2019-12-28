export const setLatestKey = (index) => {
    localStorage.setItem('latest', index)
}

export const getLatestKey = () => {
    return  localStorage.getItem('latest')
}