import styled from "styled-components";

const PrimaryButton = styled.button`
  width: 100%;
  background-color: #124af4;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  :hover{
    background-color:#ffdc1c;
    cursor:pointer;
    color:#124af4;
  }
  border-radius: 5px;
  transition: background 200ms ease-out;


`;

export default PrimaryButton;
