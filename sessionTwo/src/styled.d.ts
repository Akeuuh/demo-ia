import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      warning: string;
      background: string;
      surface: string;
      text: string;
      textMuted: string;
    };
    fonts: {
      main: string;
      code: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  }
}
