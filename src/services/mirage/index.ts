import { ActiveModelSerializer, createServer, Factory, Model } from 'miragejs';

type User = {
  name: string;
};
export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `user ${i}`;
        },
      }),
    },

    seeds(server) {
      server.createList('user', 5);
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', schema => {
        return schema.all('user');
      });

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
}
