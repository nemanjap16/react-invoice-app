import styled from "styled-components";

const DeleteIcon = ({ color, deleteItem }) => {
  return (
    <Container onClick={deleteItem}>
      <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
          fill={`${color}`}
          fillRule="nonzero"
        />
      </svg>
    </Container>
  );
};

export default DeleteIcon;

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  margin-top: 19px;
`;
