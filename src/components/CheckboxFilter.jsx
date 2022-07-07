import styled from "styled-components";
import arrow from "/icons/icon-check.svg";

const CheckboxFilter = ({ handleFilter }) => {
  return (
    <Container>
      <Box>
        <Input
          type="checkbox"
          id="draft"
          value="draft"
          onChange={handleFilter}
        />
        <label htmlFor="draft">Draft</label>
      </Box>
      <Box>
        <Input
          type="checkbox"
          id="pending"
          value="pending"
          onChange={handleFilter}
        />
        <label htmlFor="pending">Pending</label>
      </Box>
      <Box>
        <Input type="checkbox" id="paid" value="paid" onChange={handleFilter} />
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

  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    font-weight: 700;
    color: ${({ theme }) => theme.currentTheme.title};
    font-size: 12px;
    cursor: pointer;
  }
`;

const Input = styled.input`
  position: relative;
  appearance: none;
  background-color: ${({ theme }) => theme.currentTheme.checkboxBg};
  width: 16px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  &::after {
    content: url(${arrow});
    display: block;
    position: absolute;
    top: -1px;
    left: 2px;
    opacity: 0;
  }

  &:checked::after {
    opacity: 1;
  }
`;
