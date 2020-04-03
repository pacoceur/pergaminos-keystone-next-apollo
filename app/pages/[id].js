import React from 'react';
import Layout from '../components/Layout';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

const GET_POST = gql`
  query Post($Id: ID!) {
    Post(where: {id: $Id}) {
      id
      slug
      title
      content
    }
  }
`;

export default () => {
    const router = useRouter();
    const id = router.query.id;

    const { loading, error, data } = useQuery(GET_POST, { variables: { id } });

    const PostElement = () => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        const { Post } = data;

        return (
            <p>{Post.slug}</p>
        );
    }

    return (
        <Layout>
            <PostElement />
        </Layout>
    );
};