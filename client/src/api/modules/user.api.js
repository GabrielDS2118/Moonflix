import privateClient from '../client/private.client.js';
import publicClient from '../client/public.client.js';

const userEndpoints = {
  sigin: 'user/sigin',
  signup: 'user/signup',
  getInfo: 'user/info',
  passwordUpdate: 'user/update-password',
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.sigin, {
        username,
        password,
      });
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },

  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        username,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  },

  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);
      return { response };
    } catch (error) {
      return { error };
    }
  },

  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.signup, {
        password,
        newPassword,
        confirmNewPassword,
      });
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default userApi;
