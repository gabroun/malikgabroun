import React from "react";
import styled from "styled-components";

const LogoImg = styled.svg`
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .inner-logo:hover {
    animation: spin 0.5s ease-in 0.3s;
    transform-box: fill-box;
    transform-origin: 50% 50%;
  }

  .path {
    stroke-dasharray: 160;
    stroke-dashoffset: 0;
    animation: dash 2s linear;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 160;
      fill: transparent;
    }
    to {
      stroke-dashoffset: 0;
      fill: black;
    }
  }
`;

interface LogoProps {
  height: string;
  width: string;
  viewBox: string;
  device?: "mobile";
}

const Logo = (props: LogoProps) => {
  return (
    <LogoImg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      width={props.width}
      viewBox={props.viewBox}
    >
      <g className="inner-logo">
        <path d="M251.94 82.85l30.46-13.36v2.17l-1.95 3.91-2.94 9.07-1.41 3.75-.32 3.2h.7l14.01-17.86 5.97-2.83.38.06.33.27V72.53l-1.47 9.89-.05.54.05.27.11.49 5.11-7.55 3.69-4.18 3.8-3.69 1.36-1.9 3.85-2.17 1.03-.71.6-.43h.92l.49.21.58.33.89.92.49.65 1.3 1.63v.49l.38.6V69l-.27 3.21-.27 2.28-.65 1.3-.22 1.55-.43 3.66-.55 20.31.22 8.58.11 8.74.38 8.09-.38 4.08-.38 6.62-7.12-4.78.33-10.15.87-51.26.27-.65.27-.71-.16-.7-.82.27-.97 1.3-5.16 6.25-2.17 3.15-3.26 5.04-3.31 7.17-1.63 4.89-.76 3.01-1.09 3.78-.98 2.93-.86 3.15-1.04 2.5-.38 2-.38.98-1.95 5.43-5.7-5.97-.65-.82.87-6.02 1.03-4.67.97-1.96 1.04-4.4.54-2.38.46-2.66v-3.1l.24-2.5.17-1.41-.41-.33-1.11 1.42-.44 1.3-.7 1.68-1.52 2.61-.66.92-2.28 5.11-1.19 2.41-.76 2.85-.92 2.77-1.2 4.24-.7 3.69-.22 1.47h-.6l-1.57-.11-6.95-3.15-.38-.44.27-.81 3.31-5.92 1.09-3.64.97-3.36 1.04-4.67.27-1.58-.06-3.2.17-3.37.1-3.31.11-2.82.17-.87-.76.16-.76.98-.98 1.41-1.58 1.68-.97 1.36-1.25 1.68-1.03 1.47-1.04 1.03-.43.71-1.2.21-2.33-1.14-1.95-.92-1.42-.87z" />
        <path
          fill="#f9a37a"
          d="M363.1 106.3l-5.27 5.37-69.05 69.68-79.98-80.98 79.98-80.42 32.27 31.09-3.24 2.42-29.03-27.18-74.21 74.37 74.21 74.75 71.47-71.68z"
        />
      </g>
      <path
        style={{ display: props.device === "mobile" ? "none" : "block" }}
        className="path"
        stroke="#000000"
        d="M61.05 226.46l-3.5.69-4.44-24.11-.02-.04c-.56 1.16-1.8 3.86-3.72 8.08s-3.79 8.47-5.61 12.73H40.8c-1.71-3.94-3.59-8.2-5.65-12.78-2.06-4.58-3.27-7.25-3.63-8.01h-.04c-.09.37-.67 3.11-1.74 8.22-1.08 5.11-2.1 10.39-3.08 15.85l-3.3-.6c1.43-6.17 2.77-12.29 4.02-18.35s1.93-9.35 2.04-9.86l3.42-.49c.14.33 1.16 2.64 3.04 6.92 1.88 4.28 4.1 9.22 6.65 14.8h.13c1.95-4.38 4.01-9.05 6.19-14.01l3.39-7.71 3.24.26c.04.32.64 3.46 1.78 9.42 1.13 5.97 2.4 12.3 3.79 18.99zM97.18 225.74l-3.34 1.73c-.06-.16-.52-1.22-1.38-3.2a541.1 541.1 0 0 0-3.4-7.63H76.34c-1.51 3.34-2.68 5.92-3.5 7.76-.82 1.83-1.27 2.86-1.36 3.07l-2.88-1.56c.37-.74 1.91-4.03 4.61-9.85 2.7-5.82 5.5-11.94 8.41-18.35h2.79c2.86 6.41 5.68 12.63 8.44 18.64 2.78 6.02 4.22 9.15 4.33 9.39zm-9.33-11.85c-.76-1.75-1.56-3.58-2.4-5.48-.84-1.91-1.73-3.9-2.66-5.98l-.09.02c-.72 1.57-1.59 3.51-2.61 5.81s-1.86 4.17-2.52 5.63l-.01.02h10.29v-.02zM125.34 226.85c-.17 0-1.08-.01-2.72-.02-1.64-.01-3.74-.02-6.28-.02-1.68 0-3.27.01-4.78.02-1.51.01-2.79.02-3.83.02.03-2.46.05-4.96.08-7.49.02-2.53.03-5.01.03-7.44 0-4.07-.01-7.17-.04-9.3-.03-2.13-.05-3.63-.06-4.49h3.54a536.4 536.4 0 0 0-.06 6.4c-.01 2.42-.02 4.4-.02 5.95 0 3.76.01 6.91.02 9.42.01 2.52.02 3.85.02 3.99.59 0 1.3 0 2.13.01.83.01 1.58.01 2.26.01 2.56 0 4.79-.01 6.69-.03 1.9-.02 2.91-.03 3.04-.03v3zM140.31 226.89h-3.54c.01-.86.04-2.39.06-4.6.03-2.21.04-5.37.04-9.5 0-1.63-.01-3.77-.02-6.42s-.04-5.4-.09-8.25h3.54c-.03 2.05-.05 4.43-.08 7.14-.02 2.71-.03 4.93-.03 6.65 0 4.35.01 7.72.04 10.11.05 2.39.07 4.01.08 4.87zM159.19 226.89h-3.54c.03-.86.05-2.75.08-5.67s.03-6.44.03-10.55c0-1.68-.01-3.62-.03-5.82-.02-2.21-.05-4.45-.08-6.72h3.54c-.03 2.19-.05 4.67-.06 7.43-.01 2.76-.02 5.15-.02 7.15 0 4.12.01 7.3.03 9.54s.04 3.78.05 4.64zm18.63-1.98l-2.47 2.37c-3.42-3.32-6.72-6.42-9.9-9.3s-5-4.53-5.46-4.94v-.09c.89-.89 2.79-2.84 5.7-5.87 2.91-3.02 5.83-6.12 8.73-9.28l2.42 2.16c-2.46 2.36-5 4.88-7.59 7.54-2.59 2.67-4.23 4.35-4.9 5.03v.06c.33.31 1.75 1.62 4.25 3.92 2.5 2.31 5.58 5.11 9.22 8.4zM209.95 212.11c-.03 1.03-.06 2.24-.09 3.62s-.04 2.52-.04 3.43c0 1.45.01 3.06.04 4.84.03 1.78.04 2.78.04 2.98-.13.01-.56.05-1.29.1s-1.44.08-2.13.08c-3.41 0-6.42-.37-9.03-1.1-2.61-.73-4.88-2-6.8-3.82-1.19-1.12-2.15-2.5-2.87-4.16-.72-1.65-1.08-3.54-1.08-5.66 0-2.61.69-4.94 2.07-6.99s3.28-3.71 5.7-4.97c1.65-.86 3.52-1.51 5.62-1.94 2.1-.44 4.29-.66 6.56-.66.36 0 .69 0 1 .01.31.01.58.01.83.01l.26 3.09c-.06 0-.29 0-.69-.01-.4-.01-.72-.01-.97-.01-2.19 0-4.2.19-6.02.56-1.82.37-3.41.92-4.78 1.63-1.85.97-3.3 2.3-4.36 3.98-1.05 1.68-1.58 3.46-1.58 5.35 0 2.39.55 4.38 1.65 5.95 1.1 1.57 2.51 2.8 4.25 3.69 1.55.79 3.19 1.34 4.92 1.67 1.73.32 3.51.48 5.35.48 0-.23-.01-1.34-.02-3.35-.01-2-.04-4.93-.09-8.79h3.55zM248.17 225.74l-3.34 1.73c-.06-.16-.52-1.22-1.38-3.2s-1.99-4.52-3.4-7.63h-12.72c-1.51 3.34-2.68 5.92-3.5 7.76-.82 1.83-1.27 2.86-1.36 3.07l-2.88-1.56c.37-.74 1.91-4.03 4.61-9.85 2.7-5.82 5.5-11.94 8.41-18.35h2.79c2.86 6.41 5.68 12.63 8.44 18.64 2.77 6.02 4.21 9.15 4.33 9.39zm-9.34-11.85c-.76-1.75-1.56-3.58-2.4-5.48-.84-1.91-1.73-3.9-2.66-5.98l-.09.02c-.72 1.57-1.59 3.51-2.61 5.81-1.02 2.3-1.86 4.17-2.52 5.63l-.01.02h10.29v-.02zM279.1 218.42c0 1.43-.37 2.72-1.11 3.87-.74 1.15-1.81 2.08-3.21 2.81a15.75 15.75 0 0 1-4.1 1.41c-1.49.29-3.19.44-5.11.44-1.42 0-2.87-.03-4.37-.08s-2.33-.08-2.5-.1c.04-2.75.07-5.35.09-7.79.01-2.44.02-4.77.02-6.99 0-4.21-.02-7.54-.05-10-.04-2.46-.05-3.73-.05-3.83.2-.01.99-.05 2.37-.11 1.38-.06 2.72-.09 4.02-.09 1.47 0 2.83.1 4.08.29s2.3.46 3.15.81c1.3.52 2.33 1.26 3.07 2.22.74.97 1.12 2.15 1.12 3.56 0 1.48-.47 2.78-1.4 3.92-.93 1.14-2 1.92-3.2 2.33v.21c.99.09 1.94.32 2.87.7.93.38 1.74.92 2.44 1.62.61.62 1.08 1.3 1.39 2.04.32.76.48 1.68.48 2.76zm-3.65.11c0-.73-.13-1.39-.39-1.97s-.64-1.13-1.16-1.67c-.49-.49-1.16-.88-2.01-1.18-.85-.3-1.78-.45-2.78-.45-.8 0-1.45.01-1.94.02s-.82.02-.98.02l-.34-2.58c1.06-.03 1.99-.15 2.8-.38.81-.22 1.53-.55 2.16-1 .6-.43 1.1-.98 1.48-1.64s.58-1.41.58-2.25c0-.87-.21-1.63-.64-2.27-.43-.64-1.01-1.14-1.76-1.51-.63-.3-1.4-.53-2.32-.68-.92-.15-1.89-.23-2.94-.23-.67 0-1.29.01-1.85.03-.57.02-.93.03-1.08.03-.04 2.09-.07 4.31-.08 6.66-.01 2.35-.01 4.05-.01 5.11 0 2.46.01 4.94.03 7.42.02 2.49.03 3.81.03 3.99.29.01.67.03 1.15.05a38.366 38.366 0 0 0 5.96-.23c1.41-.17 2.6-.53 3.57-1.07.8-.44 1.42-1.02 1.86-1.74.44-.68.66-1.52.66-2.48zM314.28 225.17l-2.69 2.21c-.31-.33-1.43-1.57-3.35-3.73s-4.87-5.52-8.87-10.09l.02-.19c.54-.14 1.27-.46 2.17-.93.9-.48 1.66-1 2.28-1.56.53-.49.99-1.09 1.39-1.81.39-.72.59-1.68.59-2.88 0-1.1-.29-2.05-.87-2.85s-1.38-1.38-2.4-1.75c-.83-.32-1.71-.51-2.62-.57a39.5 39.5 0 0 0-3.72-.09c-.27.01-.47.01-.6.01-.03 2.72-.05 5.12-.05 7.2-.01 2.08-.01 3.55-.01 4.41 0 1.96.01 4.63.03 8 .02 3.37.04 5.48.05 6.34h-3.54c.01-.86.04-2.52.06-5 .03-2.47.04-5.55.04-9.23v-3.97c0-1.93-.04-5.46-.11-10.57.14 0 .86-.01 2.15-.04s2.47-.04 3.56-.04c1.24 0 2.45.07 3.63.21s2.32.45 3.43.92c1.42.6 2.54 1.49 3.37 2.65.83 1.17 1.25 2.54 1.25 4.11 0 2.03-.63 3.73-1.88 5.08s-2.43 2.36-3.55 3.02v.11c1.96 2.29 4.12 4.66 6.46 7.1s3.61 3.74 3.78 3.93zM350.72 212.52c0 2.32-.4 4.45-1.19 6.39-.79 1.94-1.83 3.54-3.1 4.8-1.42 1.4-2.92 2.42-4.51 3.06s-3.29.96-5.11.96c-1.77 0-3.45-.3-5.02-.91s-2.99-1.51-4.25-2.72c-1.39-1.3-2.51-2.95-3.36-4.93-.85-1.98-1.28-4.21-1.28-6.69 0-2.21.34-4.21 1.01-6.03.67-1.81 1.68-3.44 3.03-4.89 1.25-1.35 2.73-2.39 4.44-3.13 1.72-.74 3.53-1.11 5.43-1.11 1.93 0 3.72.35 5.37 1.04 1.65.7 3.07 1.66 4.27 2.89 1.4 1.43 2.47 3.12 3.19 5.06.72 1.95 1.08 4.02 1.08 6.21zm-3.65.34c0-1.86-.31-3.69-.94-5.49-.62-1.8-1.57-3.3-2.85-4.52a9.566 9.566 0 0 0-2.89-1.93c-1.07-.46-2.26-.69-3.58-.69-1.29 0-2.49.23-3.6.7a9.462 9.462 0 0 0-3.02 2.05c-1.15 1.15-2.04 2.56-2.68 4.25a14.8 14.8 0 0 0-.96 5.29c0 2.06.33 3.91.98 5.54s1.57 3.02 2.76 4.15c.82.79 1.79 1.42 2.9 1.9 1.12.48 2.32.72 3.59.72s2.47-.23 3.58-.7a9.5 9.5 0 0 0 3.02-2.01c1.08-1.03 1.96-2.34 2.65-3.94s1.04-3.37 1.04-5.32zM387.24 198.12c0 2.75-.01 5.02-.04 6.82-.03 1.8-.04 3.36-.04 4.69 0 1.63 0 3.03.01 4.18s.01 2.15.01 3c0 1.66-.25 3.13-.74 4.39s-1.24 2.37-2.25 3.32c-1 .95-2.23 1.69-3.7 2.22s-3.15.81-5.07.81c-1.92 0-3.61-.27-5.07-.79s-2.7-1.27-3.72-2.23c-1-.95-1.75-2.05-2.25-3.32s-.74-2.73-.74-4.39c0-.84 0-1.84.01-3 .01-1.15.01-2.55.01-4.18 0-1.33-.01-2.9-.04-4.69-.03-1.8-.04-4.07-.04-6.82h3.54c-.01.36-.03 1.58-.05 3.66a894.397 894.397 0 0 0-.02 11.42c.01 1.1.01 2.23.01 3.39 0 2.62.75 4.61 2.26 5.96s3.54 2.03 6.1 2.03c2.78 0 4.86-.64 6.25-1.93 1.39-1.29 2.08-3.31 2.08-6.06 0-1.16 0-2.29.01-3.39s.01-2.17.01-3.2c0-3.39-.01-6.17-.04-8.34-.03-2.16-.04-3.34-.04-3.54h3.55zM427.06 198.12c-.03 2.25-.05 4.82-.08 7.71-.02 2.89-.03 4.98-.03 6.25 0 4.07.01 7.3.04 9.7.03 2.4.04 3.68.04 3.83l-2.86 1.4c-4.33-5.84-8.37-11.12-12.13-15.82s-5.93-7.42-6.52-8.15l-.04.02c0 3.84.02 8.55.08 14.15.05 5.59.08 8.82.1 9.68h-3.35c.01-.36.04-1.63.06-3.82.03-2.19.04-5.24.04-9.15 0-1.56-.01-3.63-.02-6.22-.01-2.58-.04-5.32-.09-8.22l3.27-1.55 6.58 8.35c4.13 5.24 8.02 10.11 11.68 14.6l.04-.02c0-2.2-.03-5.92-.09-11.13-.06-5.22-.09-9.08-.09-11.6h3.37zM445.21 226.89h-4.3v-4.58h4.3v4.58zM478.12 224.25c-.01.13-.05.49-.12 1.08-.06.59-.13 1.24-.18 1.94h-.76c-3.5 0-6.6-.44-9.32-1.32-2.72-.88-4.96-2.16-6.7-3.83-1.22-1.16-2.18-2.55-2.89-4.17s-1.06-3.47-1.06-5.54c0-1.86.35-3.56 1.05-5.1.7-1.54 1.62-2.88 2.75-4.03 1.65-1.66 3.86-2.98 6.64-3.95 2.78-.97 5.75-1.46 8.92-1.46h.97c.01.26.04.67.09 1.24.04.57.09 1.18.15 1.84h-.74c-1.79 0-3.65.2-5.57.59-1.92.39-3.58.99-4.97 1.77-1.81 1.03-3.2 2.35-4.17 3.96a9.84 9.84 0 0 0-1.46 5.21c0 1.93.44 3.69 1.31 5.27.88 1.58 2.26 2.91 4.15 3.99 1.55.89 3.28 1.53 5.19 1.93 1.92.4 3.82.6 5.71.6h.41c.19 0 .39-.01.6-.02zM515.2 212.52c0 2.32-.4 4.45-1.19 6.39-.79 1.94-1.83 3.54-3.1 4.8-1.42 1.4-2.92 2.42-4.51 3.06s-3.29.96-5.11.96c-1.77 0-3.45-.3-5.02-.91s-2.99-1.51-4.25-2.72c-1.39-1.3-2.51-2.95-3.36-4.93-.85-1.98-1.28-4.21-1.28-6.69 0-2.21.34-4.21 1.01-6.03.67-1.81 1.68-3.44 3.03-4.89 1.25-1.35 2.73-2.39 4.44-3.13 1.72-.74 3.53-1.11 5.43-1.11 1.93 0 3.72.35 5.37 1.04 1.65.7 3.07 1.66 4.27 2.89 1.4 1.43 2.47 3.12 3.19 5.06.72 1.95 1.08 4.02 1.08 6.21zm-3.65.34c0-1.86-.31-3.69-.94-5.49-.62-1.8-1.57-3.3-2.85-4.52a9.566 9.566 0 0 0-2.89-1.93c-1.07-.46-2.26-.69-3.58-.69-1.29 0-2.49.23-3.6.7a9.462 9.462 0 0 0-3.02 2.05c-1.15 1.15-2.04 2.56-2.68 4.25a14.8 14.8 0 0 0-.96 5.29c0 2.06.33 3.91.98 5.54s1.57 3.02 2.76 4.15c.82.79 1.79 1.42 2.9 1.9 1.12.48 2.32.72 3.59.72s2.47-.23 3.58-.7a9.5 9.5 0 0 0 3.02-2.01c1.08-1.03 1.96-2.34 2.65-3.94s1.04-3.37 1.04-5.32zM563 226.46l-3.5.69-4.43-24.11-.03-.03c-.56 1.16-1.8 3.86-3.72 8.08-1.92 4.23-3.79 8.47-5.61 12.73h-2.96c-1.71-3.94-3.59-8.2-5.65-12.78-2.06-4.58-3.27-7.25-3.63-8.01h-.04c-.09.37-.67 3.11-1.74 8.22-1.08 5.11-2.1 10.39-3.08 15.85l-3.3-.6c1.43-6.17 2.77-12.29 4.02-18.35s1.93-9.35 2.04-9.86l3.42-.49c.14.33 1.16 2.64 3.04 6.92 1.88 4.28 4.1 9.22 6.65 14.8h.13c1.95-4.38 4.01-9.05 6.19-14.01l3.39-7.71 3.24.26c.04.32.64 3.46 1.78 9.42 1.13 5.96 2.4 12.29 3.79 18.98z"
      />
    </LogoImg>
  );
};

export default Logo;
