import styled from 'styled-components'


export const StatSection = styled.section`
background-color: gray;
width: 300px;
border: 2px;
border-style: ridge;
border-color: gray;
margin-top:50px;

.title{
    text-align: center;
}
`

export const StatsList = styled.ul`
padding: 0;
margin: 0;
height: 80px;

list-style: none;
display: flex;
align-items: center;
justify-content: space-around;
background-color: lightgray;
`

export const StatsLi = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px;
border-style: ridge;
border-color: gray;
width: 100%;
height: 100%;

`