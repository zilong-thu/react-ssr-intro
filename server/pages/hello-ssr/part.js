import React  from 'react';
import moment from 'moment';


export default class Part extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{border: '1px solid #ccc', borderRadius: '4px', padding: '5px'}}>
        <div>这是一个小组件。显示渲染页面时的服务器时间：</div>
        <strong>{moment().format('YYYY-MM-DD HH:mm:ss')}</strong>
      </div>
    );
  }
}
