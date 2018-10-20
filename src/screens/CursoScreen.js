import React, { Component } from 'react';
import ImgLogo from '../components/imgLogo/ImgLogo'
import DefaultParagraph from '../components/defaultParagraph/DefaultParagraph'
import DummyFunction from '../components/dummyFunction/DummyFunction'
import Search from '../components/search/Search'
import '../App.css';


class CursoScreen extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: 'Search'
        }
    }

    render(){
        const dummyFunction = (myValue) => {
            console.log(myValue)
            this.setState({
                searchTerm: myValue
            })
        }

        console.log(this.props.match.params.any_param)

        return (
            <div className="App">
                <header className="App-header">
                    <ImgLogo/>
                    <Search onSubmit={dummyFunction}/>
                    <DefaultParagraph 
                        text={this.state.searchTerm}
                        color="red"
                    />
                    <DefaultParagraph 
                        text="Getting the same component to write this paragraph"
                        color="blue"
                    />
                    <DummyFunction func={dummyFunction}/>
                </header>
            </div>
        );
      }
}

export default CursoScreen;
