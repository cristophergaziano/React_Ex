export function Sum(props) {
  
  let sum = 0;

  props.numbers.forEach((item) => {
    sum += item;
  });

  return (
    <div>
      <h1>{sum}</h1>
    </div>
  );
}
