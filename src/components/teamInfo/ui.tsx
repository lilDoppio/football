import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { getTeamLogoUrl } from './utils';

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    '& img': {
        width: 80
    },
    '@media screen and (max-width: 764px)': {
        flexDirection: 'column',
        alignItems: 'center',
        '& img': {
            width: '40%'
        }
    }
}))

const AdditionalInfo = styled(Box)(({ theme }) => ({
    width: '200px', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-around'
}))

export interface Team {
    name: string
    logo: string
    logoId: number
}

export enum CardTeamType {
    home,
    away
}
  
interface CradTeamPrps {
    type: CardTeamType
    team: Team
    score: number
}

function TeamInfo({ type, team, score }: CradTeamPrps): JSX.Element {
    return (
      <StyledBox>
        {type === CardTeamType.home && <CardMedia
          component="img"
          image={getTeamLogoUrl(team.logo, team.logoId)}
          alt={team.name}
        />}
        <AdditionalInfo>
          <Typography variant="h6">{team.name}</Typography>
          <Typography variant="h5">Счет: {score}</Typography>
        </AdditionalInfo>
        {type === CardTeamType.away && <CardMedia
          component="img"
          image={getTeamLogoUrl(team.logo, team.logoId)}
          alt={team.name}
        />}
      </StyledBox>    
    )
}

export default TeamInfo