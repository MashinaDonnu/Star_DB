import React,{Component} from 'react';

export class Layout extends Component {

    render(){
        return(
            <main>
                <div className="container">{this.props.children}</div>
            </main>
        )
    }
}
