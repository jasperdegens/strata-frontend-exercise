export const checkEnvironment = () => {
  const BASE_URL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'strata-frontend-exercise-roan.vercel.app';

  return BASE_URL;
};
