type Weights = {
  [key: string]: number | null;
};

export type Graph = {
  [key: string]: {
    [key: string]: number;
  };
};

type Tracking = {
  [key: string]: string | null;
};

const graph = {
  start: { A: 5, B: 2 },
  A: { C: 4, D: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, finish: 3 },
  D: { finish: 1 },
  finish: {},
};

export class Dijkstra {
  run(graph: Graph) {
    // track lowest cost to reach each node
    const weights = Object.assign({ finish: Infinity }, graph.start);

    // track paths
    const parents: Tracking = { finish: null };

    for (let child in graph.start) {
      parents[child] = "start";
    }

    // track nodes that have already been processed
    const processed: string[] = [];
    //Next, we’ll set the initial value of the node being processed
    //using the lowestCostNode function. Then, we’ll begin a while loop
    //which will continuously look for the cheapest node.
    let node = this.findLowestWeightNode(weights, processed);

    while (node) {
      //Get the weight of the current node
      let weight = weights[node];
      //Get all the neighbors of current node
      let children = graph[node];
      //Loop through each of the children, and calculate the weight to reach that child node. We'll update the weight of that node in the weights object if it is lowest or the ONLY weight available
      for (let n in children) {
        let newWeight = weight + children[n];
        if (!weights[n] || weights[n] > newWeight) {
          weights[n] = newWeight;
          parents[n] = node;
        }
      }
      //push processed data into its data structure
      processed.push(node);
      // repeat until we processed all of our nodes.
      node = this.findLowestWeightNode(weights, processed);
    }

    let optimalPath = ["finish"];
    let parent = parents.finish;
    while (parent) {
      optimalPath.unshift(parent);
      parent = parents[parent]; // add parent to start of path array
    }

    const results = {
      distance: weights.finish,
      path: optimalPath,
    };

    return results;
  }

  findLowestWeightNode = (weights: Weights, processed: any) => {
    const knownNodes = Object.keys(weights);

    const lowestWeightNode = knownNodes.reduce(
      (lowest: string | null, node) => {
        if (lowest === null && !processed.includes(node)) {
          lowest = node;
        }
        if (weights[node]! < weights[lowest!]! && !processed.includes(node)) {
          lowest = node;
        }
        return lowest;
      },
      null
    );

    return lowestWeightNode;
  };
}
