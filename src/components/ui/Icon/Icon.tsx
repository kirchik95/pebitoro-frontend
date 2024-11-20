import ReactSVG from 'react-inlinesvg';

interface IconProps {
  name: string;

  className?: string;
  width?: number;
  height?: number;
}

export const Icon = ({ name, width = 24, height = 24, className, ...props }: IconProps) => {
  return (
    <ReactSVG
      className={className}
      src={`/icons/${name}.svg`}
      width={width}
      height={height}
      {...props}
      onError={(error) => console.error(error)}
    />
  );
};
