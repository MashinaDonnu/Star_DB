import React,{Component} from 'react';
import {List} from "../../components/List/List";
import {Description} from "../../components/Description/Description";
import {connect} from "react-redux";
import {fetchAllData, fetchItem} from "../../store/actionCreators";

class Species extends Component {

    componentDidMount() {
        this.props.fetchAllData('species')
    }

    getOneSpecie = (id) => {
        this.props.getOneSpecie(`species/${id}`)
    }
    render(){

        const speciesData = ['name', 'average_height', 'language', 'eye_colors', 'hair_colors', 'average_lifespan']
        return(
            <div className="page mb-5" >
                <h1 className="mb-3">Species</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <List data={this.props.dataReducer.data} getItem={this.getOneSpecie} />
                    </div>
                    <div className="col-lg-8">
                        <Description data={this.props.dataReducer.item} filterData={speciesData} type="species" />
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
        getOneSpecie: data => dispatch(fetchItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Species)