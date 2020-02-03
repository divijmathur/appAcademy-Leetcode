function lucasNumber (n) {
  if (n === 0) return 2
  if (n === 1) return 1
  return lucasNumber(n - 1) + lucasNumber(n - 2)
}

function lucasNumberMemo(n,memo={}){
  if(n in memo) return memo[n];
  if(n===0) return 2;
  if (n===1) return 1;
  return lucasNumberMemo(n-1,memo) + lucasNumberMemo(n-2,memo);
}

function sumArray (array) {
  if (array.length === 0) return 0
  const first = array[0]
  const remaining = array.slice(1)
  return first + sumArray(remaining)
}

function reverseString (str) {
  if (str.length === 0) return str
  return reverseString(str.slice(1)) + str[0]
}

function pow (base, exponent) {
  if (exponent === 0) return 1
  if (exponent < 0) return 1 / pow(base, -exponent)
  return base * pow(base, exponent - 1)
}

function flatten (data) {
  if (!Array.isArray(data)) return [data]
  const allElements = []
  data.forEach(el => {
    const flattened = flatten(el)
    allElements.push(...flattened)
  })
  return allElements
}

function fileFinder (directories, targetFile) {
  for (const key in directories) {
    if (key === targetFile || fileFinder(directories[key], targetFile)) {
      return true
    }
  }
  return false
}

let memo = {};
function factorial(n){
  // if argument is already in memo, return the value stored in the memo
  if (n in memo) return memo[n];
  if(n===1) return 1;
  // if argument is not in memo, calculate recursively and store the value in the memo
  memo[n] = n * factorial(n-1);
  return memo[n];
}

function fastFib(n,memo={}){
  if(n in memo) return memo[n];
  if(n === 1 || n ===2) return 1;
  memo[n] = fastFib(n-1,memo) + fastFib(n-2,memo);
  return memo[n];
}

function minChange(coins,amount,memo={}){
  if(amount in memo) return memo[amount];
  if(amount === 0) return 0;
  let numCoins=[];
  coins.forEach((coin) => {
    if(coin <= amount){
      numCoins.push(minChange(coins,amount-coin,memo) + 1);
    }
    
  });
  memo[amount]= Math.min(...numCoins);
  return memo[amount];
}

function change(amount,coins,memo={}){
  let key = amount + '-' + coins;
  if (key in memo) return memo[key];
  if (amount === 0) return 1;
  let currentCoin = coins[coins.length-1];
  let total = 0;
  for(var qty=0;qty*currentCoin <= amount;qty++){
    total += change(amount-qty * currentCoin,coins.slice(0,-1));
  }
  memo[key] = total;
  return memo[key];
}


// Given a linked list, swap every two adjacent nodes and return its head.

// Given 1->2->3->4, you should return the list as 2->1->4->3.


var swapPairs = function(head){
  if(!head || !head.next) return head;
  const nextHead = head.next.next;
  head.next.next=head;
  head=head.next;
  head.next.next=swapPairs(nextHead);
  return head;
}
// Pascal's Triangle I
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

var generate = function(numRows){
  if(numRows===0){
    return [];
  }
  const result = [];
  for(let i = 0; i < numRows;i++){
    let currRow=[];
    for(let j =0; j <= i;j++){
      if(j===0||j===i){
        currRow.push(1);
      }else {
        currRow.push(result[i-1][j-1] + result[i-1][j]);
      }
    }
    result.push(currRow);
  }
  return result;
}
// Pascal's Triangle II
// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

var getRow = function(rowIndex) {
    var row = [1];
    for(var i = 1; i <= rowIndex; i++){
      for(var j = i; j > 0;j--){
        if(j === i){
          row[j] = 1;
        }else {
          row[j] = row[j-1] + row[j];
        }
      }
    }
    return row;
};

// Reverse a singly linked list.
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head){
  if(head || head.next === null) return head;
  var p = reverseList(head.next);
  head.next.next=head;
  head.next=null;
  return p;
}



// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

var climbStairs = function(n){
  if(n===0) return 0;
  if(n===1) return 1;
  if(n===2) return 2;
  var arr = [1,2];
  for(var i = 2; i < n; i++){
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n-1];
}

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

var maxDepth = function(root){
  return (root === null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right)));
}

var myPow = function(x,n){
  if(n===0) return 1;
  let pow = Math.abs(n);
  let result = pow % 2 === 0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
  return n < 0 ? 1/result : result;
}

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

var mergeTwoList = (l1,l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  if(l1.val<l2.val){
    l1.next=mergeTwoList(l1.next,l2);
    return l1;
  }
  l2.next=mergeTwoList(l1,l2.next);
  return l2;
}
// On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

// Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).

var kthGrammar = function(N,K){
  let binary = (k-1).toString(2);
  let array = binary.split('');
  let count = 0;
  for(var i = 0; i < array.length;i++){
    if(array[i]==='1'){
      count++;
    }
  }
  return count & 1;
};

// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

var generateTrees = function(n,l=1,r=n,res=[]){
  for(let i = 1; i<= r; i++){
    for(const left of generateTrees(n,l,i-1)){
      for(const right of generateTrees(n,i+1,r)){
        res.push({val: i,left,right})
      }
    }
  }
  return n ? res.length ? res : [null] : [];
}

