import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            age:props.initialAge,
            homeLink:'Changed Link',
            //initialName:'aaa'
        }
    }
    onMakeOlder() {
        this.setState({
            age:this.state.age+3
        })
    }
    handleGreet(){
        this.props.Greet(this.state.age)
    }
    onChangeLink(){
        this.props.ChangeLink(this.state.homeLink)
    }
    onChangeInput(e){
        this.setState({
            homeLink:e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <div>your name is {this.props.name},your age id {this.state.age}</div>
                        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
                        <hr/>
                        <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">Greet</button>
                        <hr/>
                        <input
                            type="text"
                            defaultValue={this.props.initialName}
                            //value={this.state.homeLink}
                            onChange={(e)=>this.onChangeInput(e)}
                        />
                        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
                    </div>
                </div>
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    age:PropTypes.number,
    user:PropTypes.object,
    Greet:PropTypes.func,
    ChangeLink:PropTypes.func,
    initialName:PropTypes.string
};
