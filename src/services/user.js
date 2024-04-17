// users.js
import api from './conexaoapi';

// Função para fazer o login
export const loginUser = async (username, password) => {
  try {
    const response = await api.post('users/login/', { username, password });
    return response.data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

export const getAuthenticatedUserDetails = async () => {
  try {
    const response = await api.get('get_user_details/');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes do usuário autenticado:', error);
    throw error;
  }
};
