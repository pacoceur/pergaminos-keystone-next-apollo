import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-boost';

const config = {
  link: new HttpLink({
    credentials: 'same-origin',
    uri: 'http://localhost:3000/admin/api',
  }),
};

export default withData(config);
