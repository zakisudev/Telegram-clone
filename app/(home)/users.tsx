import { FlatList, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../providers/AuthProvider';
import UserListItem from '../../components/UserListItem';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      let { data, error } = await supabase
        .from('profiles')
        .select('*')
        .neq('id', user.id);

      if (error) console.log('error', error);
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <FlatList
      data={users}
      contentContainerStyle={{ marginVertical: 5 }}
      renderItem={({ item }) => <UserListItem user={item} />}
    />
  );
};

export default Users;
