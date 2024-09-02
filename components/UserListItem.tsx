import { Pressable, Text, Image } from 'react-native';
import React from 'react';
import { useChatContext } from 'stream-chat-expo';
import { useAuth } from '../providers/AuthProvider';
import { router } from 'expo-router';

const UserListItem = ({ user }) => {
  const { client } = useChatContext();
  const { user: me } = useAuth();

  const onPress = async () => {
    const channel = client.channel('messaging', {
      members: [me.id, user.id],
    });

    await channel.watch();

    router.push(`/channel/${channel.cid}`);
  };

  return (
    <Pressable
      onPress={onPress}
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
      <Text style={{ fontWeight: '600', fontSize: 24 }}>
        {user?.username || user?.full_name}
      </Text>
      <Image
        source={{
          uri: `https://uarfjlmyufajbvxfcsok.supabase.co/storage/v1/object/public/avatars/${user?.avatar_url}`,
        }}
        style={{ width: 40, height: 40, borderRadius: 50 }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default UserListItem;
