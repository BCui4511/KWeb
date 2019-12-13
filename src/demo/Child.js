import React from 'react'

export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('123');
  }
  render() {
    return <div>
        <p>{this.props.name}</p>
      </div>
  }
}