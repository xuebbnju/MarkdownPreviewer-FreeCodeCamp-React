import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Remarkable from 'remarkable';
const MD_CONTENT = `Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
> Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, \`code\`
 ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears
`;

class App extends Component {
  constructor(){
    super();
    this.state={
      text: MD_CONTENT,
      marktext:""
    }
    this.handleChange=this.handleChange.bind(this);
  }
    
  
   handleChange(e){
    this.setState({text: e.target.value});
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.text) };
  }
  render() {
    return (
      <div className="container wrap">
      <div className="col-md-6">
        <textarea onChange={this.handleChange} value={this.state.text}></textarea>
      </div>
      <div className="col-md-6">
       <p  dangerouslySetInnerHTML={this.getRawMarkup()}></p>
      </div>
      </div>
    );
  }
}

export default App;
