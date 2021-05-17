import { useState } from "react";
import { nanoid } from "nanoid";

import Layout from "../src/components/Layout";
import Nav from "../src/components/Nav";
import Container from "../src/components/Container";
import Card from "../src/components/Card";
import Modal from "../src/components/Modal";

const Cards = [
  {
    title: "Et in aut enim",
    body: "Et voluptatibus autem quia cum incidunt. Et ipsa cum qui. Qui minus laudantium minus nihil ad doloremque.",
    tag: "misc",
  },
  {
    title: "Omnis quod atque",
    body: "Possimus temporibus hic nobis molestiae vel consequatur doloribus sapiente.",
    tag: "misc",
  },
  {
    title: "Et in aut enim",
    body: "Iste enim magnam blanditiis magni omnis quos.",
    tag: "misc",
  },
  {
    title: "Inventore et dolores",
    body: "Nobis aut laborum sequi dolor non. Recusandae minima non autem et. Quo praesentium aut autem.",
    tag: "school",
  },
  {
    title: "Omnis quod atque",
    body: "Recusandae aspernatur nobis qui soluta. ",
    tag: "misc",
  },
  {
    title: "Corrupti non qui ",
    body: "Corporis labore et soluta aut eos. Et in aut enim. Esse fuga doloremque rerum.",
    tag: "javascript",
  },
  {
    title: " Corporis labore et ",
    body: "Quaerat vel doloribus cum ratione incidunt iure cumque. Inventore et dolores placeat laborum et. ",
    tag: "school",
  },
];

const index = () => {
  const [tag, setTag] = useState("");
  const [isModal, setIsModal] = useState(false);

  return (
    <Layout>
      <Nav
        searched={tag}
        setSearched={setTag}
        setModalState={setIsModal}
        modalState={isModal}
      />
      <Container>
        {Cards.map((item) => {
          return item.tag
            .toLocaleLowerCase()
            .includes(tag.toLocaleLowerCase()) ||
            item.title.toLocaleLowerCase().includes(tag.toLocaleLowerCase()) ? (
            <Card
              title={item.title}
              body={item.body}
              tag={item.tag}
              key={nanoid()}
            />
          ) : null;
        })}
      </Container>
      {isModal ? (
        <Modal modalState={isModal} setModalState={setIsModal} />
      ) : null}
    </Layout>
  );
};

export default index;
