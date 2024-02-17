export default function Heading({ children }: PropsOneString) {
  return (
    <h1
      style={{
        maxWidth: "50%",
        textAlign: "center",
        backgroundColor: "yellow",
      }}
    >
      {children}
    </h1>
  );
}

type PropsOneString = {
  children: string;
};
