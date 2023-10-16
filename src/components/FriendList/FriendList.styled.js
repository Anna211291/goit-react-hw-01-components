import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
export const Container = styled.ul`
width: 360px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  padding: 40px 20px;
  list-style: none;
background-color: azure;
border: 3px solid ${getRandomHexColor};
border-radius: 4px;
`