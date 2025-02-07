import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider'; // Importing useTheme to access the current theme

type PaginationProps = {
  items: any[];
  currentIndex: number;
  onDotPress: (index: number) => void;
};

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
            {color: theme.colors.text}, // Apply dynamic text color based on theme
            currentIndex === index && [
              styles.activeDot,
              {color: theme.colors.primary}, // Apply active dot color from theme
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
    marginBottom: 20,
  },
  dot: {
    fontSize: 45,
    marginHorizontal: 5,
  },
  activeDot: {
    fontWeight: 'bold', // Optional, to make the active dot stand out more
  },
});

export default Pagination;
