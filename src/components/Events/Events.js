import styled from 'styled-components';

export const Item = styled.li`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    width: 350px;
    background-color: rgba(238, 180, 132, 1);
    border: 5px solid rgba(177, 122, 5, 1);
`
export const Text = styled.p`
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 0.5px;
    margin: 0;
    font-weight: normal;
`
export const TitleCard = styled.p`
    font-size: 25px;
    font-weight: normal;
`
export const SmallList = styled.ul`
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: start;
    padding: 0;
`
export const SmallListItem = styled.li`
    display: flex;
    align-items: center;
    gap:10px;
`