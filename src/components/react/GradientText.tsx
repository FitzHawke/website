// import type { ReactNode } from 'react';

type IGradientTextProps = {
  text: string;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
    {props.text}
  </span>
);

export { GradientText };
