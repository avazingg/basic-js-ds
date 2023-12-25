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

  remove(data) {
    this.treeRoot = removeElement (this.treeRoot, data);

    function removeElement(node, data){
      if (!node){
        return null;
      }
      if (data > node.data){ //if greater than out data
        node.right = removeElement (node.right, data);
        return node;
      }
      else if (data < node.data){ //if greater than out data
        node.left = removeElement (node.left, data);
        return node;
      }
      else {
        if (!node.right && !node.left){ //check if this element is a leaf
          return null;
        }
        if (!node.right){ // check if we don't have right child
          node = node.right;
          return node;
        }
        if (!node.left){// check if we don't have left chil
          node = node.right;
          return node;
        }
        
        let minRightElement = node.right;
        while (minRightElement.left){
          minRightElement = minRightElement.left;
        }
        node.data = minRightElement.data;

        node.right = removeElement (node.right, minRightElement.data);

        return node;
      }
  }
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