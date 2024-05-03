---
runme:
  id: 01HFXK0XRE85BBK6G3XY2R5YVD
  version: v3
---

## Algorithm Tips To Remember

- If you have an O(n^2) algorithm, you can often improve it to O(n log n) by sorting the input first.
- Often if an algorithm is O(n^2) in time but is O(1) space, it can be improved to O(n) time by increasing the space to O(n), generally using a hash table.
- 

## Backtracking

- Is the combination of brute force and recursion.
- Is very high on time complexity unless you memoize prior results

### How to identify backtracking problem?

- Must be required to make a choice between different possibilities
- Must have an end goal to reach
- If terms like 'generate all' or 'compute all' or 'find all' are used, consider using backtracking

### Steps to implement backtracking

1. Identify subproblem (can the larger problem be broken down to a smaller problem that can be solved and solving that smaller problem solve the larger problem)
2. Identify constraints (go left or right, to take a value or not, to input a value or not)
3. Identify end condition or exit condition for recursive function, **subproblem**, AND exit condition for overall problem
4. Identify backtracking state (if decision doesn't find answer what state does the initial subproblem return too)
5. Identify "on/off, take/don't take, use/don't use" states. Places where you make the decision to take or use an element and not take or use the element
6. Identify recursive step
7. Identify what computation can be "saved" to reduce time complexity
8. 

## DFS (Depth-first search)