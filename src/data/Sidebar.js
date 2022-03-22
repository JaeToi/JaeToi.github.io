import { Link } from "react-router-dom";

export const firstList = [
  {
    name: "홈",
    icon: () => (
      <Link to="/youtube">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g className="style-scope yt-icon">
            <path
              d="M4,10V21h6V15h4v6h6V10L12,3Z"
              className="style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </Link>
    ),
  },
  {
    name: "탐색",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "shorts",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g
          height="24"
          viewBox="0 0 24 24"
          width="24"
          className="style-scope yt-icon"
        >
          <path
            d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "구독",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
];

export const secondList = [
  {
    name: "보관함",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "시청기록",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
];

export const thirdList = [
  {
    name: "음악",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/7g_D_U0pCYNlSCRIMMu-7a98wIE8h3N6hKffc3AKaniwthtkC6w562GYwZ-nRenH30tE-hZoNsg=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },
  {
    name: "스포츠",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/fMNav_3We6dS36p1EA_Vv5-WL4tO4rvLUEIvi_Lv5iyDkHtvMnhm7GdZ05FmIqli9adHZIVe3A=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },

  {
    name: "게임",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/zoxPlsSPWrtg1mmnyyZRgVfbDSR68PqgfMGEl8B-UbYsCoVahomJDt5zVta2ipkpwLroIG4jyRc=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },
  {
    name: "영화",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },
  {
    name: "뉴스",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/9fEZD_PP0YsaF2H2WIfykf9Cs1Uav6sF-C3tfFukD20qNqxCV-YGhGIj-y9zTUDhfkJA44enJQ=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },
  {
    name: "실시간",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },
  {
    name: "학습",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/vzHoCbo_acn_c9Bc1PhFyfTRCl5WuMv3UqNAVzbiRROEAwvAW5I4qamzyUBHJF6yUaCwdpIePg=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },
  {
    name: "360˚동영상",
    icon: () => (
      <img
        height="24"
        width="24"
        alt=""
        src="https://yt3.ggpht.com/a6BYK0bKg1TIsJBJ2xeBqNOTj_r9_w7BVd1J80X8mz5f3a9wgRQicyXrLo_jOIpGx2DyEGxCEbE=s88-c-k-c0x00ffffff-no-rj"
      />
    ),
  },
];

export const fourthList = [
  {
    name: "채널탐색",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9c4.96,0,9-4.04,9-9S16.96,3,12,3 M12,2 c5.52,0,10,4.48,10,10s-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2L12,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
];

export const fifthList = [
  {
    name: "YouTube Premium",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M10,9.35,15,12l-5,2.65ZM12,6a54.36,54.36,0,0,0-7.56.38A1.53,1.53,0,0,0,3.38,7.44,24.63,24.63,0,0,0,3,12a24.63,24.63,0,0,0,.38,4.56,1.53,1.53,0,0,0,1.06,1.06A54.36,54.36,0,0,0,12,18a54.36,54.36,0,0,0,7.56-.38,1.53,1.53,0,0,0,1.06-1.06A24.63,24.63,0,0,0,21,12a24.63,24.63,0,0,0-.38-4.56,1.53,1.53,0,0,0-1.06-1.06A54.36,54.36,0,0,0,12,6h0m0-1s6.25,0,7.81.42a2.51,2.51,0,0,1,1.77,1.77A25.87,25.87,0,0,1,22,12a25.87,25.87,0,0,1-.42,4.81,2.51,2.51,0,0,1-1.77,1.77C18.25,19,12,19,12,19s-6.25,0-7.81-.42a2.51,2.51,0,0,1-1.77-1.77A25.87,25.87,0,0,1,2,12a25.87,25.87,0,0,1,.42-4.81A2.51,2.51,0,0,1,4.19,5.42C5.75,5,12,5,12,5Z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "실시간",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M14,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,10.9,14,12z M8.48,8.45L7.77,7.75C6.68,8.83,6,10.34,6,12 s0.68,3.17,1.77,4.25l0.71-0.71C7.57,14.64,7,13.39,7,12S7.57,9.36,8.48,8.45z M16.23,7.75l-0.71,0.71C16.43,9.36,17,10.61,17,12 s-0.57,2.64-1.48,3.55l0.71,0.71C17.32,15.17,18,13.66,18,12S17.32,8.83,16.23,7.75z M5.65,5.63L4.95,4.92C3.13,6.73,2,9.24,2,12 s1.13,5.27,2.95,7.08l0.71-0.71C4.02,16.74,3,14.49,3,12S4.02,7.26,5.65,5.63z M19.05,4.92l-0.71,0.71C19.98,7.26,21,9.51,21,12 s-1.02,4.74-2.65,6.37l0.71,0.71C20.87,17.27,22,14.76,22,12S20.87,6.73,19.05,4.92z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
];

export const sixthList = [
  {
    name: "설정",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "신고 기록",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "고객 센터",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "의견 보내기",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
];

export const menufirst = [
  {
    name: "Youtube TV",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            fill="#FF0000"
            d="M6,18h12v1H6V18z M22,6.2v9.6c0,0.66-0.54,1.2-1.2,1.2H3.2C2.54,17,2,16.46,2,15.8V6.2C2,5.54,2.54,5,3.2,5 h17.6C21.46,5,22,5.54,22,6.2z"
            className="style-scope yt-icon"
          ></path>
          <polygon
            fill="#FFFFFF"
            points="15,11 10,8.35 10,13.65 "
            className="style-scope yt-icon"
          ></polygon>
        </g>
      </svg>
    ),
  },
  {
    name: "YouTube Music",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <circle
            fill="#FF0000"
            cx="12"
            cy="12"
            r="10"
            className="style-scope yt-icon"
          ></circle>
          <polygon
            fill="#FFFFFF"
            points="10,14.65 10,9.35 15,12 "
            className="style-scope yt-icon"
          ></polygon>
          <path
            fill="#FFFFFF"
            d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },

  {
    name: "YouTube Kids",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <path
            fill="#FF0000"
            d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
            className="style-scope yt-icon"
          ></path>
          <path
            fill="#000"
            d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
            className="style-scope yt-icon"
          ></path>
          <path
            fill="#000"
            d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
            className="style-scope yt-icon"
          ></path>
          <path
            fill="#FFF"
            d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "YouTube for Artists",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
      >
        <g className="style-scope yt-icon">
          <defs className="style-scope yt-icon">
            <radialGradient
              cx="5.4%"
              cy="7.11%"
              r="107.93%"
              fx="5.4%"
              fy="7.11%"
              gradientTransform="matrix(.70653 0 0 1 .016 0)"
              className="style-scope yt-icon"
            >
              <stop
                offset="0%"
                stopColor="#FFF"
                className="style-scope yt-icon"
              ></stop>
              <stop
                offset="100%"
                stopColor="#FFF"
                stopOpacity="0"
                className="style-scope yt-icon"
              ></stop>
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd" className="style-scope yt-icon">
            <path d="M1 1h21.77v22H1z" className="style-scope yt-icon"></path>
            <g fillRule="nonzero" className="style-scope yt-icon">
              <path
                fill="#F00"
                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#FAFAFA"
                d="M9.68 8.9v6.18l5.84-3.1"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#000"
                fillOpacity=".12"
                d="M9.68 8.88l5.13 3.48.73-.38"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#FFF"
                fillOpacity=".2"
                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#3E2723"
                fillOpacity=".2"
                d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#FFF"
                fillOpacity=".2"
                d="M9.68 15.08v.1l5.84-3.08v-.12"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="#3E2723"
                fillOpacity=".2"
                d="M9.68 8.9v-.13l5.84 3.1v.1"
                className="style-scope yt-icon"
              ></path>
              <path
                fill="url(#youtube_round__a)"
                fillOpacity=".1"
                d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                transform="translate(1 4.208)"
                className="style-scope yt-icon"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
];

export const MenuPointFirst = [
  {
    name: "디자인:밝은테마",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "언어:한국어",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M12.26,16.18l-2.93-2.87c-0.8,0.86-1.64,1.71-2.48,2.54L4.6,18.1L3.9,17.4l2.25-2.25c0.84-0.84,1.68-1.69,2.48-2.55 c-1.18-1.23-2.17-2.64-2.9-4.18L5.73,8.4h1.14c0.65,1.26,1.47,2.43,2.44,3.45c1.59-1.81,2.89-3.69,3.43-5.7H2.08v-1h6.65V3h1v2.15 h6.78v1h-2.73c-0.54,2.32-2.01,4.42-3.77,6.42l2.63,2.58C12.51,15.5,12.39,15.82,12.26,16.18z M21.51,21.01h-0.95l-1.12-3.04h-4.91 l-1.11,3.04h-0.96l4.09-10.81h0.87L21.51,21.01z M19.15,17.2l-2.17-5.89l-2.17,5.89H19.15z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "위치:한국",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M11.99,1.98C6.46,1.98,1.98,6.47,1.98,12s4.48,10.02,10.01,10.02c5.54,0,10.03-4.49,10.03-10.02S17.53,1.98,11.99,1.98z M8.86,14.5c-0.16-0.82-0.25-1.65-0.25-2.5c0-0.87,0.09-1.72,0.26-2.55h6.27c0.17,0.83,0.26,1.68,0.26,2.55 c0,0.85-0.09,1.68-0.25,2.5H8.86z M14.89,15.5c-0.54,1.89-1.52,3.64-2.89,5.15c-1.37-1.5-2.35-3.25-2.89-5.15H14.89z M9.12,8.45 c0.54-1.87,1.52-3.61,2.88-5.1c1.36,1.49,2.34,3.22,2.88,5.1H9.12z M16.15,9.45h4.5c0.24,0.81,0.37,1.66,0.37,2.55 c0,0.87-0.13,1.71-0.36,2.5h-4.51c0.15-0.82,0.24-1.65,0.24-2.5C16.39,11.13,16.3,10.28,16.15,9.45z M20.29,8.45h-4.38 c-0.53-1.97-1.47-3.81-2.83-5.4C16.33,3.45,19.04,5.56,20.29,8.45z M10.92,3.05c-1.35,1.59-2.3,3.43-2.83,5.4H3.71 C4.95,5.55,7.67,3.44,10.92,3.05z M3.35,9.45h4.5C7.7,10.28,7.61,11.13,7.61,12c0,0.85,0.09,1.68,0.24,2.5H3.34 c-0.23-0.79-0.36-1.63-0.36-2.5C2.98,11.11,3.11,10.26,3.35,9.45z M3.69,15.5h4.39c0.52,1.99,1.48,3.85,2.84,5.45 C7.65,20.56,4.92,18.42,3.69,15.5z M13.09,20.95c1.36-1.6,2.32-3.46,2.84-5.45h4.39C19.08,18.42,16.35,20.55,13.09,20.95z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "설정",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "YouTube의 내 데이터",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M12,3.06l7,3.21v4.84c0,1.3-0.25,2.6-0.75,3.86c-0.15,0.37-0.33,0.76-0.55,1.17c-0.15,0.27-0.31,0.54-0.48,0.81 c-1.32,2.01-3.17,3.42-5.23,3.98c-2.06-0.56-3.91-1.97-5.23-3.98c-0.17-0.27-0.33-0.54-0.48-0.81c-0.22-0.41-0.4-0.79-0.55-1.17 C5.25,13.71,5,12.41,5,11.11V6.27L12,3.06 M12,1.96L4,5.63v5.49c0,1.47,0.3,2.9,0.81,4.22c0.17,0.44,0.37,0.86,0.6,1.28 c0.16,0.3,0.34,0.6,0.52,0.88c1.42,2.17,3.52,3.82,5.95,4.44L12,21.96l0.12-0.03c2.43-0.61,4.53-2.26,5.95-4.43 c0.19-0.29,0.36-0.58,0.52-0.88c0.22-0.41,0.43-0.84,0.6-1.28C19.7,14.01,20,12.58,20,11.11V5.63L12,1.96L12,1.96z M13.08,12.11 c-0.32-0.06-0.64-0.11-0.96-0.12C13.72,11.92,15,10.62,15,9c0-1.66-1.34-3-3-3S9,7.34,9,9c0,1.62,1.28,2.92,2.88,2.99 c-0.32,0.01-0.64,0.06-0.96,0.12h0C8.64,12.58,7,14.62,7,17h10C17,14.62,15.36,12.58,13.08,12.11z M10,9c0-1.1,0.9-2,2-2s2,0.9,2,2 s-0.9,2-2,2S10,10.1,10,9z M11.12,13.09c0.37-0.08,0.64-0.11,0.88-0.11s0.51,0.03,0.88,0.11c1.48,0.3,2.63,1.46,3,2.91H8.12 C8.49,14.55,9.64,13.39,11.12,13.09z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "고객센터",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "의견 보내기",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "단축키",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
      >
        <g className="style-scope yt-icon">
          <path
            d="M16,16H8v-2h8V16z M16,11h-2v2h2V11z M19,11h-2v2h2V11z M13,11h-2v2h2V11z M10,11H8v2h2V11z M7,11H5v2h2V11z M16,8h-2v2h2V8 z M19,8h-2v2h2V8z M13,8h-2v2h2V8z M10,8H8v2h2V8z M7,8H5v2h2V8z M22,5v14H2V5H22z M21,6H3v12h18V6z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    ),
  },
];
