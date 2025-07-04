import React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  sizes,
  style,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      style={style}
      className={`${className} ${fill ? "w-full h-full" : ""}`}
    />
  );
};

export default Image;
