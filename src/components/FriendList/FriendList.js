import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { Container } from "./FriendList.styled"

export const FriendList = ({friends}) => {
    return (
        <Container>
            {friends.map(friend => (
                <li key={friend.id}>
<FriendListItem friend={friend}/></li>
        ))}
        </Container>
    )
}