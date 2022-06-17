// export class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// export default class Main {
//   private root: TreeNode;
//   private targetSum: Number;

//   public constructor(root: TreeNode, targetSum: number) {
//     this.root = root;
//     this.targetSum = targetSum;
//   }

//   public pathSum(): number[][] {}
// }

// export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
//   return new Main(root, targetSum).pathSum();
// }

// export function arrayToTree(input: Array<number | null>): TreeNode | null {
//   if (input.length === 0) {
//     return null;
//   }

//   for (let i = 0; i < input.length; i++) {

//     let leftNodeIndex = i * 2 + 1;
//     let rightNodeIndex = i * 2 + 2;

//     if (input[i] === null) {
//       continue;
//     }

//     let leftNode =
//       input[leftNodeIndex] !== null
//         ? new TreeNode(input[leftNodeIndex]!, null, null)
//         : null;

//     let rightNode =
//       input[rightNodeIndex] !== null
//         ? new TreeNode(input[rightNodeIndex]!, null, null)
//         : null;

//     let nodeVal = input[i];

//     let node = new TreeNode(nodeVal!, leftNode, rightNode);

//     i = +nodeLevel + 1;
//   }

//   return null;
// }

// function buildNode(nodeIndex, node, array) {

// };
