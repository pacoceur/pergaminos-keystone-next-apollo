import Layout from '../components/Layout';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

const GET_POST = gql`
  query Post($id: ID!) {
    Post(where: {id: $id}) {
      id
      slug
      title
      content
    }
  }
`;

export default () => {
    const router = useRouter();
    const {slug : id} = router.query

    const { loading, error, data } = useQuery(GET_POST, { variables: { id } });

    console.log(data);

    const PostElement = () => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const { Post } = data;

        return (
          <div className="text-center my-5">
            <h1>{Post.title}</h1>
            <p className="text-justify my-5 multiline">{Post.content}</p>
          </div>
        );
    }

    return (
        <Layout>
            <PostElement />
        </Layout>
    );
};