import Image from "next/image";
import React from "react";
import { Container, ContainerDescription, Description, Title } from "./styles";

const ListItemComponent = (props: any) => {
  const { name, description, imgsrc } = props;

  return (
    <>
      <Container>
        <ContainerDescription>
          <Title>{name}</Title>
          <hr />
          <Description>{description}</Description>
        </ContainerDescription>
        <Image src={imgsrc} height={150} width={300} alt="img-fruta" />
      </Container>
      <hr />
    </>
  );
};

export default ListItemComponent;
