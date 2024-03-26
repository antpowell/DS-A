function evalRPN(tokens: string[]): number {
  const validOperations = new Set(["+", "-", "*", "/"]);
  const total = 0;

  let index = 0;
  while (tokens.length !== 1) {
    console.log(`at index: ${index} value:${tokens[index]}`);
    if (validOperations.has(tokens[index])) {
      const equation = [tokens[index - 2], tokens[index], tokens[index - 1]]
        .toString().replace(/,/g, " ");
      console.log(`equation being calculated: ${equation}`);
      const sum = eval(equation);
      if (sum > 0) {
        tokens[index - 2] = Math.floor(eval(equation)).toString();
      } else {
        tokens[index - 2] = Math.ceil(eval(equation)).toString();
      }
      tokens.splice(index - 1, 2);
      index -= 2;
    }
    console.log(`curr state of arr: ${tokens}`);
    index++;
  }

  return Number.parseInt(tokens[0]);
}

//Slightly improved solution
function evalRPN(tokens: string[]): number {
  const validOperations = new Set(["+", "-", "*", "/"]);

  let index = 0;
  while (tokens.length !== 1) {
    if (validOperations.has(tokens[index])) {
      const equation = [tokens[index - 2], tokens[index], tokens[index - 1]]
        .toString().replace(/,/g, " ");
      tokens[index - 2] = Math.trunc(eval(equation)).toString();
      tokens.splice(index - 1, 2);
      index -= 2;
    }
    index++;
  }

  return Number.parseInt(tokens[0]);
}
