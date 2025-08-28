import {createContext, useContext, useReducer} from "react";

const ThemeContext = createContext()

const initialState= {
    primary: process.env.REACT_APP_PRIMARY,
    secondary: process.env.REACT_APP_SECONDARY,
    titreSite: process.env.REACT_APP_TITRE_SITE,
    user: process.env.REACT_APP_USER,
}

function reducer(state, action){
    switch (action.type){
        case 'primary':
            return {...state, primary: action.payload}
        case 'secondary':
            return {...state, secondary: action.payload}
        case 'titreSite':
            return {...state, titreSite: action.payload}
        case 'user':
            return {...state, user: action.payload}
        default:
            throw new Error("Unknow action theme")
    }
}

function ThemeProvider({children}){

    const [{primary,secondary, titreSite,user}, dispatch] = useReducer(reducer, initialState)

    function setPrimary(color){
        dispatch({type: 'primary', payload: color})
    }

    function setSecondary(color){
        dispatch({type: 'secondary', payload: color})
    }

    function setTitreSite(color){
        dispatch({type: 'titre', payload: color})
    }

    function setUser(color){
        dispatch({type: 'user', payload: color})
    }


    return <ThemeContext.Provider value={{primary,secondary, titreSite,user,setPrimary,setSecondary, setTitreSite,setUser}}>{children}</ThemeContext.Provider>
}

function useTheme(){
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("ThemeContext was user outside AuthProvider")
    return context
}


export {ThemeProvider, useTheme}