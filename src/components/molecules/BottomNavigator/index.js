import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {TabItem} from '../../atoms';
import {colors} from '../../../utils';

const BottomNavigator = ({state, descriptors, navigation}) => {
  // const focusedOptions = descriptors[state.routes[state.index].key].options;

  // if (focusedOptions.tabBarVisible === false) {
  //   return null; }
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        // const keyval = () => {
        //   return index;
        // };
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            title={label}
            active={isFocused}
            key={index}
            // key={keyval()}
            onPress={onPress}
            onLongPress={onLongPress}
          />
          // <TouchableOpacity
          //   accessibilityRole="button"
          //   accessibilityState={isFocused ? { selected: true } : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   style={{ flex: 1 }}
          // >
          //   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          //     {label}
          //   </Text>
          // </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 53,
    paddingVertical: 12,
    backgroundColor: colors.secondary,
  },
});
