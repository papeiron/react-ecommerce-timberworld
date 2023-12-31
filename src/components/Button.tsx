type ButtonProps = {
  content: string;
  classNames?: string;
};

export default function Button({ content, classNames }: ButtonProps) {
  return <button className={` ${classNames ? classNames : null} `}>{content}</button>;
}
