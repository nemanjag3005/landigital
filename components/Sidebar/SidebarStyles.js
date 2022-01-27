import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';


export const SidebarContainer = styled.aside`
 position: fixed;
 z-index: 999;
 width: 100%;
 height: 100%;
 background-color: #242a56;
 display: grid;
 align-items: center;
 top: 0;
 right: 0;
 transition: 0.3s ease-in-out;
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
 
`

export const NavLogo = styled.img`
  margin-right: auto;
  max-width: 70px;
  position: absolute;
  top: 2rem;
  left: 1.5rem;
  height: auto;
  /* aspect-ratio: 1080/1080; */
  cursor: pointer;
  /* @media (max-width: 60em) {
    max-width: 120px;
  } */
`;

export const CloseIcon = styled(VscClose)`
 color: #fff;
`

export const Icon = styled.div`
 position: absolute;
 top: 3rem;
 right: 1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`

export const SidebarWrapper = styled.div`
 color: #fff;
 padding: 1rem;
`

export const SidebarItem = styled.a`
 cursor: pointer;
 text-align: center;
 text-decoration: none;
padding: 1rem 1em;
display: flex;
 align-items: center;
 font-family: sans-serif;
 justify-content: center;
transition: all .2s linear;
 color: #d0d8ea;
 transition: all 0.2s ease-in;
 font-size: 1.5rem;
@media (max-width: 20em) {
    font-size: 1.3rem;
}
 font-weight: 100;
 &:hover {
    color: white;
}
`

export const SideBtnWrap = styled.div`
 display: flex;
 justify-content: center;

`

export const SidebarBtn = styled.button`

border-radius: 42px;
background: #6878d6;
font-family: 'Open Sans',sans-serif;
font-weight: 100;
border-style: solid;
border-color: #6878d6;
border: none;
color: white;
font-size: 1.2rem;
@media (max-width: 20em) {
    font-size: 1rem;
}
line-height: 1;
text-transform: uppercase;
letter-spacing: 1px;
padding-top: 15px;
padding-bottom: 15px;
padding-left: 28px;
padding-right: 28px;
transition: all .2s linear;
cursor: pointer;
&:hover {
    background: #fff;
    color: #214973;
}
`

export const SidebarMenu = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 80px);
 text-align: center;

 @media screen and (max-width: 480px) {
     grid-template-rows: repeat(6, 60px);
 }
`