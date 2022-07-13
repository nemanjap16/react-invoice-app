import { useContext, useEffect } from "react";
import styled, { ThemeContext } from "styled-components";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const LeftBar = () => {
  const { setCurrentTheme, currentTheme, dark, light } =
    useContext(ThemeContext);

  const toggleIcon = (e) => {
    let icon = e.target.dataset.name;
    if (icon == "moon") {
      setCurrentTheme(dark);
      localStorage.setItem("invoice-theme", JSON.stringify("dark"));
    } else {
      setCurrentTheme(light);
      localStorage.setItem("invoice-theme", JSON.stringify("light"));
    }
  };

  return (
    <Sidebar>
      <LogoContainer>
        <img src="/icons/logo.svg" alt="logo" width={40} height={37} />
      </LogoContainer>
      <ImgContainer>
        <IconStyled onClick={toggleIcon}>
          {currentTheme.name == "light-theme" ? (
            <MoonIcon color="#7E88C3" />
          ) : (
            <SunIcon color="#858BB2" />
          )}
        </IconStyled>
        <ImgUser>
          <img src="/icons/image-avatar.jpg" alt="user" />
        </ImgUser>
      </ImgContainer>
    </Sidebar>
  );
};

export default LeftBar;

const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 103px;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  border-radius: 0 20px 20px 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 103px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    background-color: ${({ theme }) => theme.colors.purple};
    width: 100%;
    height: 70px;
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px 0 20px 0;
    width: 100%;
    height: 52px;
    z-index: -1;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

const ImgUser = styled.div`
  height: 103px;
  width: 103px;
  border-top: 1px solid ${({ theme }) => theme.colors.grayish};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const IconStyled = styled.div`
  cursor: pointer;

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;
