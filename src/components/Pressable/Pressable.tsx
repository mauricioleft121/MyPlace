import React, { useCallback } from 'react';
import { Pressable as RNPressable, PressableProps as RNPressableProps } from 'react-native';

interface Pressable extends Omit<RNPressableProps, 'style'> {
    children?: React.ReactNode,
    activeOpacity?: number,
    style?: object,
}

const Touchable: React.FC<Pressable> = ({ children, style, activeOpacity, ...otherProps }) => {
  const _style = useCallback(
    ({ pressed }: { pressed: boolean }) => [{ opacity: pressed ? activeOpacity : 1 }, style && style],
    [style, activeOpacity]
  );

  return (
    <RNPressable style={_style} {...otherProps}>
      {children}
    </RNPressable>
  );
};

export default Touchable;