// theme.ts
// Uygulamanın aydınlık ve karanlık temalarını tanımlar
export const lightTheme = {
  colors: {
    primary: '#6200ee',
    background: '#ffffff',
    text: '#000000',
    cardBackground: '#f0f0f0',
    cardText: '#000000',
    border: '#cccccc',
    textOnPrimary: '#ffffff',
  },
};

export const darkTheme = {
  colors: {
    primary: '#bb86fc',
    background: '#121212',
    text: '#ffffff',
    cardBackground: '#1e1e1e',
    cardText: '#ffffff',
    border: '#333333',
    textOnPrimary: '#000000',
  },
};

export type Theme = typeof lightTheme;
