import React, {Fragment, useState} from 'react';
import Divider from '@mui/material/Divider';
import Visualisation from '@/components/Visualisation';


export default function Visualisations() {
  const [openedViews, setOpenedViews] = useState<number[]>([1]);

  const closeViewFn = (id: number) => () => {
    setOpenedViews(openedViews.filter(i => i !== id));
  };

  const openViewFn = () => () => {
    setOpenedViews([...openedViews, Math.max(...openedViews) + 1]);
  };

  return openedViews.map((id, i, arr) => {
    return <Fragment key={`${id}`}>
      {i != 0 && <Divider style={{margin: '0 10px'}} orientation="vertical" variant="fullWidth" />}
      <Visualisation
        id={id}
        numberOfViews={arr.length}
        closeView={arr.length > 1 ? closeViewFn(id) : undefined}
        splitView={arr.length > 1 ? undefined : openViewFn()}
      />
    </Fragment>;
  });
}
