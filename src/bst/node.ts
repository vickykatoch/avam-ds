export class Node<T> {
  constructor(public value: T, public left?: Node<T>, public right?: Node<T>) {}
}
