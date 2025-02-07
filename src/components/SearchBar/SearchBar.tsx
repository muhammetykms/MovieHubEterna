// components/SearchBar.tsx
import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

type SearchBarProps = {
  onSearch: (query: string) => void;
  onClear: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({onSearch, onClear}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length > 0) {
        onSearch(searchQuery);
      } else {
        onClear();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for movies"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
});

export default SearchBar;
