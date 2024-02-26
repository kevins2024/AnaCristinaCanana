export default function SubHeading({ children }: PropsOneString) {
  return <h2>{children}</h2>; // todo add the capitalize function
}

// todo put this somewhere once we figure out what all we need
type PropsOneString = {
  children: string;
};
