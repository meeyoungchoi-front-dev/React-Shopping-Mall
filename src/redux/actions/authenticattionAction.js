function login(id, password) {
    return (dispatch, getState) => {
        console.log('login success action');
        dispatch({type: "LOGIN_SUCCESS", pasyload: {id, password}});
    };
}

export const authenticateAction = {login}