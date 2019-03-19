import * as React from 'react';
import { Button } from 'antd';

export interface HelloProps {
  complier: string;
  framework: string;
}

export default class Hello extends React.Component<HelloProps, any> {
  render() {
    return (
      <div>
        <h1>
          Hello from {this.props.complier} and {this.props.framework}!
        </h1>
        <Button type='primary'>测试antd333</Button>
      </div>
    );
  }
}
