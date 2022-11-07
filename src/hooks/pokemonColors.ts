export function usePokemonColor(color: string) {
  switch (color) {
    case 'black':
      return {
        colors: {
          primary: '#4C4C4C',
          secondary: '#8A8A8A',
          support: '#302F2F'
        }
      }

    case 'blue':
      return {
        colors: {
          primary: '#77BDFE',
          secondary: '#A8D5FF',
          support: '#5AA2E5'
        }
      }

    case 'brown':
      return {
        colors: {
          primary: '#583E3E',
          secondary: '#544A4A',
          support: '#5C3232'
        }
      }

    case 'gray':
      return {
        colors: {
          primary: '#85929E',
          secondary: '#AEB6BF',
          support: '#5D6D7E'
        }
      }

    case 'green':
      return {
        colors: {
          primary: '#48D0B0',
          secondary: '#71E5C9',
          support: '#45C0A3'
        }
      }

    case 'pink':
      return {
        colors: {
          primary: '#FF97EB',
          secondary: '#FDB8EF',
          support: '#FF79E5'
        }
      }

    case 'purple':
      return {
        colors: {
          primary: '#BB8FCE',
          secondary: '#D2B4DE',
          support: '#A569BD'
        }
      }

    case 'red':
      return {
        colors: {
          primary: '#FB6C6C',
          secondary: '#FEA1A1',
          support: '#EA6464'
        }
      }

    case 'white':
      return {
        colors: {
          primary: '#E9E9E9',
          secondary: '#F2F4F5',
          support: '#C8C8C8'
        }
      }

    case 'yellow':
      return {
        colors: {
          primary: '#F7DC6F',
          secondary: '#F9E79F',
          support: '#F4D03F'
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