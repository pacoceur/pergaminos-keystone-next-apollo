import React from 'react';
import Layout from '../components/Layout';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

const GET_POST = gql`
  query {
    Post(where: {id: "5e878d395173ac282490bee5"}) {
      id
      slug
      title
      content
    }
  }
`;

export default () => {
    const router = useRouter();
    const {query : id} = router

    /*const { loading, error, data } = useQuery(GET_POST, { variables: { id } });

    console.log(data);

    /*const PostElement = () => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const { Post } = data;

        return (
            <p>{Post.content}</p>
        );
    }*/

    return (
        <Layout>
            {router.query.id}
        </Layout>
    );
};