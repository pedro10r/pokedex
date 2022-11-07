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
  const { colors } = useTheme();

  switch (color) {
    case 'black':
      return {
        colors: {
          primary: colors.black_100,
          secondary: colors.black_200,
          support: colors.black_300
        }
      }

    case 'blue':
      return {
        colors: {
          primary: colors.blue_100,
          secondary: colors.blue_200,
          support: colors.blue_300
        }
      }

    case 'brown':
      return {
        colors: {
          primary: colors.brown_100,
          secondary: colors.brown_200,
          support: colors.brown_300
        }
      }

    case 'gray':
      return {
        colors: {
          primary: colors.gray_100,
          secondary: colors.gray_200,
          support: colors.gray_300
        }
      }

    case 'green':
      return {
        colors: {
          primary: colors.green_100,
          secondary: colors.green_200,
          support: colors.green_300
        }
      }

    case 'pink':
      return {
        colors: {
          primary: colors.pink_100,
          secondary: colors.pink_200,
          support: colors.pink_300,
        }
      }

    case 'purple':
      return {
        colors: {
          primary: colors.purple_100,
          secondary: colors.purple_200,
          support: colors.purple_300
        }
      }

    case 'red':
      return {
        colors: {
          primary: colors.red_100,
          secondary: colors.red_200,
          support: colors.red_300,
        }
      }

    case 'white':
      return {
        colors: {
          primary: colors.white_100,
          secondary: colors.white_200,
          support: colors.white_300
        }
      }

    case 'yellow':
      return {
        colors: {
          primary: colors.yellow_100,
          secondary: colors.yellow_200,
          support: colors.yellow_300,
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