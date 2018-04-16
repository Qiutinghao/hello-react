import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import  Header from './components/Header'
import  Home from './components/Home'

class App extends Component {
    constructor(){
        super();
        this.state={
            homeLink:'Home'
        }
    }
    onGreet(age){
        alert(age)
    }
    ChangeLink(newName){
        this.setState({
            homeLink:newName
        })
    }
  render() {
      const user={
          name:'Anna',
          hobbies:['Sports','Reading']
      };
    return (
      <div className="container">
          <div className='row'>
              <div className='col-xs-1 col-xs-offset-11'>
                  <Header homeLink={this.state.homeLink}/>
              </div>
          </div>
        <div className='row'>
            <div className='col-xs-1 col-xs-offset-11'>
                <h1>hello!!</h1>
            </div>
        </div>
          <div className='row'>
              <div className='col-xs-1 col-xs-offset-11'>
                  <Home
                      name={'Max'}
                      initialAge={12}
                      user={user}
                      Greet={this.onGreet}
                      ChangeLink={this.ChangeLink.bind(this)}
                      initialName={this.state.homeLink}
                  />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
