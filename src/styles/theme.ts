/* eslint-disable import/no-anonymous-default-export */
import { css } from "styled-components";

export const rem = (px: number) => {
  return px / 16 + "rem";
};

export default {
  colors: {
    white: "#fff",
    black: "#000",
    primary: "#233876",
    primaryDark: "#111C4E",
    grey00: "#E5E7EB",
    grey50: "#F3F4F6",
    grey75: "#D1D5DB",
    grey100: "#6B7280",
    grey800: "#111928",
    background: "#F9FAFB",
    error: "#F98080",
    modalRgba: "rgba(17, 25, 40, 0.3)"
  },
  breakpoints: {
    largeMobile: "@media (min-width: 480px)",
    tablet: "@media (min-width: 768px)",
    laptop: "@media (min-width: 1024px)",
    desktop: "@media (min-width: 1280px)",
    wide: "@media (min-width: 1440px)",
  },
  fonts: {
    headings: {
      heading1: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(36)};
        line-height: 72px;
      `,
      heading4: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(24)};
        line-height: 30px;
      `,
      heading6: (weight = 500) => css`
        font-weight: ${weight};
        font-size: ${rem(20)};
        line-height: 30px;
      `,
    },
    body: {
      medium: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(16)};
        line-height: 26px;
      `,
      normal: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(14)};
        line-height: 21px;
      `,
      small: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(12)};
        line-height: 21px;
      `,
    },
  },
};
