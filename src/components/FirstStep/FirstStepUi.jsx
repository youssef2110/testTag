import styled from "styled-components";

// UnderStep1 Styles 
export const PetCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 200px;
    margin: 0 auto 15px;
    background: #FFFFFF;
    transition : 0.5s;
    cursor : pointer;
    border: ${props => props.colorBorder ? "1.5px solid "+props.colorBorder : "1.5px solid #F1F4F4"};
    box-sizing: border-box;
    & > p{
        font-family: 'Inter', sans-serif;
        font-size: 30px;
        text-align: center;
        color: #000000;
    }
    @media (max-width: 1500px) {
        width : 180px;
        height: 140px;
    }
    @media (max-width: 1024px) {
        margin: 45px auto;
    }
    @media (max-height: 850px) and (max-width: 600px) {
        width : 150px;
        height: 100px;
        margin: 25px auto;
        & > p{
            font-size: 20px;
        }
    }

`;
export const ImagePet = styled.div`
    width: 140px;
    margin-top : -120px;
    margin-bottom : 20px;
    background : #fff;
    padding: 0px 15px;
    @media (max-width: 1500px) {
        margin-top : -80px;
        width: 110px;
    }
    @media (max-height: 850px) and (max-width: 500px) {
        margin-top : -30px;
        width: 90px;
    }
`;
export const ContainerOther = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width ? props.width : "fit-content"};
    margin: 0 auto;
`;

export const ButtonNext = styled.button`
    padding : 10px 0px;
    background: #FFFFFF;
    border: 1.5px solid #608FF5;
    color: #608FF5;
    transition : 0.5s;
    font-size: 20px;
    width : 650px;
    margin: 30px auto 0px;
    &:hover, &:focus, &:active{
        background: #608FF5;
        color: #FFFFFF;
        border: 1.5px solid #608FF5;
        outline: none;
    }
    @media (max-width: 1550px) {
        width : 450px;
    }
    @media (max-width: 768px) {
        width : 100%;
    }
`;

export const ButtonAdd = styled.button`
    padding : 10px 0px;
    display : ${props => props.type === 'desktop' ? 'block' : "none"};
    background: #FFFFFF;
    border: 1.5px solid #ACACAC;
    color: #ACACAC;
    transition : 0.5s;
    font-size: 17px;
    width : 100px;
    margin: 0px -104px 0px 10px;
    &:hover, &:focus, &:active{
        background: #FFFFFF;
        color: #608FF5;
        border: 1.5px solid #608FF5;
        outline: none;
    }
    @media (max-width: 768px) {
        margin: 0px;
        display : ${props => props.type === 'desktop' ? 'none' : "block"};
    }
`;
export const ButtonDelete = styled.button`
    padding : 10px 0px;
    background: none;
    border: none;
    color: #EB5757;
    transition : 0.5s;
    font-size: 17px;
    width : 100px;
    margin: 0px -104px 0px 10px;
    &:hover, &:focus, &:active{
        background: none;
        border: none;
        outline: none;
    }
    @media (max-width: 768px) {
        padding : 0px;
        margin: 0px 0px 20px 0px;
    }
`;