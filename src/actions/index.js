
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FORM_ERROR = 'FORM_ERROR'
export const LOG_OUT = 'LOG_OUT'


export const actions = ''


export const login = (form) => (dispatch) => {
    
    dispatch(fetchStart())
    window.localStorage.setItem('login', form.userName)
    dispatch(fetchSuccess(form.userName))
}

export const logout = () => {
    window.localStorage.removeItem('login')
    return({type: LOG_OUT})
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (data) => {
    return({type:FETCH_SUCCESS, payload:data})
}

export const fetchFail = (error) => {
    return({type:FETCH_FAIL, payload: error})
}

export const formError = (error) => {
    return({type:FORM_ERROR, payload: error})
}