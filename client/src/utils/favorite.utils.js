const favoriteUtils = {
  check: ({ listFavorities, mediaId }) =>
    listFavorities &&
    listFavorities.find((e) => e.mediaId.toString() === mediaId.toString()) !==
      undefined,
};

export default favoriteUtils;
