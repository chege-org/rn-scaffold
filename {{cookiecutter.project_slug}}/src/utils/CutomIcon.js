import React from 'react';
import {View} from 'react-native';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import icoMoonConfig from './selection.json';

const Icon = createIconSetFromIcoMoon(icoMoonConfig);
/**
 * @param  {string} {name - This should the name of an icon.
 * Hint[checkout selection.json file under theme directory to get/customize the icon names]
 * @param  {string} color - It should be the color of an icon (in a jsx color string format)
 * @param  {number} size} - This is the size of an icon
 */
const CustomIcon = ({name, color, size}) => (
  <View>
    <Icon name={name} size={size} color={color} />
  </View>
);

CustomIcon.defaultProps = {color: '#000', size: 27};

export default CustomIcon;
