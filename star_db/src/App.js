import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {Navbar} from "./components/Navbar/Navbar"
import {Layout} from "./hoc/Layout"
import {routes} from "./routes"
import RandomPlanet from "./components/RandomPalnet/RandomPlanet"
import {ErrorIndicator} from "./components/ErrorIndicator/ErrorIndicator"

class App extends React.Component{

    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return <ErrorIndicator/>
        }
        return (
            <div>
                <Router>
                    <Navbar />
                    <Layout>
                        <RandomPlanet />
                        {routes}
                    </Layout>
                </Router>
            </div>
        )
    }
}

export default App;
