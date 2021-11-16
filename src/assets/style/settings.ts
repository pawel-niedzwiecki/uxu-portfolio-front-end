interface MainSettingsTemplate {
  white: string;
  black: string;
  aqua: string;
  riverBed: string;
  blueDark: string;
  blue: string;
  gray: string;
  danger: string;
  break: {};
  breakPoint: {}[];
  gridCol: number;
  max_width: string;
}

const settings: MainSettingsTemplate = {
  // settings color
  white: "#ffff",
  black: "#000",
  aqua: "#00FFF0",
  riverBed: "#44495B",
  blueDark: "#040815",
  blue: "#0A122A",
  gray: "#7E7E7E",
  danger: "#E18787",

  // settings break
  break: { small: "0.5rem", main: "1rem", big: "4rem" },

  // settings breakpoint
  breakPoint: [
    { type: "xs", break: "0px" },
    { type: "sm", break: "540px" },
    { type: "md", break: "768px" },
    { type: "lg", break: "960px" },
    { type: "xl", break: "1140px" },
    { type: "xxl", break: "1320px" },
  ],

  gridCol: 12,

  // settings max width
  max_width: "144rem",
};

export default settings;
