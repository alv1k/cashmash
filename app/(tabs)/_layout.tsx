import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="finance"
        options={{
          title: 'Finance',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="money.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="maintainance"
        options={{
          title: 'Maintainance',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="maintainance.icon.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reciepts"
        options={{
          title: 'Reciepts',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="reciepts.icon.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="account.page.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
