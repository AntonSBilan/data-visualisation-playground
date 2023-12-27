import React, {useState} from 'react';
import {Grid, Slider, Typography} from '@mui/material';
import {librariesInformation} from '@/utils/librariesInfo';
import LibraryInfo from '@/components/LibraryInfo';

export default function Libraries() {
  const [filterCustomisation, setFilterCustomisation] = useState(0);
  const [filterTypes, setFilterTypes] = useState(0);
  const [filterPopularity, setFilterPopularity] = useState(0);
  const [filterEase, setFilterEase] = useState(0);
  const [filterAnimation, setFilterAnimation] = useState(0);
  const [filterInteraction, setFilterInteraction] = useState(0);

  return <div>
    <Typography variant="h5" style={{textAlign: 'center'}} component='h1'>Supported Libraries</Typography>
    <Grid container spacing={5} style={{marginTop: '30px', marginBottom: '30px'}}>
      <Grid item xs={4}>
        <div>
          <Typography>Customisation Level</Typography>
          <Slider
            aria-label="Complexity"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            onChange={(e, v) => setFilterCustomisation(v as number)}
            marks
            color="secondary"
            min={0}
            max={5}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <Typography>Supported Types of Visualisation</Typography>
          <Slider
            aria-label="Types"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            onChange={(e, v) => setFilterTypes(v as number)}
            marks
            color="secondary"
            min={0}
            max={5}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <Typography>Popularity</Typography>
          <Slider
            aria-label="Popularity"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            onChange={(e, v) => setFilterPopularity(v as number)}
            marks
            color="secondary"
            min={0}
            max={5}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <Typography>Ease of Use</Typography>
          <Slider
            aria-label="Ease"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            onChange={(e, v) => setFilterEase(v as number)}
            marks
            color="secondary"
            min={0}
            max={5}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <Typography>Support of Animation</Typography>
          <Slider
            aria-label="Animation"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            color="secondary"
            onChange={(e, v) => setFilterAnimation(v as number)}
            marks
            min={0}
            max={5}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div>
          <Typography>Support of User Interaction</Typography>
          <Slider
            aria-label="Interaction"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            color="secondary"
            onChange={(e, v) => setFilterInteraction(v as number)}
            marks
            min={0}
            max={5}
          />
        </div>
      </Grid>
    </Grid>
    {librariesInformation
      .filter(l => {
        const customisationRank = l.rankings.find(r => r.name === 'Customization Level')?.rank ?? 0;
        const typesRank = l.rankings.find(r => r.name === 'Supported Types of Visualisation')?.rank ?? 0;
        const popularityRank = l.rankings.find(r => r.name === 'Popularity')?.rank ?? 0;
        const easeRank = l.rankings.find(r => r.name === 'Ease of Use')?.rank ?? 0;
        const animationRank = l.rankings.find(r => r.name === 'Support of Animation')?.rank ?? 0;
        const interactionRank = l.rankings.find(r => r.name === 'Support of User Interaction')?.rank ?? 0;

        return (customisationRank >= filterCustomisation)
          && (typesRank >= filterTypes)
          && (popularityRank >= filterPopularity)
          && (easeRank >= filterEase)
          && (animationRank >= filterAnimation)
          && (interactionRank >= filterInteraction);
      })
      .map((l) => {
        console.log(l.rankings, librariesInformation);
        return <LibraryInfo key={l.name} {...l} />;
      })}
  </div>;
}
