// CommonJS modules
import React from 'react';

export default class HelloWorldPage extends React.Component {
  constructor() {
    super();
    console.log('\n组件生命周期方法: constructor');
  }

  componentWillMount() {
    console.log('组件生命周期方法: componentWillMount');
  }

  componentDidMount() {
    console.log('组件生命周期方法: componentDidMount');
  }

  render() {
    return <div>Hello World!</div>;
  }
}
