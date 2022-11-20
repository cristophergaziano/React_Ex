export function Sum({ numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) {
  let sum = 0;

  numbers.forEach((item) => {
    sum += item;
  });

  return (
    <div>
      <h1>{sum}</h1>
    </div>
  );
}
