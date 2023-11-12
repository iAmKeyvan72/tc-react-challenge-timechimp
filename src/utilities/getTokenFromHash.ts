export const getTokenFromHash = () => {
  return (
    window.location.hash
      .substring(1)
      .split('&')
      .find((el) => el.startsWith('access_token'))
      ?.split('=')[1] || null
  );
};
