import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// svg
// reanimated
// lottie
import Lottie from 'lottie-react-native';
import {AnimatedTabBar} from './src/AnimatedTabBar';

// ------------------------------------------------------------------

const Tab = createBottomTabNavigator();

// ------------------------------------------------------------------

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <AnimatedTabBar {...props} />}>
          <Tab.Screen
            name="Home"
            options={{
              // @ts-ignore
              tabBarIcon: ({ref}) => (
                <Lottie
                  ref={ref}
                  loop={false}
                  source={require('./src/assets/lottie/home.icon.json')}
                  style={styles.icon}
                />
              ),
            }}
            component={PlaceholderScreen}
          />
          <Tab.Screen
            name="Upload"
            options={{
              // @ts-ignore
              tabBarIcon: ({ref}) => (
                <Lottie
                  ref={ref}
                  loop={false}
                  source={require('./src/assets/lottie/upload.icon.json')}
                  style={styles.icon}
                />
              ),
            }}
            component={PlaceholderScreen}
          />
          <Tab.Screen
            name="Chat"
            options={{
              // @ts-ignore
              tabBarIcon: ({ref}) => (
                <Lottie
                  ref={ref}
                  loop={false}
                  source={require('./src/assets/lottie/chat.icon.json')}
                  style={styles.icon}
                />
              ),
            }}
            component={PlaceholderScreen}
          />
          <Tab.Screen
            name="Settings"
            options={{
              // @ts-ignore
              tabBarIcon: ({ref}) => (
                <Lottie
                  ref={ref}
                  loop={false}
                  source={require('./src/assets/lottie/settings.icon.json')}
                  style={styles.icon}
                />
              ),
            }}
            component={PlaceholderScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

// ------------------------------------------------------------------

const PlaceholderScreen = () => {
  return <View style={{flex: 1, backgroundColor: '#604AE6'}} />;
};

// ------------------------------------------------------------------

// ------------------------------------------------------------------

const styles = StyleSheet.create({
  icon: {
    height: 36,
    width: 36,
  },
});

export default App;
