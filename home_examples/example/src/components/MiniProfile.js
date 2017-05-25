/* @flow */
import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-sketchapp';
import { colors, fonts, spacing } from '../designSystem';
import type { User } from '../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: 200,
    borderRadius: 4,
    shadowColor: '#EAEAEA',
    shadowOffset: { width: 2, height: 2}
  },
  avatar: {
    height: 100,
    marginBottom: 20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  subtitle: { 
    fontSize: fonts['Title 3'].fontSize,
    paddingLeft: 20
  },
  body: {
    fontSize: fonts.Body.fontSize,
    color: colors['Night'],
    padding: 20
  }
});

type ProfileP = {
  user: User,
};

type AvatarP = {
  url: string,
};
const Avatar = ({ url }: AvatarP): React$Element<any> => (
  <Image source={url} style={styles.avatar} />
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

const Profile = (props: ProfileP): React$Element<any> => (
  <View style={styles.container}>
    <Avatar url={props.user.profile_image_url} />
    <View style={{ marginBottom: spacing }}>
      <Subtitle>{`${props.user.screen_name}`}</Subtitle>
    </View>
    <Body>{props.user.description}</Body>
  </View>
);

export default Profile;
