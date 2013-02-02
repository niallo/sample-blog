// mongodb connection
exports.creds = {
  mongo: {
    'hostname': 'localhost',
    'port': 27017,
    'username': '',
    'password': '',
    'name': '',
    'db': 'sample-blog_development'
  }
}

// CORS allowed domains
exports.cors = {
  allowedDomains: '*',
  allowedHeaders: '*',
  allowedMethods: '*'
}