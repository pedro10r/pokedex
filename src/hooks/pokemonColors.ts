import { useTheme } from "styled-components"

/* 
  This function returns a dark color if the pokemon is based on the white color.
*/
export function isWhiteColor(color: string) {
  if (color === 'white') {
    return '#302F2F';
  }
}

/* 
  The return of the colors will always be those listed, 
  with a total of 10, and for each color, 3 colors are returned.
*/
export function usePokemonColor(color: string) {
  const theme = useTheme();

  switch (color) {
    case 'black':
      return {
        colors: {
          primary: theme?.colors?.black_100,
          secondary: theme?.colors?.black_200,
          support: theme?.colors?.black_300
        }
      }

    case 'blue':
      return {
        colors: {
          primary: theme?.colors?.blue_100,
          secondary: theme?.colors?.blue_200,
          support: theme?.colors?.blue_300
        }
      }

    case 'brown':
      return {
        colors: {
          primary: theme?.colors?.brown_100,
          secondary: theme?.colors?.brown_200,
          support: theme?.colors?.brown_300
        }
      }

    case 'gray':
      return {
        colors: {
          primary: theme?.colors?.gray_100,
          secondary: theme?.colors?.gray_200,
          support: theme?.colors?.gray_300
        }
      }

    case 'green':
      return {
        colors: {
          primary: theme?.colors?.green_100,
          secondary: theme?.colors?.green_200,
          support: theme?.colors?.green_300
        }
      }

    case 'pink':
      return {
        colors: {
          primary: theme?.colors?.pink_100,
          secondary: theme?.colors?.pink_200,
          support: theme?.colors?.pink_300,
        }
      }

    case 'purple':
      return {
        colors: {
          primary: theme?.colors?.purple_100,
          secondary: theme?.colors?.purple_200,
          support: theme?.colors?.purple_300
        }
      }

    case 'red':
      return {
        colors: {
          primary: theme?.colors?.red_100,
          secondary: theme?.colors?.red_200,
          support: theme?.colors?.red_300,
        }
      }

    case 'white':
      return {
        colors: {
          primary: theme?.colors?.white_100,
          secondary: theme?.colors?.white_200,
          support: theme?.colors?.white_300
        }
      }

    case 'yellow':
      return {
        colors: {
          primary: theme?.colors?.yellow_100,
          secondary: theme?.colors?.yellow_200,
          support: theme?.colors?.yellow_300,
        }
      }

    default:
      return {
        primary: 'transparent',
        secondary: 'transparent',
        support: 'transparent'
      }
  }
}