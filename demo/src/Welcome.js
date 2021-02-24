import * as React from 'react';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {txt: 'abc', bgcolor: 'orange', visible: true, buttonVisible: false};
    }

    changeColor = () => {
        this.setState({txt: 'def', bgcolor: 'magenta'});
    }

    render () {
      // if (this.state.visible) {
        return this.state.visible && (
          <div>
            {/* <Button color="primary">Hello World</Button> */}
            {this.state.buttonVisible && <button onClick={this.changeColor}>Change Text</button>}
            <h1 style={{backgroundColor: this.state.bgcolor}}>Hello, {this.props.name} who is  {this.props.age} on {this.state.txt}</h1>;
          </div>
        );
      // } else {
      //   return null;
      // }
    }

}

export default Welcome;
