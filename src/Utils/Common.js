export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
   

  // remove the token and user from the session storage
  export const removeUserSession = () => {
    //sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (user) => {
    //sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    console.log(user);
  }