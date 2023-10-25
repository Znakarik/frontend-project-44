export class GcdFinder {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  find = () => {
    while (this.right) {
      const tmp = this.right;
      this.right = this.left % this.right;
      this.left = tmp;
    }
    return this.left;
  };
}
