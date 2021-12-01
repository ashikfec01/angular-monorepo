module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3063c2b4c749375869bd5b9fde9b2cff'),
  },
});
