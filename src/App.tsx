import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MatchCard, { Match } from './components/matchCard/ui';
import { styled } from '@mui/material/styles';

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  overflowY: 'scroll',
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center',
  background: 'linear-gradient(90deg, #01ad87 0%, #00a2cf 100%)'
}))

function App() {
  const [matches, setMatches] = useState<Match[] | []>([])
  const [offset, setOffset] = useState<number>(0)

  async function fetchData() {
    const {data}: any = await axios.get(`https://footballista.ru/api/seasons/5099/calendar_paginated?limit=10&offset=${offset}`)
    setMatches((prevState) => [...prevState, ...data.items])
    setOffset((prevState) => prevState + 10)
  }

  useEffect(() => {
    fetchData()
  })

  const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = (e.target as HTMLElement).scrollHeight - (e.target as HTMLElement).scrollTop === (e.target as HTMLElement).clientHeight;
    if (bottom) {
      fetchData()
    }
  }

  if (!matches.length) {
    return (
      <Container sx={{ justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    )
  }
  
  return (
    <Container onScroll={onScrollHandler}>
      {matches.map(match => {
        return (
          <div key={Date.parse(match.date.toString())}>
            <MatchCard match={match}/>
          </div>
        )
      })}
    </Container>
  );
}

export default App;
