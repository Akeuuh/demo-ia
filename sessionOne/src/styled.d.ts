import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      text: string;
    };
    fonts: {
      main: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
