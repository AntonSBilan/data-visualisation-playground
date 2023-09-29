import React, {useEffect, useState} from 'react';
import {Editor} from '@monaco-editor/react';
import {editor} from 'monaco-editor';
import {Button} from '@mui/material';
import styles from '@/styles/main.module.css';
import Select from '@/components/Select';
import {LibraryEnum, supportedLibraries, VisualisationTypeEnum} from '@/types';
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;
import {getDefaultCode} from '@/utils/visualisation';

export function CodeView(props: {
  onSubmit: (code: string, library: LibraryEnum) => Promise<void>,
}) {
  const [editorRef, setEditorRef] = useState<IStandaloneCodeEditor | null>(null);
  const [selectedLibrary, setSelectedLibrary] = useState<LibraryEnum>(supportedLibraries[0].type);
  const [availableVisualisations, setAvailableVisualisations] = useState<typeof supportedLibraries[number]['visualisations']>(supportedLibraries[0].visualisations);
  const [selectedVisualisation, setSelectedVisualisation] = useState<VisualisationTypeEnum>(VisualisationTypeEnum.BAR_CHART);
  const [defaultCode] = useState<string>(getDefaultCode(selectedLibrary, selectedVisualisation) ?? '');

  const defaultLibraryListIndex = supportedLibraries?.findIndex(item => item.type === selectedLibrary);
  const defaultVisualisationListIndex = availableVisualisations?.findIndex(item => item.type === selectedVisualisation);

  function handleEditorDidMount(editor: IStandaloneCodeEditor) {
    setEditorRef(editor);
  }

  function updateVis(code?: string, library?: LibraryEnum) {
    if (editorRef?.getValue()) {
      props.onSubmit(code || editorRef.getValue(), library || selectedLibrary);
    }
  }

  const onLibraryChange = (selected: typeof supportedLibraries[number]) => {
    setSelectedLibrary(selected.type);
    setAvailableVisualisations(selected.visualisations);
    const newVisType =
      selected?.visualisations?.find(item => item.type === selectedVisualisation)
      ?? selected.visualisations[0];
    setSelectedVisualisation(newVisType?.type);
    const code = getDefaultCode(selected.type, newVisType.type);
    editorRef?.setValue(code ?? '');
    updateVis(code ?? '', selected.type);
  };

  const onVisualisationChange = (selected: typeof availableVisualisations[number]) => {
    setSelectedVisualisation(selected.type);
    const code = getDefaultCode(selectedLibrary, selected.type);
    editorRef?.setValue(code ?? '');
    updateVis(code ?? '');
  };

  useEffect(() => {
    updateVis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!editorRef]);

  return (
    <>
      <div className={styles.editorButtons}>
        <Select defaultIndexValue={defaultLibraryListIndex} name="library" label="Library" list={supportedLibraries} onSelect={onLibraryChange}/>
        <Select defaultIndexValue={defaultVisualisationListIndex} name="visualisation" label="Visualisation" list={availableVisualisations} onSelect={onVisualisationChange}/>
        <Button onClick={() => updateVis()}
          style={{marginLeft: 'auto'}}
          color="success"
          variant="contained"
          size="small">UPDATE</Button>
      </div>
      <Editor
        className={styles.editor}
        height="49%"
        defaultLanguage="javascript"
        defaultValue={defaultCode}
        onMount={handleEditorDidMount}
      />
    </>
  );
}
