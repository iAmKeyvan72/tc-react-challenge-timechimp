export const getTokenFromHash = (hash: string) => {
  return (
    hash
      .substring(1)
      .split('&')
      .find((el) => el.startsWith('access_token'))
      ?.split('=')[1] || null
  );
};
