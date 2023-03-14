import MatchInfo, { Stadium } from "../matchInfo/ui";
import TeamInfo, { CardTeamType, Team } from "../teamInfo/ui";
import { styled } from '@mui/material/styles';
import { Card, Typography, Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const StylesCard = styled(Card)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    maxWidth: '900px', 
    width: 'calc(100vw - 50px)', 
    height: '130px', 
    minHeight: '130px', 
    padding: theme.spacing(1), 
    marginTop: theme.spacing(0), 
    background: 'rgba(0, 0, 0, 0.3)', 
    color: '#fff',
    '@media screen and (max-width: 764px)': {
        height: 'calc(100vh - 50px)',
        flexDirection: 'column',
        justifyContent: 'space-around',
        textAlign: 'center'
    }
}))

export interface Match {
    tourNumber: number
    teamAway: Team
    teamHome: Team
    scoreFtHome: number
    scoreFtAway: number
    date: Date
    stadium: Stadium | undefined
}

interface MatchCardProps {
    match: Match
}

function MatchCard({ match }: MatchCardProps) {
    const isMobileResolution = useMediaQuery('(max-width:764px)');

    if (isMobileResolution) {
        return (
            <StylesCard>
                <TeamInfo 
                    type={CardTeamType.home} 
                    team={match.teamHome} 
                    score={match.scoreFtHome}
                />
                <Typography variant="h4">VS</Typography>
                <TeamInfo 
                    type={CardTeamType.away} 
                    team={match.teamAway} 
                    score={match.scoreFtAway}
                />
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.7)'}}/>
                <MatchInfo 
                    date={new Date(match.date)} 
                    tourNumber={match.tourNumber} 
                    stadium={match.stadium} 
                />
            </StylesCard>
        )
    }

    return (
        <StylesCard>
            <TeamInfo 
                type={CardTeamType.home} 
                team={match.teamHome} 
                score={match.scoreFtHome}
            />
            <MatchInfo 
                date={new Date(match.date)} 
                tourNumber={match.tourNumber} 
                stadium={match.stadium} 
            />
            <TeamInfo 
                type={CardTeamType.away} 
                team={match.teamAway} 
                score={match.scoreFtAway}
            />
        </StylesCard>
    );
}

export default MatchCard