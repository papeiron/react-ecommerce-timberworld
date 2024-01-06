import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  content: string;
  classNames?: string;
} & ComponentPropsWithoutRef<'button'>;

export default function Button({ content, classNames, ...props }: ButtonProps) {
  return (
    <button className={` ${classNames ? classNames : null} `} {...props}>
      {content}
    </button>
  );
}
