import React,{Component} from 'react'
import {List} from "../../components/List/List"
import {Description} from "../../components/Description/Description"
import {connect} from 'react-redux'
import {fetchAllData, fetchItem} from "../../store/actionCreators"

class Persons extends Component {

    componentDidMount() {
        this.props.fetchAllData('people')
    }

    getOnePerson = (id) => {
        this.props.fetchItem(`people/${id}`)
    }

    render(){
        const personData = ['name', 'birth_year', 'gender','eye_color', 'hair_color', 'mass', 'height']
        return(
            <div className="page mb-5" >
                <h1 className="mb-3">Persons</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <List data={this.props.dataReducer.data} getItem={this.getOnePerson} />
                    </div>
                    <div className="col-lg-8">
                        <Description data={this.props.dataReducer.item} filterData={personData} type='characters' />
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
        fetchItem: data => dispatch(fetchItem(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)