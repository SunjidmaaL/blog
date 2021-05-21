import { Row, Col } from "react-bootstrap";

import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";
import Layout from "components/layout";
import Intro from "components/intro";
import { usePosts } from "hooks/usePosts";

export default function Home({ posts }) {
  
  const { data, isLoading, error } = usePosts()

  if (error) return <div>Алдаа гарлаа: {JSON.stringify(error, null, 2)}</div>;
  if (isError) return <div>Ачаалж байна ... </div>;

  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Row className="mb-5">
        {posts.map((post) => (
          <Col md="4">
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
