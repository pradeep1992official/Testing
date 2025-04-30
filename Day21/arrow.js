function testArrow() {
  const numbers = [1, 2, 3, 4, 5];
  //map, filter, reduce
  const squaredNumbers = numbers.map((numbers) => numbers * numbers);
  const filteredNumbers = numbers.filter((numbers) => numbers % 2 === 0);
  const reducedNumbers = numbers.reduce((total, numbers) => total + numbers);
  document.getElementById("arrow_result").innerHTML = `
    <strong>Original Numbers : </strong> ${numbers.join(", ")} <br>
    <strong>Squared Numbers : (Map)</strong> ${squaredNumbers.join(", ")} <br>
    <strong>Filtered Even Numbers : (Filter)</strong> ${filteredNumbers.join(
      ", "
    )} <br>
    <strong>Reduced Sum : (Reduce)</strong> ${reducedNumbers} <br>
    `;
}
