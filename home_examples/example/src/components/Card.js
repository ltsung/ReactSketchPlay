/* @flow */
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';
import { colors, fonts, spacing } from '../designSystem';
import type { User } from '../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['White'],
    width: 400,
    borderRadius: 4,
    shadowColor: colors['Shadow'],
    shadowOffset: { width: 2, height: 2}
  },
  cardImage: {
    height: 200,
    marginBottom: spacing,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  subtitle: {
    fontSize: fonts['Title 3'].fontSize,
    paddingLeft: spacing
  },
  body: {
    fontSize: fonts.Body.fontSize,
    color: colors['Night'],
    padding: spacing,
    lineHeight: fonts.Body.lineHeight
  },
  link: {
	  color: colors['Peach'],
	  padding: spacing
  },

  /*
  backgroundColor: colors['Peach'],
  borderColor: colors['Peach'],
  color: colors['White']
  */
  cta: {
    borderRadius: 4,
    borderWidth: 2,
    marginLeft: spacing,
    marginRight: spacing,
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    backgroundColor: colors['Peach'],
    borderColor: colors['Peach'],
    color: colors['White']
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

const Link = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.link}>
    {children}
  </Text>
);


const CTA = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.cta}>
    {children}
  </Text>
);



const Body = ({ children }: TextP): React$Element<any> => (
  <Text style={styles.body}>
    {children}
  </Text>
);

const Card = (props: CardP): React$Element<any> => (
  <View style={styles.container}>
    <CardImage url={props.user.Card_image_url} />
    <View>
      <Subtitle>{`${props.user.screen_name}`}</Subtitle>
    </View>
    <Body>{props.user.description}</Body>
    <CTA>Purchase Tickets</CTA>

    <Link>{props.user.url}</Link>
  </View>
);

export default Card;
