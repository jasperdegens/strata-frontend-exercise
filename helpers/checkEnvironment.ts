export const checkEnvironment = () => {
  const BASE_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://example.com';

  return BASE_URL;
};
