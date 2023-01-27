import styled from 'styled-components'


const Side = styled.div`
    height: 870px;
    width: ${({isBar}) => isBar ? '186px' : '80px'};
    background-color: #1e2222;
    flex-direction: column;
    align-items: center;
    align-content: flex-start;
    display: flex;
    grid-template-columns: auto;
`
const PositionHide = styled.div`
    margin-top: 10px;
    margin-left: ${({isBar}) => isBar ? '250px' : '0px'};
    cursor: pointer;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
`

const PositionDots = styled.div`
    width: 100px;
    height: 20px;
    margin: 5px;
    margin-left: 35px;
    flex-direction: row;
`
const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background-color: #E41165;
    margin-inline: 2px;
    display: ${({isBar}) => isBar ? 'inline-block' : 'none'};
`

const Name = styled.div`
    color: #ffffff;
    display: ${({isBar}) => isBar ? '' : 'none'};
    opacity: 0.8;
    margin-bottom: 10px;
    margin: 0;

`

const Email = styled.div`
    color: #ffffff;
    display: ${({isBar}) => isBar ? '' : 'none'};
    opacity: 0.8;
    font-size: 12px;
    margin: 0;
`
const PositionSearch = styled.div`
    display: ${({isBar}) => isBar ? 'flex' : 'center'};
    flex: auto;
    margin-top: 50px;
    margin-right: 0px;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
    
`

const InputSearch = styled.input`
    width: 140px;
    height: 18px;
    margin-left: 5px;
    margin-bottom: 10px;
    border-radius: 8px 0 0 8px;
    display: ${({isBar}) => isBar ? '' : 'none'};
`

const PositionHome = styled.div`
    width: 100%;
    display: ${({isBar}) => isBar ? 'flex' : 'center'};
    flex: auto;
    margin-right: 0px;
    margin-top: 0px;
    color: white;
    cursor: pointer;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
`

const SpanPosition = styled.div`
    margin-left: 10px;
    margin-top: 3px;
    display: ${({isBar}) => isBar ? '' : 'none'};
    
`
const PositionClient = styled.div`
    width: 100%;
    display: ${({isBar}) => isBar ? 'flex' : 'center'};
    flex: auto;
    margin-top: 0px;
    color: white;
    cursor: pointer;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
`

const PositionSubject = styled.div`
    width: 100%;
    display: ${({isBar}) => isBar ? 'flex' : 'center'};
    flex: auto;
    cursor: pointer;
    margin-bottom: 0px;
    color: white;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
`
const PositionPlanner = styled.div`
    width: 100%;
    display: ${({isBar}) => isBar ? 'flex' : 'center'};
    flex: auto;
    cursor: pointer;
    margin-bottom: 0px;
    color: white;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
`
const PositionRemark = styled.div`
    width: 100%;
    display: ${({isBar}) => isBar ? 'flex' : 'center'};
    flex: auto;
    cursor: pointer;
    margin-bottom: 180px;
    color: white;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
`

const PositionLogout = styled.div`
    width: 100%;
    display: ${({isBar}) => isBar ? 'flex' : 'center'};
    flex: auto;
    cursor: pointer;
    margin-bottom: 10px;
    color: white;
    :hover{
        transition: 1s;
        background-color: #E41165;
    }
`

export const Img = styled.img`
    width: ${({isBar}) => isBar ? '70px' : '30px'};
    height: ${({isBar}) => isBar ? '70px' : '30px'};
    margin-top: 25px;

`
export const ImgLogo = styled.img`
    width: ${({isBar}) => isBar ? '90px' : '50px'};
    height: ${({isBar}) => isBar ? '90px' : '50px'};
    margin-top: 5px;

`

export {
    Side,
    PositionHide,
    PositionDots,
    Dot,
    Name,
    Email,
    PositionSearch,
    InputSearch,
    PositionHome,
    SpanPosition,
    PositionClient,
    PositionSubject,
    PositionPlanner,
    PositionRemark,
    PositionLogout,
}
