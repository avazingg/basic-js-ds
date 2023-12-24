const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }
  root() {
   return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addElement(this.treeRoot, data);
    
    function addElement(node, data) {
      if (!node){
        return new Node (data);
      }
      if (node.data === data){
        return node;
      }
      if (data > node.data){
        node.right = addElement(node.right, data);
      }
      else{
        node.left = addElement(node.left, data);
      }
      return node;
    }
    
  }

  has(data) {
    return hasElement (this.treeRoot, data);
    function hasElement(node, data) {
      if (!node){
        return false;
      }
      if (node.data == data){
        return true;
      }
      if (data <  node.data){
         return hasElement (node.left, data);
      }
      else {
         return hasElement (node.right, data);
      }
    }

  }

  find(data) {
    return findElement (this.treeRoot, data);
    function findElement(node, data) {
      if (!node){
        return null;
      }
      if (node.data === data){
        return node;
      }
      if (data < node.data){
        return findElement (node.left, data);
      }
      else {
        return findElement (node.right, data);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let min = this.treeRoot;
    while (min.left){
       min = min.left;
      }
  return min.data;
  
}

max() {
    let max = this.treeRoot;
    while (max.right){
        max = max.right
    }
    return max.data;
}
}

module.exports = {
  BinarySearchTree
};