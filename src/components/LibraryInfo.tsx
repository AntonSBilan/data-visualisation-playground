import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Button, Grid, Rating, Tooltip, Typography} from '@mui/material';
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material';

export default function LibraryInfo(props: {
  name: string;
  description: string;
  documentationLink: string;
  rankings: Array<{
    name: string;
    description: string;
    rank: number;
  }>
}) {
  console.log(props.rankings);
  return <div style={{margin: '10px 0'}}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="caption">{props.description}</Typography>
        <Grid container spacing={2}>
          {props.rankings.map(r => <Grid key={r.name} item xs={4} style={{margin: '5px 0'}}>
            <Tooltip title={r.description}>
              <div>
                <Typography variant="body1" component="legend">{r.name}</Typography>
                <Rating name="read-only" value={r.rank} readOnly />
              </div>
            </Tooltip>
          </Grid>)}
        </Grid>
        <Button style={{marginTop: '20px'}} variant="outlined" href={props.documentationLink} target="_blank">Documentation Link</Button>
      </AccordionDetails>
    </Accordion>
  </div>;
}
