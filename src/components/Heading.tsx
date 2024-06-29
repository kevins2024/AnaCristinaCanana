import "./Heading.css";

// todo where should this live?
function ToTitleCase(inText: string): string {
  const lowerCaseWords = [
    "a",
    "and",
    "as",
    "at",
    "but",
    "by",
    "down",
    "for",
    "from",
    "if",
    "in",
    "into",
    "like",
    "near",
    "nor",
    "of",
    "off",
    "on",
    "once",
    "onto",
    "or",
    "over",
    "past",
    "so",
    "than",
    "that",
    "the",
    "to",
    "upon",
    "when",
    "with",
    "yet",
  ];
  const inputAsArray = inText.toLocaleLowerCase().split(" ");
  var result = "";
  inputAsArray.forEach((word, index) => {
    if (lowerCaseWords.includes(word) && index > 0) {
      result += word;
    } else {
      result += word.charAt(0).toLocaleUpperCase() + word.slice(1);
    }
    if (index < inputAsArray.length) result += " ";
  });
  return result;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1 className={className + " shared-heading"}>{ToTitleCase(children)}</h1>
  );
}

type HeadingProps = {
  children: string;
  className: string;
};
