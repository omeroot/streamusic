module.exports = {
  success: {
    code: 200,
    message: 'request was successfully received'
  },
  badRequest: {
    code: 400,
    message: 'The request could not be understood by the server [Bad Request]'
  },
  unAuthorized: {
    code: 401,
    message: 'The request requires user authentication'
  },
  forbidden: {
    code: 403,
    message: 'forbidden'
  },
  notFound: {
    code: 404,
    message: 'request uri not found'
  },
  timeout: {
    code: 408,
    message: 'timeout'
  }
};