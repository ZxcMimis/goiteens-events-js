

import { FaMapMarkerAlt, FaUserTie, FaRegClock } from 'react-icons/fa';

import { Item } from './Events';
import { Text } from './Events'
import { TitleCard } from './Events';
import { SmallList } from './Events';
import { SmallListItem } from './Events';


export const Event = ({ name, start, end, location, speaker }) => {
    return (
        <Item>
            <TitleCard>{name}</TitleCard>
            <Text> <FaMapMarkerAlt /> {location}</Text>
            <Text> <FaUserTie /> {speaker} </Text>
            <SmallList>
                <SmallListItem>
                    <span>
                        <FaRegClock />
                    </span>
                    <Text>{start}</Text>
                </SmallListItem>
                <SmallListItem>
                    <span>
                        🕒
                    </span>
                    <Text>{end}</Text>
                </SmallListItem>
            </SmallList>
        </Item>
    )
}