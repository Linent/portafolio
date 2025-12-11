import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || height}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NodeIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} {...props}>
    <path
      fill="currentColor"
      d="M63.9 1.5L5.3 34v60l58.6 32.5 58.8-32.5v-60L63.9 1.5zm0 13.1l45.8 25.3v50.4L63.9 115 18 90.3V39.9l45.9-25.3z"
    />
  </svg>
);

export const ExpressIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 200 50" {...props}>
    <text
      x="0"
      y="35"
      fontSize="32"
      fontFamily="monospace"
      fill="currentColor"
    >
      express
    </text>
  </svg>
);

export const MongoIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} {...props}>
    <path
      fill="currentColor"
      d="M32 2l5 12 7 9 5 18-5 14-12 7-12-7-5-14 5-18 7-9 5-12z"
    />
  </svg>
);

export const ApiIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      fill="currentColor"
      d="M4 7v10h3V7H4m13 0v10h3V7h-3M9 7v2h6V7H9m0 4v2h6v-2H9m0 4v2h6v-2H9z"
    />
  </svg>
);

export const WhatsAppIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-8.7 15l-1.3 4.7 4.9-1.3A10 10 0 1 0 12 2z"
    />
  </svg>
);

export const GeminiIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" {...props}>
    <circle cx="16" cy="24" r="10" fill="currentColor" opacity="0.7" />
    <circle cx="32" cy="24" r="10" fill="currentColor" />
  </svg>
);

export const N8NIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" {...props}>
    <path
      d="M32 2v60M2 32h60M10 10l44 44M10 54L54 10"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export const JSIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} {...props}>
    <path fill="currentColor" d="M2 2h124v124H2z" />
    <text
      x="32"
      y="92"
      fontSize="70"
      fill="#000"
      fontFamily="monospace"
    >
      JS
    </text>
  </svg>
);

export const ReactIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      stroke="currentColor"
      fill="none"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      stroke="currentColor"
      fill="none"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      stroke="currentColor"
      fill="none"
      transform="rotate(120 12 12)"
    />
  </svg>
);

export const NextIcon = ({ size = 24, ...props }) => (
  <svg viewBox="0 0 128 40" width={size} height={size} {...props}>
    <text x="0" y="30" fontSize="32" fontFamily="monospace" fill="currentColor">
      NEXT
    </text>
  </svg>
);

export const HtmlIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" {...props}>
    <path
      fill="currentColor"
      d="M10 4h44l-4 48-18 8-18-8z"
    />
  </svg>
);

export const CssIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" {...props}>
    <path
      fill="currentColor"
      d="M10 4h44l-4 48-18 8-18-8z"
    />
  </svg>
);

export const WordpressIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" {...props}>
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none" />
    <path
      d="M20 20l12 32 12-32"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
  </svg>
);

export const SeoIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M3 17l6-6 4 4 8-8v5h2V3h-9v2h5l-6 6-4-4L1 15l2 2z"
    />
  </svg>
);

export const GitIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" {...props}>
    <circle cx="32" cy="16" r="6" fill="currentColor" />
    <circle cx="32" cy="48" r="6" fill="currentColor" />
    <circle cx="48" cy="32" r="6" fill="currentColor" />
    <path
      d="M32 22v20M37 32h5M32 22L48 32M32 42L48 32"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
);
