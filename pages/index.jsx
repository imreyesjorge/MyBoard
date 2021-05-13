import { useState } from "react";

import Layout from "../src/components/Layout";
import Nav from "../src/components/Nav";
import Container from "../src/components/Container";
import Card from "../src/components/Card";

const Cards = [
  {
    title: "First Note",
    body: "This is the body of this note, is a short one.",
    tag: "misc",
  },
  {
    title: "Second Note",
    body: "This is the body of this note, is a short one.",
    tag: "misc",
  },
  {
    title: "Third Note",
    body: "This is the body of this note, is a short one.",
    tag: "misc",
  },
  {
    title: "First day in school",
    body: "This is the body of this note, is a short one.",
    tag: "school",
  },
  {
    title: "First Note",
    body: "This is the body of this note, is a short one.",
    tag: "misc",
  },
];

const index = () => {
  const [tag, setTag] = useState("");

  return (
    <Layout>
      <Nav searched={tag} setSearched={setTag} />
      <Container>
        {Cards.map((item) => {
          return <Card title={item.title} body={item.body} tag={item.tag} />;
        })}
      </Container>
    </Layout>
  );
};

export default index;
