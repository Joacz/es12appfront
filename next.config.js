/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/event/delete/:id*',
        destination: 'http://api.escuela12neuquen.edu.ar/api/event/delete/:id*',
      },
      {
        source: '/api/event',
        destination: 'http://api.escuela12neuquen.edu.ar/api/event',
      },
      {
        source: '/api/event/:id*',
        destination: 'http://api.escuela12neuquen.edu.ar/api/event/:id*',
      },
      {
        source: '/api/publication',
        destination: 'http://api.escuela12neuquen.edu.ar/api/publication',
      },
      {
        source: '/api/publication/delete/:id*',
        destination:
          'http://api.escuela12neuquen.edu.ar/api/publication/delete/:id*',
      },
      {
        source: '/api/publication/:id*',
        destination: 'http://api.escuela12neuquen.edu.ar/api/publication/:id*',
      },
      {
        source: '/api/image/:publicationId*',
        destination:
          'http://api.escuela12neuquen.edu.ar/api/image/:publicationId*',
      },
      {
        source: '/api/image/:fileName*',
        destination: 'http://api.escuela12neuquen.edu.ar/api/image/:fileName*',
      },
    ];
  },
};
