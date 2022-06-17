class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default class AddTwoNumbers {
  public addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
  ): ListNode | null {
    let result = this.calcResultList(l1, l2, [], 0);
    return this.arrayToLinkedList(result);
  }

  private calcResultList(
    node1: ListNode | null,
    node2: ListNode | null,
    results: number[],
    carry: number
  ): number[] {
    let val1 = 0;
    let val2 = 0;
    let newCarry = 0;

    if (node1) {
      val1 += node1.val;
    }

    if (node2) {
      val2 += node2.val;
    }

    let sum = val1 + val2 + carry;

    if (sum < 10) {
      results.push(sum);
    } else {
      let modResult = sum % 10;
      results.push(modResult);
      newCarry = parseInt(
        sum.toString().substring(0, sum.toString().length - 1)
      );
    }

    if (!node1?.next && !node2?.next) {
      if (newCarry > 0) {
        results.push(newCarry);
      }
      return results;
    }

    return this.calcResultList(
      node1?.next ?? null,
      node2?.next ?? null,
      results,
      newCarry
    );
  }

  public arrayToLinkedList(arr: number[]) {
    let list = new ListNode(arr[0]);

    let selectedNode = list;
    for (let i = 1; i < arr.length; i++) {
      selectedNode.next = new ListNode(arr[i]);
      selectedNode = selectedNode.next;
    }

    return list;
  }
}
