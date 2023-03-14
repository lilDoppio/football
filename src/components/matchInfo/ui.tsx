import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getCurrentDate, getCurrentTime } from './utils';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    width: '200px', 
    textAlign: 'center', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-around',
    '@media screen and (max-width: 764px)': {
        width: '100%', 
    }
}))

export interface Stadium {
    name: string
}
  
interface CradMatchProps {
    date: Date
    tourNumber: number
    stadium: Stadium | undefined
}
  
function MatchInfo({ date, tourNumber, stadium }: CradMatchProps): JSX.Element {
    const dateDay = getCurrentDate(date)
    const dateTime = getCurrentTime(date)
  
    return (
        <StyledBox>
            <Typography>
                {dateDay}
            </Typography>
            <Typography>
                {dateTime}
            </Typography>
            <Typography>              
                Номер тура: {tourNumber}
            </Typography>
            {stadium && <Typography>                  
                Стадион: {stadium.name}
            </Typography>}
        </StyledBox>  
    )
}

export default MatchInfo