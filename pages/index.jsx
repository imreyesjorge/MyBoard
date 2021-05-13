import { useState } from "react";

import Layout from "../src/components/Layout";
import Nav from "../src/components/Nav";
import Container from "../src/components/Container";

const index = () => {
  const [tag, setTag] = useState("");

  return (
    <Layout>
      <Nav searched={tag} setSearched={setTag} />
      <Container></Container>
    </Layout>
  );
};

export default index;
