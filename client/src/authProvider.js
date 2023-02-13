export default {
    // called when the user attempts to log in
    login: ({ email, password }) => {
        if (email !== 'admin_uveitis@rmc.edu' || password !== 'admin') {
            return Promise.reject();
        }
        console.log("login successful");
        localStorage.setItem('email', email);        
        return Promise.resolve();
        

    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('email');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('email');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('email')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};