import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style'

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'gray', fontWeight: 'bold' }}>
        {index + 1}/{total}
      </Text>
    </View>
  )
}

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

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
            <TouchableOpacity style={styles.profileButton}>
              <Image
                style={styles.image} 
                source={require('../../assets/profile.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.sliderContainer}>
            <Swiper 
              style={styles.wrapper} 
              renderPagination={renderPagination}
              autoplay>
              <View 
                style={styles.slide} 
                title={
                  <Text style={styles.textSlider}>Explore in easy{"\n"}<Text style={{fontSize: 14, fontWeight: 'normal'}}>Go everywhere just one tap</Text></Text>
                }>
                <Image 
                  resizeMode='stretch' 
                  style={styles.image} 
                  source={require('../../assets/slider1.jpg')} />
              </View>
              <View 
                style={styles.slide} 
                title={
                  <Text style={styles.textSlider}>Amazing special deal{"\n"}<Text style={{fontSize: 14, fontWeight: 'normal'}}>Get special price just for you </Text></Text>
                }>
                <Image 
                  resizeMode='stretch' 
                  style={styles.image} 
                  source={require('../../assets/slider2.jpg')} />
              </View>
              <View 
                style={styles.slide}
                title={
                  <Text style={styles.textSlider}>Have your own plan{"\n"}<Text style={{fontSize: 14, fontWeight: 'normal'}}>Create your custom plan and get best price</Text></Text>
                }>
                <Image 
                  resizeMode='stretch' 
                  style={styles.image} 
                  source={require('../../assets/slider3.jpg')} />
              </View>
            </Swiper>
          </View>
          <View>
            <Text style={styles.headingText}>Explore by Country</Text>
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity style={styles.countryLink}>
                <Image
                  style={styles.image} 
                  source={require('../../assets/indonesia.jpg')}/>
                <Text style={styles.textCountry}>Indonesia</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.countryLink}>
                <Image
                  style={styles.image} 
                  source={require('../../assets/japan.jpg')}/>
                <Text style={styles.textCountry}>Japan</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity style={styles.countryLink}>
                <Image
                  style={styles.image} 
                  source={require('../../assets/america.jpg')}/>
                <Text style={styles.textCountry}>America</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.countryLink}>
                <Image
                  style={styles.image} 
                  source={require('../../assets/uk.jpg')}/>
                <Text style={styles.textCountry}>England</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row"}}>
              <TouchableOpacity style={styles.countryLink}>
                <Image
                  style={styles.image} 
                  source={require('../../assets/france.jpg')}/>
                <Text style={styles.textCountry}>France</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.countryLink}>
                <Image
                  style={styles.image} 
                  source={require('../../assets/egypt.jpg')}/>
                <Text style={styles.textCountry}>Egypt</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.wrapSearchBar}> 
          <View style={styles.searchBar}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonSearch}>
                  <Image
                    style={styles.image} 
                    source={require('../../assets/search-icon.png')}/>
                </TouchableOpacity>
                <TextInput
                  placeholder="Find Something"></TextInput>
              </View>
          </View>
        </View>
      </View>
    );
  }
}
