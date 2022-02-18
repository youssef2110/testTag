import styled from "styled-components";

export const ProgressBarUi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
  &:before {
    content: '';
    background: #ACACAC;
    height: 60%;
    left: 13%;
    top: 20%;
    width: 3px;
    display: block;
    position: absolute;
    z-index: -1;
  }
  &:after {
    content: '';
    background: #608FF5;
    transition: 1s;
    height: ${props => props.pourcentage ? props.pourcentage+"%" : "0%"};
    left: 13%;
    top: 20%;
    width: 3px;
    display: block;
    position: absolute;
    z-index: -1;
  }
  @media (max-width: 1024px) {
    flex-direction: row;
    width : 100%;
    &:before {
      content: '';
      height: 3px;
      top: 30%;
      left: 15%;
      width: 70%;
    }
    &:after {
      content: '';
      height: 3px;
      width: ${props => props.pourcentage ? props.pourcentage+"%" : "0%"};
      top: 29%;
      left: 15%;
    }
  }
  @media (max-width: 768px) {
    width : 100%;
    &:before {
      content: '';
      top: 24%;
    }
    &:after {
      content: '';
      width: ${props => props.pourcentage ? props.pourcentage+"%" : "0%"};
      top: 24%;
    }
  }
  @media (max-width: 320px) {
    width : 100%;
    &:before {
      content: '';
      top: 23%;
    }
    &:after {
      content: '';
      width: ${props => props.pourcentage ? props.pourcentage+"%" : "0%"};
      top: 23%;
    }
  }
  @media (max-height: 740px){
    flex-direction: row;
    width : 100%;
    &:before {
      content: '';
      height: 3px;
      top: 24%;
      left: 15%;
      width: 70%;
    }
    &:after {
      content: '';
      height: 3px;
      width: ${props => props.pourcentage ? props.pourcentage+"%" : "0%"};
      top: 24%;
      left: 15%;
    }
  }
`;

export const ProgressPointUi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  color: ${props => props.colorText ? props.colorText : "#ACACAC"};
  background: ${props => props.background ? props.background : "#F1F4F4"};
  border-radius: 100px;
  border: ${props => props.border ? "2px solid "+props.border : "2px solid #ACACAC"};
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const ProgressPointInsideUi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  font-size : 20px;
  background: ${props => props.background ? props.background+ " content-box" : "#F1F4F4 content-box"};
  border-radius: 100px;
  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;

export const TitleStep = styled.p`
  margin-left: 10px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  margin-bottom : 0px;
  color: ${props => props.colorText ? props.colorText : "#ACACAC;"};
  @media (max-width: 768px) {
    margin-top : 10px;
    margin-left: 0px;
    font-size: 11px;
    text-align : center;
  }
`;