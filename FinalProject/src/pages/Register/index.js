import React, {Component} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './style'

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bgChange : false,
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      password: 'Password'
    }
  }
  changeBG(){
    setTimeout(() => {
      this.setState({
        bgChange : true,
      })
    }, 1000)
    (bgChange = true) ? style.container.red : style.container.blue
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.ImageBg} source={require('../../assets/bg.jpg')}/>
        <Text style={styles.logo}>T</Text>
        <Text style={styles.welcome}>Join with Us!</Text>
        <View style={styles.formWrapper}>
          <View style={styles.grid}>
            <View style={styles.w50}>
              <TextInput
                style={styles.inputText}
                onChangeText={(val) => {
                    return this.setState((val) => {
                      firstName : val
                    })
                  }
                }
                value={this.state.firstName}/>
            </View>
            <View style={styles.w50}>
              <TextInput
                style={styles.inputText}
                onChangeText={(val) => {
                    return this.setState((val) => {
                      lastName : val
                    })
                  }
                }
                value={this.state.lastName}/>
            </View>
          </View>
          <View style={styles.grid}>
            <View style={styles.w100}>
              <TextInput
                style={styles.inputText}
                onChangeText={(val) => {
                    return this.setState((val) => {
                      email : val
                    })
                  }
                }
                value={this.state.email}/>
            </View>
          </View>
          <View style={styles.grid}>
            <View style={styles.w100}>
              <TextInput
                  secureTextEntry={true}
                  style={styles.inputText}
                  onChangeText={(val) => {
                      return this.setState((val) => {
                        password : val
                      })
                    }
                  }
                  value={this.state.password}/>
            </View>
          </View>
          <View style={styles.grid}>
            <View style={[styles.w100, {alignItems: 'center'}]}>
              <TouchableOpacity
                style={styles.button} 
                onPress={this._onPressButton}>
                <Text style={{ color: 'white'}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
