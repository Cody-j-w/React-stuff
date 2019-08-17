import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const libraryList = ['Angular', 'React', 'Vue', 'Ember', 'Meteor', 'Backbone', 'Handlebars']

function Panel(props){
    return(
        <div className="d-flex justify-content-center">
        <div className="border border-info w-25 my-2">
            
            <div className="d-inline-block d-flex justify-content-center">
            <h1 className="d-inline-block">{props.name}</h1>
            </div>
            <button className="btn btn-info btn-block"
            onClick={()=>props.onClick()}
            >
            {props.votes}
            </button>
        </div>
        </div>
    )
}

class VotingBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            votes:Array(7).fill(0)
        }
    
    }
    renderPanel(i){
        return(
            <Panel
            votes={this.state.votes[i]}
            name={libraryList[i]}
            onClick={()=>this.handleClick(i)}
            />
        )
    }
    handleClick(i){
        const votes = this.state.votes.slice()
        votes[i] = votes[i] + 1;
        this.setState({
            votes:votes
        })
    }
    render(){
        return(
            <div className="votingBoard">
                {this.renderPanel(0)}
                {this.renderPanel(1)}
                {this.renderPanel(2)}
                {this.renderPanel(3)}
                {this.renderPanel(4)}
                {this.renderPanel(5)}
                {this.renderPanel(6)}
            </div>
        )
    }
}

ReactDOM.render(
    <VotingBoard/>,
    document.getElementById('root')
)