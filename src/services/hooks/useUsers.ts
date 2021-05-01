import { useQuery } from 'react-query';

import { api } from '../api';

type GetUsersResponse = {
  users: User[];
  totalCount: number;
};

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return {
    users,
    totalCount,
  };
}

export function useUsers(page = 1) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 3000 * 60 * 10, // 10 minutes
  });
}
