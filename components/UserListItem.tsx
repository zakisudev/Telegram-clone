import { View, Text, Image } from 'react-native';
import React from 'react';

const UserListItem = ({ user }) => {
  return (
    <View
      style={{
        width: '100%',
        padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <Text style={{ fontWeight: '600', fontSize: 24 }}>{user.full_name}</Text>
      <Image
        source={{
          uri: `https://uarfjlmyufajbvxfcsok.supabase.co/storage/v1/object/public/avatars/${user?.avatar_url}`,
        }}
        style={{ width: 40, height: 40, borderRadius: 50 }}
        resizeMode="cover"
      />
    </View>
  );
};

export default UserListItem;
