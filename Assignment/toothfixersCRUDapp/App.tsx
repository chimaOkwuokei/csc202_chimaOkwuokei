import React from 'react';
import TransactionEntryLanding from './src/modules/transaction-entries/TransactionEntryLanding';
import { Text } from '@rneui/base';
import useCachedResources from './src/global/hooks/useCachedResources';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AssetEntryLanding from './src/modules/asset-entries/AssetEntryLanding';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the Icon component from the library

const App: React.FC = () => {
  const { isLoadingComplete, dataSource } = useCachedResources();

  const Tab = createBottomTabNavigator();

  const tabProps = {
    // Tab navigator props
  };

  const TabNavigator = () => (
    <Tab.Navigator {...tabProps}>
      <Tab.Screen
        name="TransactionEntryLandingScreen"
        children={() => <TransactionEntryLanding dataSource={dataSource!} />}
        options={{
          title: 'Patients Record',
          tabBarActiveBackgroundColor: 'transparent',
          tabBarActiveTintColor: 'darkblue',
          headerShown: false,
          tabBarLabel: 'Patients',
          tabBarIcon: ({ color, size }) => (
            <Icon name="tooth" color="pink" size={size} /> // Use the imported Icon component
          ),
        }}
      />
      <Tab.Screen
        name="AssetEntryLandingScreen"
        children={() => <AssetEntryLanding dataSource={dataSource!} />}
        options={{
          title: 'Asset Manager',
          headerShown: false,
          tabBarLabel: 'Clinic Record',
          tabBarActiveTintColor: 'darkgreen',
          tabBarIcon: ({ color, size }) => (
            <Icon name="tooth" color="pink" size={size} /> // Use the imported Icon component
          ),
        }}
      />
    </Tab.Navigator>
  );

  const Display = () => {
    if (dataSource) {
      return (
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      );
    } else {
      return <Text>Cannot get data source</Text>;
    }
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <Display />
        {/* Below is just a footer message */}
        <Text style={{ padding: 6, fontSize: 14, fontStyle: "italic", textAlign: 'center' }}>Copyright: Chima Okwuokei</Text>
      </>
    );
  }
};

export default App;
