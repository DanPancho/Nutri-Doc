import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1em 0 2em 0;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 1px 1px 1px #ccc;
  margin-bottom: 0.5em;
`;

export const ContainerDescription = styled.div`
  background: white;
  border: solid 2px black;
  box-shadow: 10px 10px 0 -4px white, 11px 11px black;
  width: 30%;
  padding: 1.5em;
`;
export const Description = styled.p`
  margin-top: 0.5em;
`;

export const BackgroundGradient = styled.div`
  background-image: repeating-linear-gradient(
    var(#222),
    var(#222) 20px,
    var(#333) 20px,
    var(#333) 40px,
    var(#444) 40px,
    var(#444) 60px
  );
  background-size: 100px 100px;
`;
