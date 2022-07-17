import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Set core body defaults */
body {
    position: relative;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    min-height: 100vh;
    padding: 72px 0;
    font-family: "Spartan", sans-serif;
    overflow: hidden;
    background-color: ${({ theme }) => theme.currentTheme.body};
    display: flex;
    justify-content: center;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
  font-size: 14px;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Handle date picker */
/* ::-webkit-calendar-picker-indicator {
  opacity: 0;
} */
`;

export default GlobalStyles;
