import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Actions,
  CategoryHorizontal,
  Gap,
  TextInter,
  TimeStamp,
} from '../../../../components';
import {IMGGodStatue, theme} from '../../../../assets';
import Button from './Button';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={IMGGodStatue} />

      <Gap height={15} />

      <TextInter style={styles.title}>
        Manado diprediksi Menjadi Kota Metropolitan pada tahun 2030
      </TextInter>

      <Gap height={4} />

      <TimeStamp />

      <Gap height={4} />

      <CategoryHorizontal />

      <Gap height={16} />

      <Button />

      <Gap height={8} />

      <Actions />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: 293,
    padding: 12,
    backgroundColor: theme.colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.headlines.borderColor,
    marginHorizontal: 4,
  },
  image: {
    borderRadius: 4,
    width: '100%',
    height: 209,
    overflow: 'hidden',
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 16,
    color: theme.colors.fontDark,
  },
});
