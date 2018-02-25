import React from 'react';
import Part  from './part.js';


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
    return (
      <div style={{padding: '5px'}}>
        <h2>Hello World!</h2>
        <p>本页面使用 React 服务端渲染而成。</p>
        <Part />
      </div>
    );
  }
}
