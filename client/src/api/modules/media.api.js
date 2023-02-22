import publicClient from '../client/public.client.js';

const mediaEndpoints = {
  list: ({ mediaType, mediaCategory, page }) =>
    `${mediaType}/${mediaCategory}?page=${page}`,

  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,

  search: ({ mediaType, query, page }) =>
    `${mediaType}/search?query=${query}&page=${page}`,
};

const mediaApi = {
  getList: async ({ mediaType, mediaCategory, page }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.list({ mediaType, mediaCategory, page })
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },

  getDetail: async ({ mediaType, mediaId }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.detail({ mediaType, mediaId })
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },

  search: async ({ mediaType, query, page }) => {
    try {
      const response = await publicClient.get(
        mediaEndpoints.search({ mediaType, query, page })
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default mediaApi;