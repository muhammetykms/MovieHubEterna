// CastCard.tsx
// Bu bileşen, oyuncular için bir kart yapısı oluşturur ve
//  tıklandığında belirtilen işlemi tetikler.
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CastCard.styles';

type CastCardProps = {
  name: string;
  profilePath: string;
  onPress: () => void;
};

const CastCard: React.FC<CastCardProps> = ({name, profilePath, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{uri: profilePath}} style={styles.profileImage} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CastCard;
