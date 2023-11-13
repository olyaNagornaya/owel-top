import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HTagPropsTypes extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  className?: string;
}
