import { FriendsItemWrapper, FriendsActivity } from './FrendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendsItemWrapper>
      <FriendsActivity $status={isOnline}></FriendsActivity>
      <img src={avatar} alt="User avatar" width="54" />
      <p>
        <b>{name}</b>
      </p>
    </FriendsItemWrapper>
  );
};
