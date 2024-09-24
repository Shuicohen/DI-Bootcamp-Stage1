import React, { Component, useEffect } from 'react'

class Header extends Component {
    componentWillUnmount(){
        alert('The component named Header is about to be unmounted.');
    }

    render() {
        return <h1>Hello World!</h1>;
    }
}

class ColorChanger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red'

        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 1000);
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('after update');
    }
    
    handleChangeColor = () => {
        this.setState({ favoriteColor: 'blue' });
    };

    handleDeleteHeader = () => {
        console.log('Delete button clicked');
        this.setState({ show: false }, () => {
          console.log('State updated, show:', this.state.show);
        });
      };
    render() {
        return (
          <div>
            <h1>{this.state.favoriteColor}</h1>
            <button onClick={this.handleChangeColor}>Change color to blue</button>
            <button onClick={this.handleDeleteHeader}>Delete Header</button>
    
            {this.state.show ? <Header /> : null}
          </div>
        );
      }
    }
    
    export default ColorChanger;