import { useState } from "react";

import Layout from "../src/components/Layout";
import Nav from "../src/components/Nav";

const index = () => {
  const [tag, setTag] = useState("");

  return (
    <Layout>
      <Nav searched={tag} setSearched={setTag} />
    </Layout>
  );
};

export default index;
