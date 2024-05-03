// ref: https://www.youtube.com/watch?v=Urx87-NMm6c

const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["V", "G", "K"]],
  ["C", ["D"]],
  ["D", ["H"]],
  ["V", null],
  ["G", null],
  ["K", ["F"]],
  ["H", null],
  ["F", null],
]);

type Graph = typeof graph;

//.if searchFor term is in graph return true otherwise return false
export const depthFirstSearch = (searchFor: string, graph: Graph) => {
  //stack is first in last out
  const stack: string[] = [];
  const visited: string[] = [];
  const head: string = graph.keys().next().value;

  // 1. add node to stack
  stack.push(head);

  // let i = 0;
  while (stack.length !== 0) {
    console.log(stack);
    //2. pop node from stack
    const poppedNode = stack.pop() as string;

    // visited[i] = poppedNode;
    // i++;
    visited.push(poppedNode);

    //3. check if we found the search value
    if (poppedNode === searchFor) {
      return true;
    }

    //4. add children to stack
    graph.get(poppedNode)?.forEach((value) => {
      console.log(value);
      stack.push(value);
    });
  }

  console.log(`visited: ${visited}`);
  return false;
};

console.log(depthFirstSearch("Y", graph));
