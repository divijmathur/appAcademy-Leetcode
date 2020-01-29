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
  let [prev,current] = [null,head];
  while(current){
    [current.next,prev,current] = [prev,current,current.next];
  }
  return prev;
}