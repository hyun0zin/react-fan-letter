import LetterItem from "./LetterItem";

function LetterList({ data }) {
  return (
    <div>
      {data.map((item) => {
        return <LetterItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default LetterList;
