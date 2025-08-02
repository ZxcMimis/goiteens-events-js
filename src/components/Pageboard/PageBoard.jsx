import { Event } from "../Events/Events.jsx"

import { List } from "./PageBoard.js"
import { Title } from "./PageBoard.js"

export const PageBoard = ({ data }) => {
    return (
        <section>
            <Title>24th Core Worlds Coalition Conference</Title>
            <List>
                {data.map(eventData => <Event key={eventData.id} name={eventData.name} start={eventData.time.start} end={eventData.time.end} location={eventData.location} speaker={eventData.speaker} />)}
            </List>
        </section>
    )
}