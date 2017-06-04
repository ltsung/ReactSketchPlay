/* @flow */
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';
import { colors, fonts, spacing, mini_spacing } from '../designSystem';
import type { User } from '../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: 200,
    borderRadius: 4,
    shadowColor: '#EAEAEA',
    shadowOffset: { width: 2, height: 2},
  },
  cardImage: {
    height: 100,
    marginBottom: spacing,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  subtitle: {
    fontSize: fonts['Title 3'].fontSize,
    marginLeft: spacing,
    marginBottom: spacing
  },
  body: {
    fontSize: fonts.Body.fontSize,
    color: colors['Night'],
    marginTop: -20,
    padding: spacing,
    lineHeight: fonts.Body.lineHeight
  }
});

type CardP = {
  user: User,
};

type CardImageP = {
  url: string,
};
const CardImage = ({ url }: CardImageP): React$Element<any> => (
  <Image source={url} style={styles.cardImage} />
);

type TextP = { children?: string };
const Title = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.title}>
    {children}
  </Text>
);

const Subtitle = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.subtitle}>
    {children}
  </Text>
);

const Body = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.body}>
    {children}
  </Text>
);

/*
  Extend with:
      <Body>{props.user.description}</Body>
*/

const Card = (props: CardP): React$Element<any> => (
  <View style={styles.container}>
    <CardImage url={props.user.Card_image_url} />
    <View>
      <Subtitle>{`${props.user.screen_name}`}</Subtitle>
      <Body>{props.user.description}</Body>
    </View>
  </View>
);

export default Card;
