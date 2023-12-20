import React, {ComponentProps, useRef} from 'react';
import {CodeView} from '@/components/CodeView';
import axios from 'axios';
import styles from '@/styles/main.module.css';
import {LibraryEnum} from '@/types';


export default function Visualisation(props: {
  id: number,
  numberOfViews: number,
  closeView: ComponentProps<typeof CodeView>['closeView'];
  splitView: ComponentProps<typeof CodeView>['splitView'];
}) {
  const {closeView, splitView, numberOfViews} = props;
  const iframeId = `iframe${props.id}`;
  const uuid = useRef<string>();
  const library = useRef<LibraryEnum>();
  const onCodeSubmit = async (code: string, selectedLibrary: LibraryEnum) => {
    const res = await axios.post(`/api/iframe?codeUuid=${uuid?.current}`, { code });
    uuid.current = res.data.codeUuid;
    library.current = selectedLibrary;
    if (document?.getElementById(iframeId)) {
      (document.getElementById(iframeId) as HTMLIFrameElement).src = `/api/iframe?codeUuid=${res.data?.codeUuid}&library=${library.current}`;
    }
  };

  return <div className={styles.sandboxWrapper}
    style={{width: numberOfViews > 1 ? '49%' : '100%', height: '100%', display: 'flex', justifyContent: 'space-between'}}>
    <div style={{height: '40%'}}>
      <iframe id={iframeId} style={{maxHeight: '100%', border: 0}} width="100%" height="100%"
        src={`/api/iframe?codeUuid=${uuid?.current}&library=${library.current}`}></iframe>
    </div>
    <CodeView
      closeView={closeView}
      splitView={splitView}
      onSubmit={onCodeSubmit}/>
  </div>;
}
