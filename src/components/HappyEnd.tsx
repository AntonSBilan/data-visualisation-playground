import {Done} from '@mui/icons-material';
import styles from '@/styles/main.module.css';
import {Typography} from '@mui/material';
import React from 'react';

export const HappyEnd = () => {
  return <>
    <Typography className={styles.formTypography} variant="h2" align="center" component="h2">
            Form successfully submitted
    </Typography>
    <div className={styles.finalIconWrapper}>
      <Done color="success" fontSize="large" sx={{width: '50%', height: '50%'}}/>
    </div>
  </>;
};
