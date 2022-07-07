import { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const LeftBar = () => {
  const [icon, setIcon] = useState(false);
  const { setCurrentTheme, currentTheme, dark, light } =
    useContext(ThemeContext);

  const toggleIcon = () => {
    setIcon(!icon);
    if (icon == true) {
      return setCurrentTheme(light);
    }
    if (icon == false) {
      return setCurrentTheme(dark);
    }
  };

  useEffect(() => {
    localStorage.setItem("invoice-theme", JSON.stringify(currentTheme.name));
  }, [icon]);

  return (
    <Sidebar>
      <LogoContainer>
        <img src="/icons/logo.svg" alt="logo" width={40} height={37} />
      </LogoContainer>
      <ImgContainer>
        <SunIconStyled onClick={toggleIcon}>
          {icon ? <SunIcon color="#858BB2" /> : <MoonIcon color="#7E88C3" />}
        </SunIconStyled>
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

const SunIconStyled = styled.div`
  cursor: pointer;

  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;
