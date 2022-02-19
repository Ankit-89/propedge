import {createServer, Model} from 'miragejs';
import {elementUnits, propertyList, appointments} from './data';
if (window.server) {
  server.shutdown();
}
export function makeServer({environment} = {}) {
  window.server = createServer({
    environment,
    models: {
      notes: Model,
    },
    seeds(server) {
      server.create('note', {
        title: 'Nulla sit amet',
        body: 'Praesent congue erat at massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque commodo eros a enim. Nunc interdum lacus sit amet orci.',
      });
      server.create('note', {
        title: 'Curabitur suscipit suscipit',
        body: 'Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Praesent nec nisl a purus blandit viverra.',
      });
      server.create('note', {
        title: 'Donec id justo',
        body: 'Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Curabitur suscipit suscipit tellus. Praesent ac sem eget est egestas volutpat. Pellentesque posuere.',
      });
    },
    routes() {
      this.namespace = 'api';

      this.pretender.handledRequest = (verb, path, request) => {
        console.log(`Your server responded to ${path}`);
      };

      this.post('/login', (schema, request) => {
        const {mobile} = JSON.parse(request.requestBody);
        if (!mobile) {
          return {
            success: false,
            message: 'Invalid mobile number',
          };
        }
        return {
          success: true,
          mobile: mobile,
        };
      });

      this.post('/verify/otp', (schema, request) => {
        const {otp} = JSON.parse(request.requestBody);
        if (!otp) {
          return {
            success: false,
            message: 'OTP Failed Validation',
          };
        }

        if (otp !== '000000') {
          return {
            success: false,
            message: 'Failed Authentication',
          };
        }
        return {
          success: true,
        };
      });

      this.get('/element/units', (schema, request) => {
        return {
          success: true,
          ...elementUnits,
        };
      });

      this.get('/v1/properties', (schema, request) => {
        return {
          success: true,
          ...propertyList
        };
      });

      this.get('/v1/appointments', (schema, request) => {
        alert(JSON.stringify(request.requestBody))
        return {
          success: true,
          ...appointments
        };
      });
      // this.get('/:id', (schema, request) => {
      //   let id = request.params.id;
      //   return schema.notes.find(id);
      // });
      // this.post('/', (schema, request) => {
      //   let attrs = JSON.parse(request.requestBody);
      //   return schema.notes.create(attrs);
      // });
      // this.patch('/:id', (schema, request) => {
      //   let newAttrs = JSON.parse(request.requestBody);
      //   let id = request.params.id;
      //   let note = schema.notes.find(id);
      //   return note.update(newAttrs);
      // });
      // this.delete('/:id', (schema, request) => {
      //   let id = request.params.id;
      //   return schema.notes.find(id).destroy();
      // });
    },
  });
}
