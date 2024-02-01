import LetterItem from "./LetterItem";

function LetterList({ letters, writedTo }) {
  const filteredLetters = letters.filter((letter) =>
    writedTo ? letter.writedTo === writedTo : true
  );
  return (
    <div>
      {filteredLetters.map((item) => {
        return <LetterItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default LetterList;
