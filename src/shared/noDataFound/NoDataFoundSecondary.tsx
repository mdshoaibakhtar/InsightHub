import { Grid, Typography } from "@mui/material";

interface INoDataFoundSecondaryProps {
  title?: string;
  message?: string;
}
const NoDataFoundSecondary = ({
  title = 'No Data Found',
  message = '',
}: INoDataFoundSecondaryProps) => (
  <Grid direction={'row'} className='justify-center items-center gap-1 p-4'>
    {/* <Icon
      as={SlashIcon}
      className={'text-typography-400 transition-all h-4 w-4 duration-500 ease-in-out'}
    /> */}
    <Typography className='text-sm font-semibold text-gray-500 text-center'>{title}</Typography>
    <Typography className='text-sm text-gray-300 text-center'>{message}</Typography>
  </Grid>
);

export default NoDataFoundSecondary;
