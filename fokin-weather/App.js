import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./loader";
import Weather from "./weather";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";

// My openweathermap.org API KEY
const API_KEY = "9866cea253551f0e6c89388bae4f4719";

// React Component Class
export default class extends React.Component {

  // Component State
  state = {isLoading: true};

  // Function : Get Weather Data From openweathermap
  getWeather = async(latitude, longitude) => {
    const weather_data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    console.log('[Get Weather Data]\nComplete!');

    // Set Component's State -> Re-Render()
    this.setState({isLoading: false, temp: weather_data.data.main.temp, condition: weather_data.data.weather[0].main});

    console.log('[State Data]');
    console.log(this.state);
  }

  // Function : Get Location of User
  getLocation = async() => {
    try{
      // Request Permmission For Location
      await Location.requestPermissionsAsync();

      // Get Location of User
      const location = await Location.getCurrentPositionAsync();
      
      console.log('[Get Location Data]\nComplete!');
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;

      this.getWeather(latitude, longitude);
    }
    catch(error){
      // if Fail to Get Location
      Alert.alert("Can't Find you. So Sad");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  // Render Function
  render(){
    // get state
    const {isLoading, temp, condition} = this.state;
    console.log('state = ' + isLoading);

    // return View
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}