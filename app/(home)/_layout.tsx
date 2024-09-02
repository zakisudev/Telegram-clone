import ChatProvider from '../../providers/ChatProvider';
import { Stack } from 'expo-router';

const HomeLayout = () => {
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
};

export default HomeLayout;
