import React from 'react';
import { render, Text, View } from 'react-sketchapp';
import type { User } from './types';
import { fonts, spacing } from './designSystem';
import Profile from './components/Profile';
import MiniProfile from './components/MiniProfile';
import Space from './components/Space';


const Page = ({ users }: { users: Array<User> }) => (
  <View>
    <Text style={fonts['Title 1']}>Example Design System</Text>
    <View
      style={{
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: users.length * 300,
        backgroundColor: '#F8F8F8'
      }}
    >
      {users.map(user => (
        <Space key={user.screen_name} h={spacing} v={spacing}>
          <Profile user={user} />
        </Space>
      ))}
    </View>    

    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: users.length * 900,
        backgroundColor: '#F8F8F8'
      }}
    >
      {users.map(user => (
        <Space key={user.screen_name} h={spacing} v={spacing}>
          <MiniProfile user={user} />
        </Space>
      ))}
    </View>    



  </View>
  
);

export default (context) => {
  const DATA = [
    {
      screen_name: 'Cherry Blossoms',
      description: 'The cherry blossoms are meaningful to the Japanese.  The reason being that they have a very finite window for full blooming.',
      url: 'www.cherryblossomfestival.com',
      profile_image_url: 'https://dl.dropboxusercontent.com/u/1612883/assets/cherry.jpg',
    },
    {
      screen_name: 'Ice Caves',
      description: 'Ice caves are very mystical. Over many centures waters are frozen and there are icycles that hang from the roof of the cave.',
      url: 'www.besticecaves.com',
      profile_image_url: 'https://dl.dropboxusercontent.com/u/1612883/assets/ice.jpg',
    },
    {
      screen_name: 'Sunset Bridge',
      description: 'There is something magical about the sunset and bridge, especially when the light is contrasting.  Orange mixed with purples.',
      url: 'www.californiabridges.com',
      profile_image_url: 'https://dl.dropboxusercontent.com/u/1612883/assets/spain.jpg',
    },
  ];

  render(<Page users={DATA} />, context.document.currentPage());
}
