import {StyleSheet} from 'react-native';

const smallFontSize= {
  fontSize: 10,
}
const mediumFontSize= {
  fontSize: 15,
}
const largeFontSize= {
  fontSize: 25,
}

export default StyleSheet.create({

  SMALL_BOLD_TEXT: {
    ...smallFontSize,
    fontFamily: 'Montserrat-Bold',
  },
  SMALL_REGULAR_TEXT: {
    ...smallFontSize,
    fontFamily: 'Montserrat-Regular',
  },
  MEDIUM_BOLD_TEXT: {
    ...mediumFontSize,
    fontFamily: 'Montserrat-Bold',
  },
  MEDIUM_REGULAR_TEXT: {
    ...mediumFontSize,
    fontFamily: 'Montserrat-Regular',
  },
  LARGE_BOLD_TEXT: {
    ...largeFontSize,
    fontFamily: 'Montserrat-Medium',
  },
});
