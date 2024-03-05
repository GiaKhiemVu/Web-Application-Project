import { Icon } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';
import { IconifyIcon } from '@iconify/react/dist/offline';

interface IconifyProps extends BoxProps {
  icon: string | IconifyIcon;
}

const Iconify: React.FC<IconifyProps> = ({ icon, sx, ...other }) => {
  return <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', ...sx }} {...other}><Icon icon={icon} /></Box>;
};

const FormIconify: React.FC<IconifyProps> = ({ icon, sx, ...other }) => {
  return (
    <Box 
      component="span" 
      sx={{border: 1, borderRadius:'50px', width: '35px', height: '35px',marginTop: '10px', marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', ...sx }} 
      {...other}
    >
        <Icon icon={icon} />
    </Box>
  )
}

export { Iconify, FormIconify};