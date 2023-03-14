import axios from 'axios';
import { Match } from '../components/matchCard/ui';

type Data = {
    items: Match[]
}

type getMatchesResponse = {
    data: Data
}

export const getMatchesApi = async (offset: number) => {
    const { data }: getMatchesResponse = await axios.get(`https://footballista.ru/api/seasons/5099/calendar_paginated?limit=10&offset=${offset}`)
    return data.items
}