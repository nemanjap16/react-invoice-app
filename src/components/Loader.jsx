import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <h3>Loading...</h3>
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: grid;
  place-content: center;
`;
