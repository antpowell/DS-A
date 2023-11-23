interface Node {
  [node: string]: Array<string>;
}
const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D"]],
  ["C", ["H"]],
  ["D", ["E", "F", "G"]],
  ["E", ["Z", "S"]],
  ["F", ["I"]],
  ["G", []],
  ["H", ["J", "N"]],
  ["I", []],
  ["J", []],
  ["Z", []],
  ["M", []],
  ["N", ["M"]],
  ["S", []],
]);

type Graph = typeof graph;

const BFS = (node: string, lookFor: string) => {
  const queue: Array<string> = [node];
  const visited: Set<string> = new Set();
  let found = false;

  while (queue.length > 0) {
    const node = queue.shift() as string;
    const children = graph.get(node) as string[];
    visited.add(node);

    if (node === lookFor) {
      found = true;
    }

    children.forEach((value) => {
      if (!visited.has(value)) {
        visited.add(value);
        queue.push(value);
      }
    });
  }

  return found;
};

console.log(BFS(graph.keys().next().value, "S"));
