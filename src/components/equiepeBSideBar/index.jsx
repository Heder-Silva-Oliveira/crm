import {React, useState } from 'react'
import { Side, PositionHide, PositionDots, Dot, Name, Email, PositionSearch, InputSearch, PositionHome, SpanPosition, PositionClient, PositionSubject, PositionPlanner, PositionRemark, PositionLogout, Img, ImgLogo } from './styles'
import logoUnionIcon from './assets/LogoUnion.svg'
import {ReactComponent as HideBar} from './assets/HideBar.svg'
import photo from './assets/Photo.svg'
import {ReactComponent as Search} from './assets/Search.svg'
import {ReactComponent as Home} from './assets/Home.svg'
import {ReactComponent as Client} from './assets/Client.svg'
import {ReactComponent as Subject} from './assets/Subject.svg'
import {ReactComponent as Planner} from './assets/Planner.svg'
import {ReactComponent as Remark} from './assets/Remark.svg'
import {ReactComponent as Logout} from './assets/Logout.svg'



const Sidebar = () => {

  const [ isBar, setSideBar ] = useState(false);

  console.log({setSideBar});

  return (
    <Side isBar={isBar}>
        <PositionHide onClick={() => setSideBar(!isBar)}>
            <HideBar />
        </PositionHide>  
        <ImgLogo src={logoUnionIcon} isBar={isBar}/>
            <Img src={photo} isBar={isBar}/>
        <PositionDots>
          <Dot isBar={isBar}/><Dot isBar={isBar}/><Dot isBar={isBar}/><Dot isBar={isBar}/><Dot isBar={isBar}/>
        </PositionDots>
        <Name isBar={isBar}>
          Carlos Hideki 
        </Name>
        <Email isBar={isBar}>
          carlos@teste.com
        </Email>
        <PositionSearch isBar={isBar}>
          <Search/><InputSearch isBar={isBar}/>
        </PositionSearch>
        <PositionHome isBar={isBar}>
          <Home/> <SpanPosition isBar={isBar}>Home</SpanPosition >
        </PositionHome>
        <PositionClient isBar={isBar}>
          <Client /> <SpanPosition isBar={isBar}>Client</SpanPosition>
        </PositionClient >
        <PositionSubject isBar={isBar}>
          <Subject/> <SpanPosition isBar={isBar}>Subject</SpanPosition>
        </PositionSubject>
        <PositionPlanner isBar={isBar}>
          <Planner /> <SpanPosition isBar={isBar}>Planner</SpanPosition>
        </PositionPlanner>
        <PositionRemark isBar={isBar}>
          <Remark /> <SpanPosition isBar={isBar}>Remark</SpanPosition>
        </PositionRemark>
        <PositionLogout isBar={isBar}>
          <Logout /> <SpanPosition isBar={isBar}>Logout</SpanPosition>
        </PositionLogout>
    </Side>
  )
}

export default Sidebar