// styled.d.ts
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      background: string
      gray: string
      opacityBlack: string
   }
   spacing: {
    sm: string,
    md: string,
    lg: string
}
  }
}