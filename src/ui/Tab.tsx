import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { textMapping } from '../data/preLoad';
import AccountMenu from './AccountMenu';

function Tab() {
  return (
<React.Fragment>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
            <Typography>{textMapping.header}</Typography>
        </Box>

        <Stack direction="row" spacing={2}>
            <Typography>{textMapping.home}</Typography>
            <Typography>{textMapping.tracker}</Typography>
            <Typography>{textMapping.adminpanel}</Typography> 
            <AccountMenu />
        </Stack>
    </Box>
</React.Fragment>

  )
}

export default Tab