import { Box, Grid, Typography } from "@mui/material";

interface INoDataFoundProps {
  title?: string;
  message?: string;
}

const NoDataFound = ({ title = 'No Data Found', message = '' }: INoDataFoundProps) => (
  <Box className='min-h-[400px] w-full'>
    <Grid direction={'row'} className='items-center max-w-md px-6'>
      {/* <Icon
        as={SlashIcon}
        className={
          'text-typography-400 mb-[0.5rem] transition-all h-16 w-16 duration-500 ease-in-out'
        }
      /> */}
      <Typography className='text-md font-semibold text-gray-500 text-center'>{title}</Typography>
      <Typography className='text-sm text-gray-300 text-center'>{message}</Typography>
    </Grid>
  </Box>
);

export default NoDataFound;
