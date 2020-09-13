import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from "native-base";

import TrackScreen from "./TrackScreen";
import VisualizationScreen from "./VisualizationScreen";

const Tabs = createBottomTabNavigator();

export default class StatTrackerApp extends React.Component {
  
  render() {
    return (
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Track') {
                iconName = 'add-circle';
              } else if (route.name === 'Visualize') {
                iconName = 'barcode';
              }
              
              console.log("Icon name is: " + iconName + ", focused is: " + focused);
              return <Icon name={iconName} size={size} color={color} active={focused}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tabs.Screen name="Track" component={TrackScreen} />
          <Tabs.Screen name="Visualize" component={VisualizationScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    )
  }
} 
