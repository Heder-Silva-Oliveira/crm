import styled from  "styled-components"

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 162px;
    background: #1E2222;
    border-radius: 0px 8px 8px 0px;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
    position: static;
    
`;
export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    border: 2px solid red;
    background-color: #b0b0dd;
`;
export const Header = styled.header`
    position: relative;

`;
export const DivImg = styled.div`
    height: 150px;
    
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const Img = styled.img`
    height: 100px;
    top: 30px;
    position: absolute;
    

`;
export const Img2 = styled.img`
    width: 83;
    height: 83px;
    position: absolute;
    top: 150px; 

`;
export const P = styled.header`
    color: white;
    position: absolute;
    top: 230px;
    font-size: 14px;
`;
export const P1 = styled.header`
    color: white;
    position: absolute;
    font-size: 10px;
    top: 250px;
`;
export const Icon = styled.i`
    position: absolute;
    top: 0%;
    color: white;
    right: -45px;
    transform: translate(-50%);
    height: 50px;
    width: 50px;
    background: #1E2222;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 45%;
    font-size: 29px;

`;
export const MenuBar = styled.div`

    

`;
export const Menu = styled.div`

    

`;
export const MenuLinks = styled.ul`
    top: 300px;
    position: absolute;
    width: 162px;

    

`;
export const NavLink = styled.li`

    height: 30px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: white;
    border-radius: 6px;
    


`;
export const A = styled.a`
    height: 100%;
    display: flex;
    color: white;
    align-items: center;
    text-decoration: none;
    min-width: 60px;
    
`;

export const NavText = styled.span`
    color: white;
    height: 50px;
    width: 163px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transition: color 0.2s ease-in-out;
    font-size: 15px;
    border-radius: 6px;
    &:hover {
        background: #858589;
    }
`;


