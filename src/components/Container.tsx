import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  type?: 'header';
};

export default function Container({ children, type }: ContainerProps) {
  return <div className={type === 'header' ? 'header-container' : 'container'}>{children}</div>;
}
