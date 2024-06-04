import styled from "styled-components";

export const NavbarMenu = styled.div`
    padding: 7px 10px;
    font-family: Poppins;
    color: ${(props) => (props.$selected ? "white" : "black")};
    background: ${(props) => (props.$selected ? "#E6A859" : " ")};
    cursor: pointer;
`;

export const NavConatiner = styled.div`
    display: flex;
    justify-content: end;
    padding: 20px 155px;
    gap: 6px;
    color: black;
`;

export const ImgWrapper = styled.img`
    width: 500px;
`;

export const HeaderContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
`;
export const HeaderTitle = styled.div`
    color: #534847;
    font-family: Raleway;
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 640px;
    margin-bottom: 40px;
`;
export const SubHeading = styled.div`
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 428.26px;
    color: #8d8180;
    margin-bottom: 68px;
`;

export const HeaderRight = styled.div`
    position: relative;
`;
export const HeaderLeft = styled.div`
    padding: 86px 27px;
`;
export const HeaderRightText = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    background: #f9f9f9;
    padding: 30px 95px;
    color: #534847;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`;
export const YellowLine = styled.div`
    color: #e2b84c;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 12px;
`;
export const Line = styled.div`
    width: 25px;
    height: 1px;
    background: #e2b84c;
`;

export const ArrowImg = styled.img`
    width: 12px;
`
export const SecTitle = styled.div`
    width: 340px;
    color: #534847;
    font-family: Raleway;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const Sec1Left = styled.div`
`
export const Sec1Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 63px;
    margin-top: 70px;
`
export const SecSubTitle = styled.div`
    width: 609px;
    color: #8D8180;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Sec2Up = styled.div`
    display: flex;
    justify-content: center;
    height: 618px;
    position: relative;
`
export const BackRight = styled.div`
    width: 1309px;
    height: 618px;
    background: #f9f9f9;
    position: absolute;
    z-index: 0;
    right: 0;
`
export const Sec2Texts = styled.div`
    display: flex;
    gap: 47px;
    flex-direction: column;
`
export const YellowButton = styled.button`
    padding: 12px 65px;
    background: #E6A859;
    width: fit-content;
    border: none;
    color: #fff;
`
export const Sec2Img = styled.img`
`

export const Sec2Down = styled.div`
    display: flex;
    justify-content: center;
    height: 618px;
    position: relative;
`
export const BackLeft = styled.div`
    width: 1309px;
    height: 618px;
    background: #f9f9f9;
    position: absolute;
    z-index: 0;
    left: 0;
`

export const Section = styled.div`
margin-top: 97px;
display: flex;
align-items: center;
gap: 97px;
text-align: center;
flex-direction: column;
`

export const SecTitle2 = styled.div`
    width: ${(props) =>props.$title2 ? "" : "263px"} ;
    /* width: 263px; */
    color: #534847;
    text-align: center;
    font-family: Raleway;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Imgs = styled.img`
`
export const SectionBox = styled.div`
    display: flex;
    gap: 162px;
`
export const SectionItem = styled.div`
    width: 213px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const ItemTitle = styled.div`
    padding: 0px 19px;
    color: #534847;
    text-align: center;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const ItemSubTitle = styled.div`
    color: #8D8180;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const ItemTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
    margin-top: 55px;
`

export const ImgBox = styled.div`
    display: flex;
    gap: 42px;
`
export const ImgItems = styled.div`
    position: relative;
    width: 284px;
    height: 334px;
`
export const ImgItemText = styled.div`
    position: absolute;
    bottom: 0px;
    width: 149px;
    height: 55px;
    background: #F9F9F9;
    padding: 12px 47px 12px 8px;
    text-align: left;
    color: #534847;
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const Section4Container = styled.div`
    margin-top: 143px;
    display: flex;
    text-align: center;
    gap: 64px;
    flex-direction: column;
    align-items: center;
`

export const Section5Container = styled.div`
    margin-top: 140px;
    display: flex;
    justify-content: center;
`
export const Sec5Top = styled.div`
    display: flex;
    gap: 285px;
    z-index: 1;
    margin-bottom: 58px;
`
export const Sec5Title = styled.div`
    color: #534847;
    font-family: Raleway;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 41px;
`
export const Sec5RightText = styled.div`
    display: flex;
    gap: 2px;
    flex-direction: column;
    padding: 30px 0px;
    color: #8D8180;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const Container5 = styled.div`
    z-index: 1;
    padding: 82px;
`
export const FooterContainer = styled.div`
    background: #282322;
    color: #fff;
    padding: 82px 0px 67px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FooterBox = styled.div`
    display: flex;
    gap: 165px;
    align-items: flex-start;
`
export const FooterItems = styled.div`
    display: flex;
`
export const FooterTitle = styled.div`
    margin-bottom: 57px;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
`
export const FooterTexts = styled.div`
    width: 317px;
    font-family: Poppins;
    font-size: 16px;
`

export const Button = styled.button`
    width: 100%;
    padding: 12px;
    font-family: Poppins;
    font-size: 16px;
    border: none;
    background: ${(props)=> props.$yellow ? "#E6A859":"#fff"};
    color: ${(props)=> props.$yellow ? "white":"#534847"};
`
export const ItemsButton = styled.div`  
    gap: 17px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    width: 286px;
    align-items: center;
    justify-content: center;
`

export const FooterIcons = styled.div`
    display: flex;
    gap: 30px;
`
export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const IconTexts = styled.div`
    font-family: Poppins;
    font-size: 16px;
    gap: 20px;
    display: flex;
    flex-direction: column;
`
export const FooterBottom = styled.div`
    margin-top: 100px;
    font-family: Poppins;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FooterMenu = styled.div`
    margin-top: 25px;
    display: flex;
    gap: 47px;
    color: rgba(255, 255, 255, 0.60);
`