import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.div`
  position: fixed;
  z-index: 3;
  display: grid;
  width: 86vw;
  height: 82vh;
  background: black;
  align-items: space-evenly;
  /* justify-content: center; */
  transition: 0.2s ease-in-out;
  border-radius: 15px;
  top: ${({ isOpen }) => (isOpen ? "7vh" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  left: 7%;
`;
export const CloseIconWrapepr = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 100px;
`;

export const CloseIcon = styled(FaTimes)`
  /* right: 50px; */
  display: grid;
  align-items: start;
  position: absolute;
  right: 50px;
  color: white;
  font-size: 40px;
`;
export const SideBarMenu = styled.div`
  display: grid;
  align-items: space-evenly;
  justify-content: center;
  font-size: 80px;
  margin-bottom: 50px;
`;
export const SideBarItem = styled.div`
  font-size: 0.4em;
  color: #fff;
  margin: 20px;
`;
export const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
