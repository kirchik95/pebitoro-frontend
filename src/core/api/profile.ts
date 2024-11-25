import axios from 'axios';

import { UserEntity } from '@entities/User';

export const profile = {
  me: async () => {
    const response = await axios.get<UserEntity>('/profile');

    return response.data;
  },
};
