import React, { Component } from 'react';

class Search extends Component{
    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    handdleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleClick = () => {
        const { onSubmit } = this.props
        onSubmit(this.state.text)
    } 

    render(){
        return(
            <div>
                <input onChange={this.handdleChange}/>
                <button onClick={this.handleClick}>
                    Search
                </button>
            </div>
        );
    }
}

export default Search