import axios from 'axios';

import { UserEntity } from '@entities/User';

interface AuthResponse {
  token: string;
  user: UserEntity;
}

export const auth = {
  register: async (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    middleName: string;
  }) => {
    const response = await axios.post<AuthResponse>('/auth/register', data);

    return response.data;
  },
  signIn: async (data: { email: string; password: string }) => {
    const response = await axios.post<AuthResponse>('/auth/login', data);

    return response.data;
  },
};
