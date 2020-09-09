import React,{Component} from 'react'
import './RandomPlanet.css'
import {fetchRandomPlanet} from "../../store/actionCreators"
import {connect} from 'react-redux'
import {Loader} from "../Loader/Loader";

class RandomPlanet extends Component {

    componentDidMount() {
        this.props.getRandomPlanet()
        this.timer()
    }

    componentWillUnmount() {
        clearInterval(this.timer())
    }

    timer = () => {
        return setInterval(() => {
            this.props.getRandomPlanet()
        }, 5 * 1000)
    }

    render(){


        if ( !this.props.planetReducer.randomPlanet) {
            return <Loader/>
        }
        const {data, config} = this.props.planetReducer.randomPlanet
        let id = config.url.split('/')
        id = id[id.length - 1]


        const img = <img
                        className="planet-image"
                        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""
                    />

        return (
            <div className="planet-card mt-4">
                <div className="row">
                    <div className="col-lg-4 ml-1">
                        {img}
                    </div>
                    <div className="card-block px-2 col-lg-7">
                        <h4 className="card-title p-3">{data.name}</h4>
                        <ul className="list-group planet-description">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                               Population: {data.population}
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Diameter: {data.diameter}
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Rotation period: {data.rotation_period}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        getRandomPlanet: () => dispatch(fetchRandomPlanet())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomPlanet)