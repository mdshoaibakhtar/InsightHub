import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";

interface INoDataFoundProps {
  title?: string;
  message?: string;
}

const NoDataFound = ({ title = 'No Data Found', message = '' }: INoDataFoundProps) => (
  <Box className='min-h-[400px] w-full flex items-center justify-center'>
      <Box className='flex gap-2 justify-center items-center'>
        <FontAwesomeIcon icon={faBan} />
        <Typography className='text-md font-semibold text-gray-500 text-center'>{title}</Typography>
        <Typography className='text-sm text-gray-300 text-center'>{message}</Typography>
      </Box>
  </Box>
);

export default NoDataFound;
