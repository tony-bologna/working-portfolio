import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

/* actual menu.... */

export const TopNav = styled.nav `
   background: rgb(255, 179, 255, .99);
   height: 4rem;
   display: flex;
   flex-direction: column;
   position: fixed;
   align-items: center;
   width: 100vw;
   z-index: 100;
   overflow: hidden;
   transition: 400ms;

   @media screen and (max-width: 768px) {
      top: 0;
       left: 0%;
       padding:0;
       font-size: 0.75rem;
       line-height: 1rem;
     }

     @media screen and (min-width: 1024px) {
       width: 15%;
       height: 100vh;
       padding:0;
       justify-content: center;
       position: fixed;
       top: 0;
       left: 0%;
       transition: 400ms;
      }
`;

/* Content in Menu*/
export const NavLink = styled(Link)`
  color: #808080;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:focus,
  &:hover{
    color: #4d4dff;
  }
`;