import React from 'react'
import { HashRouter, Route } from "react-router-dom"
import CursoScreen from './screens/CursoScreen'
import HomeScreen from './screens/HomeScreen'
import AppBar from './components/appBar/AppBar'


const App = () => {
    return(
        <HashRouter>
            <div>
                <AppBar/>
                <Route path="/:any_param" component={CursoScreen}/>
                <Route exact path="/" component={HomeScreen}/>
            </div>
        </HashRouter>
    );
}

export default App