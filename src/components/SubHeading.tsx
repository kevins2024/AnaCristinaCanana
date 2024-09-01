export default function SubHeading({ children }: PropsOneString) {
  return <h2>{children}</h2>; // todo add the capitalize function
}

type PropsOneString = {
  children: string;
};
