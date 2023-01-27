import styled,{css} from "styled-components";

export const Container = styled.div`
  
  ${(props)=>{
        switch(props.$mode){
            case true:
                return css`
                    display: flex;
                    position:  fixed;
                    flex-direction: column;
                    inset:  8% 80% 0% 0;
                    background-color: #1E2222; 
                    
                    

            
            `;
            default:
                return css`
                    display: flex;
                    position:  fixed;
                    flex-direction: column;
                    inset:  8% 95% 0% 0;
                    background-color: #1E2222; 
                    
                
                `; 
        }
    }}
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow:  0.35em 0.35em 0.75em black;
`;

export const Icons = styled.img`
  
    height: 30px;
    width: 30px;
    margin-left: 30%;
    margin-right: 15px;
    
  `;

export const DivOpenClose = styled.div`
  
  ${(props)=>{switch(props.$mode){
            case true:
                return css`
                     right: 0;
                     position:absolute;
                     margin-right: 15px;
                    
                `;
            default:
                return css`
                    margin-left: auto;
                    margin-right: auto; 
                    
                `; 
        }
    }}
    
    
`;



export const Li = styled.li`
   
   display: flex;
   margin-left: 0;
   margin-bottom: 10px;
   cursor: pointer;
   &:hover {
    background-color: #E41165;
    
  }
  `;

export const Logo = styled.img`
  
  ${(props)=>{
        switch(props.$mode){
            case true:
                return css`
                    height: 90px;
                    width: 90px;
                    
                `;
            default:
                return css`
                   height: 60px;
                   width: 60px;  
                   

                `; 
        }
    }}
   
  
   
  `;

export const PhotoUser = styled.img`
  
  ${(props)=>{
        switch(props.$mode){
            case true:
                return css`
                    height: 100px;
                    width: 100px;
                `;
            default:
                return css`
                   height: 60px;
                   width: 60px;  

                `; 
        }
    }}
    margin-left: auto;
    margin-right: auto;
   
  `;
  export const DivLogo = styled.div`
   margin-left: auto;
   margin-right: auto;
    
`;
export const DivUserP = styled.div`
  margin-left: auto;
  margin-right: auto;
    
`;
export const NameUser = styled.p`
  
    font-size: 15px bold;
    color: #ffffff;
   
    &:hover {
    color: #c5c2c2ff;
  }

`;
export const Ul = styled.ul`
  
   margin-top: 35px;
  

`;
export const PIcons = styled.ul`
  
   margin-left: 0;
   margin-right: auto;
   color: white;
   &:hover {
    color: #969393;
   }

`;
export const IdEmail = styled.p`
  
margin-left: 0;
margin-right: auto;
color: white;
font-size: 8px;


`;


