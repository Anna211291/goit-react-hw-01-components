import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const getStatusColor = ({ $status }) => {
  return $status ? 'green' : 'red';
};
export const FriendsItemWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 40px;
  padding: 8px 16px;
  border: 3px solid ${getRandomHexColor};
  border-radius: 20px;
  box-shadow: 5px 5px 5px;
  font-size: 18px;
`;
export const FriendsActivity = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid azure;
  background-color: ${getStatusColor};
  display: flex;
  margin: auto 0;
`;
