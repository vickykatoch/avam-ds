import { Node } from "./node";

/**
 * Compares left value with right
 * returns 0 if both left & right values are equal
 * returns 1 if left value is greater than right
 * returns -1 if left value is smaller than right
 */
export type Comparer<T> = (left: T, right: T) => 1 | 0 | -1;

export class BST<T> {
  //#region LOCAL STATE
  private head?: Node<T>;
  //#endregion

  //#region CTOR
  constructor(private comparer: Comparer<T>) {}
  //#endregion

  //#region PUBLIC INTERFACE
  add(item: T): void {
    if (!this.head) {
      this.head = new Node(item);
    } else {
      this.insert(this.head, item);
    }
  }
  update(item: T): void {}

  remove(item: T): void {
    
  }
  //#endregion

  //#region HELPER METHODS
  private insert(node: Node<T>, value: T) {
    if (this.comparer(value, node.value) < 0) {
      node.left ? this.insert(node.left, value) : (node.left = new Node(value));
    } else {
      node.right
        ? this.insert(node.right, value)
        : (node.right = new Node(value));
    }
  }
  
  //#endregion
}

const valueComparer = (left: number, right: number): 1 | 0 | -1 => {
  if (left === right) {
    return 0;
  }
  return left < right ? -1 : 1;
};

const bst = new BST<number>(valueComparer);
bst.add(100);
bst.add(90);
bst.add(110);
bst.add(200);
bst.add(25);
bst.add(39);
bst.add(165);

console.log(bst);
