import { Component, Children } from 'react';

export default class BodyStyle extends Component {

  componentDidMount() {
    const {style} = this.props;
      for (var key in style) {
        document.body.style[key] = style[key];
      }
  }

  componentWillReceiveProps(nextProps) {
    const {style} = nextProps;
      for (var key in style) {
        document.body.style[key] = style[key];
      }
  }

  render() {
    return Children.only(this.props.children);
  }
}
