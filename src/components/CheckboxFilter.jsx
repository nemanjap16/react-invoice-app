import styled from "styled-components";

const CheckboxFilter = ({ handleFilter }) => {
  return (
    <Container>
      <Box>
        <input
          type="checkbox"
          id="draft"
          value="draft"
          onChange={handleFilter}
        />
        <label htmlFor="draft">Draft</label>
      </Box>
      <Box>
        <input
          type="checkbox"
          id="pending"
          value="pending"
          onChange={handleFilter}
        />
        <label htmlFor="pending">Pending</label>
      </Box>
      <Box>
        <input type="checkbox" id="paid" value="paid" onChange={handleFilter} />
        <label htmlFor="paid">Paid</label>
      </Box>
    </Container>
  );
};

export default CheckboxFilter;

const Container = styled.div`
  padding: 24px 100px 24px 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.currentTheme.inputBg};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  input {
    cursor: pointer;
  }

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.currentTheme.title};
    font-size: 12px;
    cursor: pointer;
  }
`;
