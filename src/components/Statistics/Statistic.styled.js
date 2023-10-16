import styled from "styled-components";

const getBackgroundColor = ({ label }) => {
    switch (label) {
      case '.docx':
        return "#eff24b";
      case '.pdf':
        return "#038225";
      case '.mp3':
        return "#37c8de";
        case '.psd':
            return "#f268d7";
      default:
        return null;
    }
  };

export const Container = styled.div`
width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 20px;
  padding: 50px 0;
background-color: azure;
border: 2px solid aqua;
border-radius: 4px;
`
export const StatisticWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
list-style: none;
margin: 0;
padding: 0;
`
export const StatisticItems = styled.li`
width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
padding: 10px 0;
background-color: ${getBackgroundColor};
border: 1px solid #a2d7e0;
`