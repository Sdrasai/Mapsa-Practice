class Graph {
  #adjMatrix = {};
  constructor(directed = false) {
    this.directed = directed;
  }
  addNode(nodeName) {
    if (this.#adjMatrix.hasOwnProperty(nodeName)) {
      throw new Error(`Already ${nodeName} exist...`);
    } else {
      this.#adjMatrix[nodeName] = [];
    }
  }

  addEdge(node1, node2) {
    if (
      !this.#adjMatrix.hasOwnProperty(node1) ||
      !this.#adjMatrix.hasOwnProperty(node2)
    ) {
      throw new Error("dosen't have one of them...");
    } else if (this.#adjMatrix[node1].includes(node2)) {
      throw new Error("Edge has already exsit...");
    } else {
      this.#adjMatrix[node1].push(node2);
      if (!this.directed) {
        this.#adjMatrix[node2].push(node1);
      }
    }
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
g1.showGraph();
