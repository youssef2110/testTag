import styled from "styled-components";

export const ContainerOther = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.active ? "flex-start;" : "center;"}
    width: 100%;
    max-width: 750px;
    margin: ${props => props.active ? "50px auto;" : "0px auto;"}
    @media (max-width: 1024px) {
        align-items : ${props => props.active ? "center" : "flex-start"}
        margin: ${props => props.active ? "10px auto;" : "0px auto;"}
    }
`;

export const ButtonNext = styled.button`
    padding : 10px 0px;
    background: #FFFFFF;
    border: 1.5px solid #608FF5;
    color: #608FF5;
    transition : 0.5s;
    font-size: 20px;
    width : ${props => props.active ? "550px;" : "100%;"}
    margin : ${props => props.active ? "30px 0px 0px;" : "30px auto 0px;"}
    &:hover, &:focus, &:active{
        background: #608FF5;
        color: #FFFFFF;
        border: 1.5px solid #608FF5;
        outline: none;
    }
    @media (max-width: 1250px) {
        width: 100%;
    }
`;
