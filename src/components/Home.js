import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            age:props.initialAge,
            homeLink:'Changed Link',
            status:0
        };
        setTimeout(()=>{
            this.setState({
                status:1
            })
        },3000);
        console.log('constructor')
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
    componentWillMount(){
        console.log('Component will mount');
    }
    componentDidMount(){
        console.log('Component did mount');
    }
    componentWillReceiveProps(nextProps){
        console.log('Component will receive props',nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Component should update',nextProps,nextState);
        // if(nextState.status===1){
        //     return false;
        // }
        return true
    }
    componentWillUpdate(nextProps,nextState){
        console.log('Component will update',nextProps,nextState);
    }
    componentDidUpdate(prevProps,prevState){
        console.log('Component did update',prevProps,prevState);
    }
    componentWillUnmount(){
        console.log('Component will unmount');
    }
    render() {
        console.log('render')
        return (
            <div className="container">
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <div>your name is {this.props.name},your age id {this.state.age}</div>
                        <p>status:{this.state.status}</p>
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
