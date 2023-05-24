/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: '/admin/subir-evento',
        destination: 'http://api.escuela12neuquen.edu.ar/admin/formEvent',
      },
      {
        source: '/admin/subir-evento/:id*',
        destination: 'http://api.escuela12neuquen.edu.ar/admin/formEvent/:id*',
      },
      {
        source: '/admin/lista-evento',
        destination: 'http://api.escuela12neuquen.edu.ar/admin/events',
      },
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
        source: '/admin/ingresar',
        destination: 'http://api.escuela12neuquen.edu.ar/login',
      },
      {
        source: '/api/publication',
        destination: 'http://api.escuela12neuquen.edu.ar/api/publication',
      },
      {
        source: '/admin/subir-publicacion',
        destination: 'http://api.escuela12neuquen.edu.ar/admin/formPublication',
      },
      {
        source: '/admin/subir-publicacion/:id*',
        destination:
          'http://api.escuela12neuquen.edu.ar/admin/formPublication/:id*',
      },
      {
        source: '/admin/lista-publicacion',
        destination: 'http://api.escuela12neuquen.edu.ar/admin/publications',
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
        source: '/admin',
        destination: 'http://api.escuela12neuquen.edu.ar/admin/',
      },
      {
        source: '/api/image/:fileName*',
        destination: 'http://api.escuela12neuquen.edu.ar/api/image/:fileName*',
      },
    ];
  },
};
