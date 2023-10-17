import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 40px;
  padding-top: 20px;
  background-color: aquamarine;
  border: 4px solid aqua;
  border-radius: 4px;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const ProfilePhoto = styled.img`
  border-radius: 50%;
  background-color: blanchedalmond;
`;
export const ProfileName = styled.h1`
  margin: 0;
`;
export const ProfileInfoItem = styled.p`
  margin: 0;
  color: #4a524c;
`;
export const ProfileStatistic = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ProfileStatisticItem = styled.li`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  background-color: #bdeaf2;
  border: 1px solid #a2d7e0;
`;
