import React from 'react';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {LayoutChangeEvent, Pressable, StyleSheet, Animated} from 'react-native';
import {useEffect, useRef} from 'react';

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

export const TabBarComponent = ({
  active,
  options,
  onLayout,
  onPress,
}: TabBarComponentProps) => {
  const scale = useRef(new Animated.Value(active ? 1 : 0)).current;
  const opacity = useRef(new Animated.Value(active ? 1 : 0.5)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: active ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: active ? 1 : 0.5,
      duration: 1250,
      useNativeDriver: true,
    }).start();
  }, [active, opacity, scale]);

  return (
    <Pressable onPress={onPress} onLayout={onLayout} style={styles.component}>
      <Animated.View
        style={[
          styles.componentCircle,
          {
            transform: [
              {
                scale,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity,
          },
        ]}>
        {options.tabBarIcon({})}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
    marginLeft: -25,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
