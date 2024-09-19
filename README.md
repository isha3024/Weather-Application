# Weather Application

A modern, responsive weather application built with React Native that provides current weather conditions, a five-day forecast, and the ability to search weather details for various cities. This project demonstrates the use of real-time weather data and geolocation services in a React Native environment.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Setup and Installation](#setup-and-installation)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Contact](#contact)
- [License](#license)

---

## Features

- **Current Weather:** Fetches the current weather using the device's geolocation.
- **Search by City:** Search for weather information for any city in the world.
- **Weather Forecast:** Provides a 5-day weather forecast with detailed daily weather conditions.
- **Previous Searches:** Stores previously searched cities for quick access.
- **Custom Icons:** Displays weather conditions with customized icons for temperature, wind, humidity, etc.
- **Responsive Design:** Optimized for both Android and iOS devices.
- **Error Handling:** Displays appropriate messages for denied permissions, network errors, or invalid city names.

---

## Technologies Used

- **React Native** - A popular framework for building cross-platform mobile applications.
- **Redux** - State management for handling weather data and user actions.
- **React Navigation** - Manages the navigation between different screens in the app.
- **Axios** - Handles API requests to the weather service.
- **@react-native-community/geolocation** - For retrieving the device's location.
- **OpenWeather API** - Provides weather data and forecasts.
  
---

## Requirements

Before you begin, ensure you have met the following requirements:

- **Node.js**: v14.x or higher
- **React Native CLI**: Latest version
- **Android Studio / Xcode**: For running the app on Android and iOS simulators respectively
- **OpenWeather API Key**: Sign up at [OpenWeather](https://openweathermap.org/api) to obtain an API key
- **Git**: To clone the repository

---

## Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/isha3024/Weather-Application.git
cd Weather-Application


### 2. Install Dependencies
```bash
npm install

### 3. Configure API Key
In order to access the OpenWeather API, you'll need to configure the API key.

1. Sign up at [OpenWeather](https://openweathermap.org/api) and generate an API key.

### 4. Link Dependencies
Some native libraries (like geolocation) require linking. Run the following command:
```bash
npx react-native link

### 5. Run the Application

- For **iOS** (macOS only):
    ```bash
    npx pod-install ios
    npx react-native run-ios
    ```

- For **Android**:
    ```bash
    npx react-native run-android
    ```

### 6. Build for Production

To build the app for release:

- **Android**:
    ```bash
    npx react-native run-android --variant=release
    ```

- **iOS** (macOS only):
    1. Open the project in Xcode.
    2. Select the target device.
    3. Go to `Product` > `Archive` to create a production build.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

If you have any questions or suggestions, feel free to reach out:
**Name**: Isha  
**GitHub**: [isha3024](https://github.com/isha3024)  
**Email**: [example@example.com](mailto:example@example.com)
