import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RenderOptions, render } from '@testing-library/react-native';

import { CityProvider } from '@contexts/CityContext';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';
export { customRender as render, Providers };
