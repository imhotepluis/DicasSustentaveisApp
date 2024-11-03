import React from 'react';
import { NavigationContainer }  from "@react-navigation/native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home";
import Favoritos from "./screens/favoritos";
import Historico from "./screens/historico";
import {FavoritosProvider} from './contexts/FavoritoContext';
import {HistoricoProvider} from './contexts/HistoricoContext'; 
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <FavoritosProvider>
      <HistoricoProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Favoritos') {
                  iconName = focused ? 'heart' : 'heart-outline';
                } else if (route.name === 'Historico') {
                  iconName = focused ? 'time' : 'time-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#FB9B27',
              tabBarInactiveTintColor: 'gray',
              
            })}
          >
            <Tab.Screen name="Home" component={Home} options={{ headerStyle: { backgroundColor: '#d3d4d5' } }}/>
            <Tab.Screen name="Favoritos" component={Favoritos} options={{ headerStyle: { backgroundColor: '#d3d4d5' } }}/>
            <Tab.Screen name="Historico" component={Historico} options={{ headerStyle: { backgroundColor: '#d3d4d5' } }}/>
          </Tab.Navigator>
        </NavigationContainer>
      </HistoricoProvider>
    </FavoritosProvider>
    
  );
}