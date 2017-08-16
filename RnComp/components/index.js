import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, Animated, Alert} from 'react-native';
import styles from './style';
import noop from 'noop';


export default class extends React.PureComponent {
  static propTypes = {
    onLoad: PropTypes.func,
    duration: PropTypes.object
  };

  static defaultProps = {
    cssStyles: [],
    onLoad: noop,
    duration: {
      stand: 500,
      move: 800
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1),
    };
  }

  componentDidMount() {
    const {scale, opacity} = this.state;
    const {onLoad, duration} = this.props;
    const {stand, move} = duration;

    Animated.sequence([
      Animated.timing(scale, {   // and twirl
        toValue: 1,
        duration: stand
      }),
      Animated.timing(opacity, {   // and twirl
        toValue: 1,
        duration: stand
      }),
      Animated.parallel([
        Animated.timing(scale, {   // and twirl
          toValue: 1.5,
          duration: move
        }),
        Animated.timing(opacity, {   // and twirl
          toValue: 0,
          duration: move
        })
      ])
    ]).start((resp) => {
      onLoad(resp);
    });
  }

  render() {
    const {cssStyles, children, ...props} = this.props;
    return (
      <Animated.View {...props} style={[styles.splash, {
        opacity: this.state.opacity,
        transform: [{scale: this.state.scale}]
      }].concat(cssStyles)}>
        { children }
      </Animated.View>
    )
  }
}
