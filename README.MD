# react-native-splash-screen
> Splash screen component for react native.

## usage:
```jsx
import RnSplash from 'react-native-splash-screen';
import splashImg from 'images/splash.jpg';

export default class extends React.Component {
  static navigationOptions = {
    header: null
  };

  _onLoad = e => {
    const {navigate} = this.props.navigation;
    navigate('Home')
  };

  render() {
    return (
      <RnSplash onLoad={this._onLoad} duration={{ stand:1000, move: 300 }}>
        <Image source={splashImg} style={{width: 375, height: 667}}/>
      </RnSplash>
    );
  }
}
```
