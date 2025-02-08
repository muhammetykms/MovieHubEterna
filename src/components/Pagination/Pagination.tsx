// Pagination.tsx
// Sayfalama noktalarını yöneten bileşen.
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';

type PaginationProps = {
  items: any[];
  currentIndex: number;
  onDotPress: (index: number) => void;
};
const {width} = Dimensions.get('window');

const Pagination: React.FC<PaginationProps> = ({
  items,
  currentIndex,
  onDotPress,
}) => {
  const {theme} = useTheme(); // Access the current theme

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      {items.map((_, index) => (
        <Text
          key={index}
          style={[
            styles.dot,
            {color: theme.colors.text},
            currentIndex === index && [
              styles.activeDot,
              {color: theme.colors.primary},
            ],
          ]}
          onPress={() => onDotPress(index)}>
          •
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: width * 0.05,
  },
  dot: {
    fontSize: width * 0.08,
    marginHorizontal: width * 0.02,
  },
  activeDot: {
    fontWeight: 'bold',
  },
});

export default Pagination;
