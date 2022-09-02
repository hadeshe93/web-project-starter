import React from 'react';
import { produce } from 'immer';

interface Props {
  title?: string;
}

export default class Header extends React.Component<Props> {
  state = {
    color: 'black',
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 所以这里就算改了 props 也是不会生效的
    return this.state.color !== nextState.color;
  }

  onEmphasize = () => {
    console.log('onEmphasize');
    const nextState = produce(this.state, (draftState) => {
      draftState.color = 'red';
    });
    this.setState(nextState);
  };

  render() {
    return <h4 onClick={this.onEmphasize} style={{color: this.state.color}}>{this.props.title}</h4>
  }

  static defaultProps: Props = {
    title: '内置默认标题'
  };
}
