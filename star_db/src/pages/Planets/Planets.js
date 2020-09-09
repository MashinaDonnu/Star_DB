import React,{Component} from 'react';
import {List} from "../../components/List/List";
import {Description} from "../../components/Description/Description";
import {connect} from "react-redux";
import {fetchAllData, fetchItem} from "../../store/actionCreators";

class Planets extends Component {

    componentDidMount() {
        this.props.fetchAllData('planets')
    }

    getOnePlanet = (id) => {
        this.props.getOnePlanet(`planets/${id}`)
    }
    render(){
        const planetData = ['name', 'rotation_period', 'population', 'created', 'climate']
        return(
            <div className="page mb-5" >
                <h1 className="mb-3">Planets</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <List data={this.props.dataReducer.data} getItem={this.getOnePlanet} />
                    </div>
                    <div className="col-lg-8">
                        <Description data={this.props.dataReducer.item} filterData={planetData} type="planets" />
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
        fetchAllData: data => dispatch(fetchAllData(data)),
        getOnePlanet: data => dispatch(fetchItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets)