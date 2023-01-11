import { useEffect } from 'react';
import { Theme } from '../context/ThremeContext';

export function changeCssRootVariables(theme: Theme) {
  const root = document.querySelector(':root') as HTMLElement;

  const components = [
    'body-background',
    'components-background',
    'border-bottom',
    'card-background',
    'card-shadow',
    'text-color',
  ];

  components.forEach((component) => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
  });
}
