import {Container, ProfileInfo, ProfileStatistic, ProfileStatisticItem, ProfilePhoto, ProfileName, ProfileInfoItem} from '../Profile/Profiled.styled'

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <ProfileInfo>
        <ProfilePhoto src={avatar} alt="User avatar" width={200} height={200}/>
        <ProfileName>{username}</ProfileName>
        <ProfileInfoItem>&#64;{tag}</ProfileInfoItem>
        <ProfileInfoItem>{location}</ProfileInfoItem>
      </ProfileInfo>

      <ProfileStatistic>
        <ProfileStatisticItem>
          <span><b>Followers</b></span>
          <span>{followers}</span>
        </ProfileStatisticItem>
        <ProfileStatisticItem>
          <span><b>Views</b></span>
          <span>{views}</span>
        </ProfileStatisticItem>
        <ProfileStatisticItem>
          <span><b>Likes</b></span>
          <span>{likes}</span>
        </ProfileStatisticItem>
      </ProfileStatistic>
    </Container>
  );
};
