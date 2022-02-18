import styled from "styled-components";

export const ContainerOther = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width ? props.width : "fit-content"};
    margin: 0 auto;
    @media (max-width: 768px) {
        width: fit-content;
        padding : ${props => props.padding ? "0px 9px" : "0px"};
    }
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

export const ButtonActivate = styled.button`
    padding : 10px 0px;
    background: #FFFFFF;
    border: 1.5px solid #000000;
    color: #000000;
    transition : 0.5s;
    font-size: 20px;
    width : 500px;
    margin: 30px auto 20px;
    &:hover, &:focus, &:active{
        background: #000000;
        color: #FFFFFF;
        outline: none;
    }
    @media (max-width: 1550px) {
        width : 450px;
    }
    @media (max-width: 768px) {
        width : 100%;
    }
`;
export const ButtonScan = styled.button`
    padding : 10px 0px;
    background: #FFFFFF;
    border: none;
    outline: none;
    color: #608FF5;
    transition : 0.5s;
    font-size: 17px;
    margin: 10px auto 20px;
    &:hover, &:focus, &:active{
        border: none;
        outline: none;
    }
`;

export const TagCard = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 1s;
    border : ${props => props.active ? "1px solid #000000;" : "none;"}
    p{
        margin-top :5px;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
    }
    span{
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;        
        color: #608FF5;
        margin-bottom: 5px
    }
    button{
        width: 100%;
        outline: none;
        border: none;
        background: #000;
        padding: 10px;
        color: #fff;
        font-family: Inter;
        font-weight: 700;
        font-size: 16px;
        display : block;
        visibility: ${props => props.active ? "visible;" : "hidden;"}
    }
    &:hover{
        border : 1px solid #000000;
        button{
            display : block;
            visibility: visible;
        }
    }
    @media (max-width: 768px) {
        p{
            font-size: 14px;
        }
        span{
            font-size: 14px;        
        }
    }
`