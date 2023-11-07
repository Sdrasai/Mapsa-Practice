class Graph {
  #adjMatrix = new Map();
  constructor(directed = false) {
    this.directed = directed;
  }

  addNode(nodeName) {
    if (this.#adjMatrix.has(nodeName)) {
      throw new Error(`Node ${nodeName} already exists...`);
    } else {
      this.#adjMatrix.set(nodeName, []);
    }
  }

  isEdgeConnected(node, edge) {
    return this.#adjMatrix.get(node).includes(edge);
  }

  addEdge(node1, node2) {
    if (!this.#adjMatrix.has(node1) || !this.#adjMatrix.has(node2)) {
      throw new Error("One or both nodes do not exist...");
    } else if (this.#adjMatrix.get(node1).includes(node2)) {
      throw new Error("Edge already exists...");
    } else {
      this.#adjMatrix.get(node1).push(node2);
      if (!this.directed) {
        this.#adjMatrix.get(node2).push(node1);
      }
    }
  }
  areAllNodesConnected() {
    const visited = new Set();
    const nodes = Array.from(this.#adjMatrix.keys());

    const dfs = (node) => {
      visited.add(node);
      this.#adjMatrix.get(node).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      });
    };

    dfs(nodes[0]);

    return nodes.every((node) => visited.has(node));
  }

  showGraph() {
    console.log(this.#adjMatrix);
  }
}

const g1 = new Graph();
g1.addNode("a");
g1.addNode("b");
g1.addNode("c");
g1.addEdge("a", "b");
g1.addEdge("a", "c");
const isConnected = g1.isEdgeConnected("c", "a");
console.log(`Two Node Connection Status : ${isConnected}`);
console.log("Graph Connection Status : ", g1.areAllNodesConnected());
g1.showGraph();
