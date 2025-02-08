// SearchBar.tsx
// Kullanıcıların film araması yapabilmesi için arama çubuğu ve filtreleme seçeneği sunar.
import React, {useState, useEffect} from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import styles from './SearchBar.styles';

type SearchBarProps = {
  onSearch: (query: string) => void;
  onClear: () => void;
  onFilter: () => void; // Filtre butonuna tıklama işlemi
};

const SearchBar: React.FC<SearchBarProps> = ({onSearch, onClear, onFilter}) => {
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
        placeholder="Film ara"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Pressable onPress={onFilter} style={styles.filterButton}>
        <Text style={styles.filterText}>Filtrele</Text>
      </Pressable>
    </View>
  );
};

export default SearchBar;
