import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import createEmotionCache from '../utils/createEmotionCache';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {CustomTheme} from '@/components/Theme';
import React from 'react';
import PageWrapper from '@/components/PageWrapper';

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppProps & {emotionCache?: EmotionCache}) {
  return <CacheProvider value={emotionCache}>
    <CustomTheme>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </CustomTheme>
  </CacheProvider>;
}
