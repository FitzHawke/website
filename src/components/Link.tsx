import { GradientText } from './GradientText';

type ILinkProps = {
  src: string;
  alt: string;
  text: string;
  linkTo: string;
};

const Link = (props: ILinkProps) => (
  <a href={props.linkTo} className="flex items-center gap-2">
    <img
      className="h-12 w-12 hover:translate-y-1"
      src={props.src}
      alt={props.alt}
      loading="lazy"
    />
    <span>
      <GradientText>{props.text}</GradientText>
    </span>
  </a>
);

export { Link };
