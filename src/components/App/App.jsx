import React from "react";
import "./app.css"
import Header from "./../header/Header"
import SearchBox from "../searchbox/SearchBox";
import SearchResult from "../searchresult/SearchResult"
import ResultContainer from "../Resultcontainer/ResultContainer";


const name = require('@rstacruz/startup-name-generator');




//class base components
class App extends React.Component{
    


    
    state = {
        headerText : "Name-it",
        headerExpanded: true,
        suggestedNames: [],
    };
   
    handleInputChange = (inputText) =>{
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
    });

};
    render() {

        return (
        <div>

            <Header 
                expandHeader = {this.state.headerExpanded}
                headTitle = {this.state.headerText}/>
            <SearchBox
                handleChange = {this.handleInputChange} />
            <SearchResult />
            <ResultContainer suggestedNames = {this.state.suggestedNames} />
        </div>
        );
               
    }
}



export default App;


//functional base components
// function App(){
//     return <div>
//         <h1>this is functional base component</h1>
//     </div>;
// }


// <h3>{this.state.headerText}</h3>
// <button onClick ={() =>{
//     this.setState({
//         headerText : "Waooh! this is the magic happens"
//     });
// }}>
// magic happens here! 
// </button>