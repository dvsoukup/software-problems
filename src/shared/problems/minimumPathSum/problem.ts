export default class MinPathSum {
  private grid: number[][] = [];

  public constructor(grid: number[][]) {
    this.grid = grid;
  }

  check = (i: number, j: number) => {
    if (i > this.grid.length - 1 || j > this.grid[0].length - 1) {
      return Infinity;
    }
    return this.grid[i][j];
  };

  minPathSum() {
    if (this.grid.length === 0 || this.grid[0].length === 0) {
      return 0;
    }

    let i = this.grid.length - 1;
    let j = this.grid[0].length - 1;

    while (true) {
      if (j < 0) {
        i--;
        j = this.grid[0].length - 1;
      }
      if (i < 0) {
        break;
      }

      let sum = Math.min(this.check(i + 1, j), this.check(i, j + 1));
      sum = sum === Infinity ? 0 : sum;
      this.grid[i][j] = this.grid[i][j] + sum;
      j--;
    }

    return this.grid[0][0];
  }
}

export function minPathSum(grid: number[][]): number {
  let finder = new MinPathSum(grid);
  return finder.minPathSum();
}
