import styled from "styled-components";

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
    background: #FFFFFF;
    border: 1.5px solid #ACACAC;
    color: #ACACAC;
    transition : 0.5s;
    font-size: 17px;
    width : 150px;
    &:hover, &:focus, &:active{
        background: #FFFFFF;
        color: #608FF5;
        border: 1.5px solid #608FF5;
        outline: none;
    }
    @media (max-width: 768px) {
        margin: 0px;
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
    &:hover, &:focus, &:active{
        background: none;
        border: none;
        outline: none;
    }
    @media (max-width: 768px) {
        padding : 0px;
    }
`;