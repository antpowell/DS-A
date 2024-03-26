// Write a function to detect if a singularly linked list circular

type Node = {
  next: Node | null;
  head: Node | null;
};

export const isCircular = (node: Node) => {
  if (node.next === null || node.head === null) {
    return false;
  }

  let pointer1 = node.head;
  let pointer2 = node.next.head;

  while (pointer1 !== null || pointer2 !== null) {
    if (pointer2 === pointer1) {
      return true;
    } else if (pointer1.next === null || pointer2.next === null) {
      return false;
    } else {
      pointer1 = node.next.head;
      pointer2 = node.next.next.head;
    }
  }

  return false;
};
