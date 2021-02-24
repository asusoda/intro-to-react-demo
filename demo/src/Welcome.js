import * as React from 'react';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {txt: 'abc', bgcolor: 'orange'};
    }

    changeColor = () => {
        this.setState({txt: 'def', bgcolor: 'magenta'});
    }

    render () {
        return(
        <div>
          {/* <Button color="primary">Hello World</Button> */}
          <button onClick={this.changeColor}>Change Text</button>
          <h1 style={{backgroundColor: this.state.bgcolor}}>Hello, {this.props.name} who is {this.props.age} on {this.state.txt}</h1>;
        </div>
      );
    }

}

export default Welcome;
