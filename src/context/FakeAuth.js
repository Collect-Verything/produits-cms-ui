import {createContext, useContext, useReducer} from "react";
import {useTheme} from "./Theme";

const AuthContext = createContext()


const initialState = {
    user: null,
    isAuthenticated: false,
    role: null,
}

function reducer(state, action) {
    switch (action.type) {
        case 'login/admin':
            return {...state, user: null, isAuthenticated: true, role: 'admin'}
        case 'login/user':
            return {...state, user: action.payload, isAuthenticated: true, role: 'user'}
        case 'logout':
            return {...state, user: null, isAuthenticated: false}
        default:
            throw new Error("Unknow action")
    }
}

const FAKE_USER = {
    name: "Canse",
    email: "canse@canse.com",
    password: "canse",
    avatar: "https://i.pravatar.cc/100?u=zz",
    role: 'user'
};

const FAKE_ADMIN = {
    name: "Admin",
    email: "admin@admin.com",
    password: "admin",
    avatar: "https://i.pravatar.cc/100?u=zz",
    role: 'admin'
};

function AuthProvider({children}) {

    const {user: userFromEnv} = useTheme()

    const [{user, isAuthenticated, role}, dispatch] = useReducer(reducer, initialState)

    function login(email, password) {
        if (email === FAKE_USER.email && password === FAKE_USER.password)
            dispatch({type: 'login/user', payload: FAKE_USER})
        if (email === userFromEnv && password === FAKE_ADMIN.password)
            dispatch({type: 'login/admin', payload: FAKE_ADMIN})
    }

    function logout() {
        dispatch({type: 'logout'})
    }

    return <AuthContext.Provider value={{user, isAuthenticated, logout, login, role}}>{children}</AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) throw new Error("AuthContext was user outside AuthProvider")
    return context
}

export {AuthProvider, useAuth}