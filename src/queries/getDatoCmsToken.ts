// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  // Check direct general token first
  if (process.env.REACT_APP_DATOCMS_TOKEN) {
    return process.env.REACT_APP_DATOCMS_TOKEN;
  }

  if (process.env.REACT_APP_DATOCMS_ROR_TOKEN) {
    return process.env.REACT_APP_DATOCMS_ROR_TOKEN;
  }

  const hostname = window.location.hostname;

  switch (hostname) {
    case 'java.sumanthsamala.com':
    case 'java.localhost':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.sumanthsamala.com':
    case 'frontend.localhost':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.sumanthsamala.com':
    case 'node.localhost':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    default:
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? process.env.REACT_APP_DATOCMS_TOKEN ?? '';
  }
};
