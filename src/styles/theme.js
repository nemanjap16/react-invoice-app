export const colors = {
  purple: "hsl(252 94% 67%)",
  lightPurple: "hsl(252 100% 73%)",
  gray: "hsl(231 20% 61%)",
  grayish: "hsl(231, 37%, 63%)",
  lightGray: "hsl(231 73% 93%)",
  red: "hsl(0 80% 63%)",
  lightRed: "hsl(0 100% 80%)",
  veryDarkBlue: "hsl(233 31% 17%)",
  darkBlue: "hsl(233 30% 21%)",
  black: "hsl(228 29% 7%)",
  bgLight: "hsl(240 27% 98%)",
  bgDark: "hsl(233 30% 11%)",
  white: "hsl(0, 0%, 100%)",
  goBackHover: "hsl(252, 100%, 73%)",
  transparent: "transparent",
};

export const theme = {
  light: {
    name: "light-theme",
    body: colors.bgLight,
    title: colors.black,
    subtitle: colors.gray,
    dropdown: colors.white,
    checkbox: colors.lightGray,
    invoice: colors.white,
    invoiceText: colors.black,
    inputBg: colors.white,
    inputColor: colors.black,
    inputBorder: colors.lightGray,
    formBg: colors.white,
    formColor: colors.grayish,
    btnContainer: colors.white,
    goBack: colors.black,
    grayishToWhite: colors.grayish,
    bgItem: colors.bgLight,
    bgTotal: colors.darkBlue,
  },
  dark: {
    name: "dark-theme",
    body: colors.bgDark,
    title: colors.white,
    subtitle: colors.white,
    dropdown: colors.darkBlue,
    checkbox: colors.bgDark,
    invoice: colors.white,
    invoiceText: colors.white,
    inputBg: colors.veryDarkBlue,
    inputColor: colors.white,
    inputBorder: colors.transparent,
    formBg: colors.bgDark,
    formColor: colors.white,
    btnContainer: colors.darkBlue,
    goBack: colors.white,
    grayishToWhite: colors.white,
    bgItem: colors.darkBlue,
    bgTotal: colors.black,
  },
};