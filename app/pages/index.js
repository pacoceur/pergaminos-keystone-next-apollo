import Layout from '../components/Layout';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_POSTS = gql`
  {
    allPosts {
      id
      slug
      title
      content
    }
  }
`;

export default () => {

  const { loading, error, data } = useQuery(GET_POSTS);

  const PostList = () => {
    if (loading) return (
      <li className="list-group-item">Cargando...</li>
    );
    if (error) return (
      <li className="list-group-item">{error.message}</li>
    );

    const { allPosts: posts } = data;

    return posts.map( post => (
      <li className="list-group-item" key={post.id}>
        <Link href={`/${post.id}`}><a>{post.title}</a></Link>
      </li>
    ));
  }

  return (
    <Layout>
      <ul className="list-group mt-5">
        <PostList />
      </ul>
    </Layout>
  );
};