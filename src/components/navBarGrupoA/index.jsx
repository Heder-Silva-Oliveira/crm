import React from 'react'
import { useState } from 'react'
import {Container,Icons,Nav,DivOpenClose,Li,Logo,DivLogo,PhotoUser,DivUserP,NameUser,Ul,PIcons,IdEmail} from './styles'
import  Iopen  from '../../imgGrupoA/Iopen.svg';
import  CloseIO  from '../../imgGrupoA/CloseIO.svg';
import  LogoUnion  from '../../imgGrupoA/LogoUnion.svg';
import  Photo  from '../../imgGrupoA/Photo.svg';
import  Home  from '../../imgGrupoA/Home.svg';
import  User  from '../../imgGrupoA/User.svg';
import  Group  from '../../imgGrupoA/Group.svg';
import  Business  from '../../imgGrupoA/Business.svg';
import  Release  from '../../imgGrupoA/ReleaseT.svg';
import  Costumer  from '../../imgGrupoA/Costumer.svg';
import  UserPrivileges  from '../../imgGrupoA/UserPrivileges.svg';



const Header = () => {
  
  const[active, setActive] = useState(false)

  const activeNav = () =>{
    setActive(!active)
  }


    return (
    <Container $mode = {active}>
        
        <DivOpenClose onClick={ activeNav} $mode = {active}>
            
            {!active ?  <img src={Iopen} />  : <Icons src={CloseIO}  />}

        </DivOpenClose>
       <br/>
       <DivLogo $mode = {active}>
                <Logo src={LogoUnion} $mode = {active} />
            </DivLogo>
        <DivUserP>
                <PhotoUser src={Photo} $mode = {active} />
                {!active ?  <p></p> : <NameUser  $mode = {active}>Igor & Camila TCS</NameUser>}
                {!active ?  <p></p> : <IdEmail  $mode = {active}>Igor.Camila@tcs.com</IdEmail>}
                {!active ?  <p></p> : <IdEmail  $mode = {active}>ID:0000000</IdEmail>}
                
        </DivUserP>

        <nav $mode = {active}>
        
           
                <Ul $mode = {active}>
                    
                    <Li>
                        <Icons src={Home}/>
                        {!active ?  <p></p> : <PIcons  $mode = {active}>HOME</PIcons>}
                    </Li>
                    <Li>
                        <Icons src={User}  $mode = {active}/>
                        {!active ?  <p></p> : <PIcons  $mode = {active}>USER</PIcons>}
                    </Li>
                    <Li>
                        <Icons src={Group}  $mode = {active}/>
                        {!active ?  <p></p> : <PIcons  $mode = {active}>GROUP</PIcons>}
                    </Li>
                    <Li>
                        <Icons src={Business}  $mode = {active}/>
                        {!active ?  <p></p> : <PIcons  $mode = {active}>BUSINESS</PIcons>}
                    </Li>
                    <Li>
                        <Icons src={Release}  $mode = {active}/>
                        {!active ?  <p></p> : <PIcons  $mode = {active}>RELEASE TRAIN</PIcons>}
                    </Li>
                    <Li>
                        <Icons src={Costumer}  $mode = {active}/>
                        {!active ?  <p></p> : <PIcons  $mode = {active}>COSTUMER</PIcons>}
                    </Li>
                    <Li>
                        <Icons src={UserPrivileges}  $mode = {active}/>
                        {!active ?  <p></p> : <PIcons  $mode = {active}>USER PRIVILEGES</PIcons>}
                    </Li>
                

                    

                </Ul>

        </nav>
    </Container>
  ) 
}

export default Header