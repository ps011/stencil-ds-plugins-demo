import React, { Component } from 'react';
import { AccordionContainer, AccordionItem } from 'component-library-react';
import './App.css';

interface State {
  value: number | null;
  comps: number[]
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: null,
      comps: [1, 2, 3, 4]
    };
  }

  updateRangeValue = (newValue: number) => {
    this.setState(() => ({
      value: newValue
    }));
  };

  removeSlider = () => {
    let newComps = this.state.comps
    newComps.shift()
    this.setState(() => ({
      comps: newComps
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.removeSlider()}>Remove Accordion</button>
          <AccordionContainer heading="This is Heading" >
          {this.state.comps.map(_comp => {
            return (
              <AccordionItem heading="This is item Heading" key={_comp}>
                <p slot="content" style={{color: 'black'}}>This is Content</p>
              </AccordionItem>
            )
            })}
          </AccordionContainer>
          {this.state.value ? <p>Value is {this.state.value}</p> : null}
        </header>
      </div>
    );
  }
}

export default App;
