class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val);
  }
  insertVal(val) {
    const insert = (val, currNode = this.root) => {
      if (val === currNode.value) {
        return;
      }
      if (val > currNode.value) {
        //put right
        if (!currNode.right) {
          currNode.right = new Node(val);
        } else {
          insert(val, currNode.right);
        }
      } else {
        //put left
        if (!currNode.left) {
          currNode.left = new Node(val);
        } else {
          insert(val, currNode.left);
        }
      }
    };
    insert(val);
  }
  lookup(val) {
    const find = (val, currNode = this.root) => {
      console.log(val, currNode);
      console.log("==============================");
      if (!currNode) {
        return false;
      }
      if (val === currNode.value) {
        return true;
      } else if (val > currNode.value) {
        return find(val, currNode.right);
      } else {
        return find(val, currNode.left);
      }
    };
    return find(val);
  }
  //summing all values, depth-first
  dfsum() {
    const dfs = (stack = [this.root], tot = 0) => {
      while (stack.length) {
        const currNode = stack.pop();
        console.log(currNode.value);
        tot += currNode.value;
        if (currNode.left) {
          stack.push(currNode.left);
        }
        if (currNode.right) {
          stack.push(currNode.right);
        }
      }
      return tot;
    };
    return dfs();
  }
  //summing all values, breadth-first
  bfsum() {
    const bfs = (queue = [this.root], tot = 0) => {
      while (queue.length) {
        const currNode = queue.shift();
        console.log(currNode.value);
        tot += currNode.value;
        if (currNode.left) {
          queue.push(currNode.left);
        }
        if (currNode.right) {
          queue.push(currNode.right);
        }
      }
      return tot;
    };
    return bfs();
  }
}

const myBst = new BinarySearchTree(10);
console.log(myBst);
myBst.insertVal(5);
myBst.insertVal(15);
myBst.insertVal(3);
myBst.insertVal(1);
myBst.insertVal(8);
myBst.insertVal(7);
myBst.insertVal(9);
myBst.insertVal(13);
myBst.insertVal(20);
myBst.insertVal(18);
console.log(myBst.lookup(100));
console.log(myBst.lookup(5));
console.log(myBst.dfsum());
console.log("==============================");
console.log("==============================");
console.log(myBst.bfsum());
