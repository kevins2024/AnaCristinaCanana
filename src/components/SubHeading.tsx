export default function SubHeading(props: PropsOneString) {
  return <h2>{props.text}</h2>;
}

type PropsOneString = {
  text: string;
};
