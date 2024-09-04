import {
  User,
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  CallContent,
} from '@stream-io/video-react-native-sdk';
import { View, Text } from 'react-native';
import React from 'react';

const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY;
const userId = '495e31fc-5cb7-406c-a3d0-327f0242c67f';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDk1ZTMxZmMtNWNiNy00MDZjLWEzZDAtMzI3ZjAyNDJjNjdmIn0.fmpyxXN6AGorGmLEP4EtYDp3hf1d7P29DDSfdGGZiOo';
const callId = 'default_c777dcdc-f4e4-4419-9358-e3e28ab2559a';
const user: User = { id: userId };

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });

const CallScreen = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <CallContent />
      </StreamCall>
    </StreamVideo>
  );
};

export default CallScreen;
