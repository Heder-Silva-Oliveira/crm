import React from "react";
import img from './img.svg';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import {AiOutlineMenuFold} from 'react-icons/ai'
import {BiHome} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineGroups} from 'react-icons/md'
import {MdOutlineBusinessCenter} from 'react-icons/md'
import {BsFillFlagFill} from 'react-icons/bs'
import {RiUserSettingsLine} from 'react-icons/ri'
import {Container, Nav, DivImg, Header, Img, Img2, P, P1, NavLink, Ol, Icon, MenuBar, Menu, MenuLinks, A, NavText, IconNav} from "./styles";


class Sidebarj extends React.Component {
  render() {
    return (
 
       <Container>
            <Nav>
               <Header>
                    <DivImg>
                        <Img src={img} alt="Minha Imagem SVG"/>
                        <Img2 src={logo} alt="Minha Imagem SVG"/>
                        <P>Guilherme Rezende</P>
                        <P1>Guilherme@gmail.com</P1>
                    </DivImg>
                    <Icon>
                        <AiOutlineMenuFold/>
                    </Icon>
                    

                </Header> 

                <MenuBar>
                        <Menu>
                            

                            <MenuLinks>
                                
                                <NavLink>
                                    <A href="#">
                                    
                                        <NavText><BiHome/>Home</NavText>
                                    </A>
                                </NavLink>
                                <NavLink>
                                    <A href="#">
                                        
                                        <NavText><FiUsers/>Uses</NavText>
                                    </A>
                                </NavLink>
                                <NavLink>
                                    <A href="#">
                                    
                                        <NavText><MdOutlineGroups/>Groups</NavText>
                                    </A>
                                </NavLink>
                                <NavLink>
                                    <A href="#">
                                    
                                        <NavText><MdOutlineBusinessCenter/>Business</NavText>
                                    </A>
                                </NavLink>
                                <NavLink>
                                    <A href="#">
                                    
                                        <NavText><BsFillFlagFill/>Release train</NavText>
                                    </A>
                                </NavLink>
                                <NavLink>
                                    <A href="#">
                                    
                                        <NavText><RiUserSettingsLine/>Release train</NavText>
                                    </A>
                                </NavLink>

                            </MenuLinks>
                            

                        </Menu>

                </MenuBar>
                
            </Nav>

       </Container>
    
    );
  }
}

export default Sidebarj;