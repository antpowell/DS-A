---
runme:
  id: 01HWZPPQPPZVC919D573S0EVSD
  version: v3
---

```sh {"id":"01HWZPPVBV6VQ9770MRDHCKT4T"}
``` typescript
  //heap/queue is first in first out
  const heap = [];

  heap.push(11);
  heap.push(442);
  heap.push(55);
  heap.push(7);
  // heap.push(23);

  // console.log(`heap: ${heap}`);

  // console.log(heap.length / heap.length - 1);

  // ❌ not valid; wrong implementation
  // const popFromFront = (arr: number[]) => {
  //   for (let i = arr.length - 1; i > -1; i--) {
  //     if (i - 1 > -1) {
  //       arr[i] = arr[i - 1];
  //     }
  //   }
  //   return arr;
  // };

  const popFromFront = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) { // O(n)
      if (i + 1 < arr.length) { // O(1)
        arr[i] = arr[i + 1]; // O(1)
      }
    }
    arr.pop(); // O(1)
    return arr; // O(1)
  }; // O(n) + O(1)+ O(1)+ O(1)+ O(1) ~> O(n) + 4(O(1)) ~> O(n) + 4 ~> O(n)

  console.log(popFromFront(heap));

  // heap.pop();
  // [0, 1, 2, 3];
  // console.log(`heap: ${heap}`);

  ```
```