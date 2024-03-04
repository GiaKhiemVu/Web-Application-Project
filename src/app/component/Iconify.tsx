import { Icon } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';
import { IconifyIcon } from '@iconify/react/dist/offline';

interface IconifyProps extends BoxProps {
  icon: string | IconifyIcon;
}

const Iconify: React.FC<IconifyProps> = ({ icon, sx, ...other }) => {
  return <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', ...sx }} {...other}><Icon icon={icon} /></Box>;
};

export default Iconify;