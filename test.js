// // // // // class Node{
// // // // //     constructor(a){
// // // // //         this.prev=null;
// // // // //         this.value=a;
// // // // //         this.next=null;
        
// // // // //     }
// // // // // }
// // // // // class DLinkedList{
// // // // //     constructor(){
// // // // //         this.head=null;
// // // // //         this.size=0
// // // // //     }
// // // // //     add(ele){
// // // // //       let node=new Node(ele);
// // // // //       if(this.head==null){
// // // // //         this.head=node;
// // // // //         node=this.head;
// // // // //       }else {
// // // // //          let curr=this.head;
// // // // //          while(curr.next!=null){
// // // // //             curr=curr.next;
// // // // //          }
// // // // //          curr.next=node;
// // // // //          node.prev=curr;
// // // // //       }
// // // // //       this.size++;
// // // // //     }
// // // // //     addAt(index,value){
// // // // //         if(index<0 || index>this.size){
// // // // //             return false;
// // // // //         }else{
            
// // // // //             let node=new Node(value);
// // // // //             if(index==0){
// // // // //                  node.next=this.head;
// // // // //                  this.head.prev=node;
// // // // //                  this.head=node;
// // // // //             }else{
// // // // //                 let curr=this.head;
// // // // //                 let previ;
// // // // //                 for(var i=0;i<index;i++){
// // // // //                     previ=curr;
// // // // //                      curr=curr.next;
// // // // //                 }
// // // // //                 previ.next=node;
// // // // //                 node.next=curr;
// // // // //                 curr.prev=node;
// // // // //                 node.prev=previ;
// // // // //             }
// // // // //             this.size++;
// // // // //         }
// // // // //     }
// // // // //     remove(){
// // // // //         if(this.head.next==null){
// // // // //             this.head=null;
// // // // //         }else{
// // // // //               let curr=this.head;
// // // // //               let pervi;
// // // // //               while(curr.next!=null){
// // // // //                 pervi=curr;
// // // // //                 curr=curr.next;
// // // // //               }
              
// // // // //               pervi.next=null;
// // // // //         }
// // // // //         this.size--;
// // // // //     }
// // // // //     removeAt(index){
// // // // //         if(index<0 && index>this.size){
// // // // //             return false;
// // // // //         }else{
// // // // //             let curr=this.head;
// // // // //             let previ;
// // // // //             if(index==0){
// // // // //                 this.head=curr.next;
// // // // //                 this.head.prev=null;
// // // // //             }else{
// // // // //                 for(var i=0;i<index;i++){
// // // // //                     previ=curr;
// // // // //                     curr=curr.next;
// // // // //                 }
// // // // //                 previ.next=curr.next;
// // // // //                 curr.next.prev=previ;
// // // // //             }
// // // // //             this.size--;
// // // // //         }
// // // // //       return -1;
// // // // //     }
// // // // //     isEmpty(){
// // // // //         return this.size===0;
// // // // //     }
// // // // //     size(){
// // // // //         return this.size;
// // // // //     }
// // // // //     print(){
// // // // //        var curr=this.head;
// // // // //         while(curr!=null){
// // // // //             console.log(curr.value);
// // // // //             curr=curr.next;
// // // // //         }
// // // // //     }
   
// // // // // }
// // // // // let obj=new DLinkedList();
// // // // // obj.add(4);
// // // // // obj.add(5);
// // // // // obj.add(6);


// // // // // obj.removeAt(0);
// // // // // //obj.remove();
// // // // // //obj.removeAt()
// // // // // obj.print()
// // // // // console.log(obj)

// // // // /*
// // // // class Node {
// // // //     constructor(data) {
// // // //       this.data = data;
// // // //       this.next = null;
// // // //     }
// // // //   }
  
// // // //   class LinkedList {
// // // //     constructor() {
// // // //       this.head = null;
// // // //     }
  
// // // //     add(data) {
// // // //       const node = new Node(data);
// // // //       if (!this.head) {
// // // //         this.head = node;
// // // //       } else {
// // // //         let current = this.head;
// // // //         while (current.next) {
// // // //           current = current.next;
// // // //         }
// // // //         current.next = node;
// // // //       }
// // // //     }
  
// // // //     remove(data) {
// // // //       if (!this.head) {
// // // //         return;
// // // //       }
  
// // // //       while (this.head && this.head.data === data) {
// // // //         this.head = this.head.next;
// // // //       }
  
// // // //       let current = this.head;
// // // //       while (current && current.next) {
// // // //         if (current.next.data === data) {
// // // //           current.next = current.next.next;
// // // //         } else {
// // // //           current = current.next;
// // // //         }
// // // //       }
// // // //     }
  
// // // //     print() {
// // // //       let current = this.head;
// // // //       while (current) {
// // // //         console.log(current.data);
// // // //         current = current.next;
// // // //       }
// // // //     }
// // // //   }
  
// // // //   // Example usage
// // // //   const list = new LinkedList();
// // // //   list.add(7);
// // // //   list.add(7);
// // // //   list.add(7);
// // // //   list.add(7);
// // // //   list.add(7);
// // // //   list.add(7);
// // // //   list.add(7);
// // // //   list.add(7);
// // // //   list.print(); // Output: 1 2 3 2 4 2 5 2
// // // //   list.remove(7);
// // // //   list.print(); // Output: 1 3 4 5
// // // //   */
// // // //  //reverse LinkedList
// // // //  class Node{
// // // //   constructor(a){
// // // //       this.value=a;
// // // //       this.next=null;
// // // //   }
// // // // }
// // // // class LinkedList{
// // // //   constructor(){
// // // //       this.head=null;
// // // //   }
// // // //   add(ele){
// // // //       let node=new Node(ele);
// // // //       if(this.head==null){
// // // //           this.head=node;
// // // //       }else{
// // // //           let curr=this.head;
// // // //           while(curr.next!=null){
// // // //               curr=curr.next;
// // // //           }
// // // //           curr.next=node;
// // // //       }
// // // //   }
// // // // }

// // // // function reverseLinkedList(head) {
// // // // let current = head;
// // // // let prev = null;
// // // // while (current) {
// // // //   const next = current.next;
// // // //   current.next = prev;
// // // //   prev = current;
// // // //   current = next;
// // // // }
// // // // return prev;
// // // // }


// // // // let obj=new LinkedList();
// // // // obj.add(1);
// // // // obj.add(2);
// // // // obj.add(3);
// // // // console.log(obj.head);
// // // // reverseLinkedList(obj.head)

// // // //  ------------===============  Rotate LinkedList  =============---------------

// // // class Node{
// // //   constructor(a){
// // //     this.value=a;
// // //     this.next=null;
// // //   }
// // // }
// // // class LinkedList{
// // //   constructor(){
// // //     this.head=null;
// // //   }
// // //   add(ele){
// // //        let node=new Node(ele);
// // //           if(this.head==null){
// // //               this.head=node;
// // //           }else{
// // //               let curr=this.head;
// // //               while(curr.next!=null){
// // //                   curr=curr.next;
// // //               }
// // //               curr.next=node;
// // //           }
// // //       }
// // //     rotate(n){
// // //       if(this.head==null || this.head.next==null){
// // //         return this.head;
// // //       }
// // //       let curr=this.head;
// // //       for(var i=0;i<n;i++){
// // //         var next=curr.next;
// // //         this.head=next;
// // //         curr.next=null;
// // //         while(next.next){
// // //           next=next.next;
// // //         }
// // //         next.next=curr;
// // //       }
// // //     }
      
// // // }

// // // let obj=new LinkedList();
// // // obj.add(1);
// // // obj.add(2);
// // // obj.add(3);
// // // obj.add(4)
// // // console.log(obj.rotate(1));
// // // console.log(obj)

// // class Node{
// //   constructor(a){
// //     this.value=a;
// //     this.next=null;
// //   }
// // }
// // class LinkedList{
// //   constructor(){
// //     this.head=null;
// //   }


// //   add(ele){
// //     let node=new Node(ele);
// //     if(this.head==null){
// //       this.head=node;
// //     }else{
// //       let curr=this.head;
// //       while(curr.next){
// //         curr=curr.next;
// //       }
// //       curr.next=node;
// //     }
// //   }


// //   addAt(ele,index){
// //     if(index<0){
// //       return ;
// //     }
// //     let node=new Node(ele);
// //     let curr=this.head;
// //     if(index===0){
// //        node.next=this.head;
// //        this.head=node;
// //     }else{
// //       for(var i=1;i<index;i++){
// //         curr=curr.next
// //       }
// //       node.next=curr.next;
// //       curr.next=node;
// //     }
// //   }
// //   removeAt(index){
// //       if(index==0){
// //         this.head=this.head.next;
// //       }else{
// //         let curr=this.head;
// //         for(var i=1;i<index;i++){
// //           curr=curr.next;
// //         }
// //         curr.next=curr.next.next
// //       }
// //   }
 
// //   remove(ele){
// //     let curr=this.head;
// //     let prev=null;
// //     while(curr){
// //       if(curr.value==ele){
// //         if(prev==null){
// //           this.head=curr.next;
// //         }else{
// //           prev.next=curr.next
// //         }
// //       }
// //       prev=curr;
// //       curr=curr.next;
// //     }
// //   }
  
// //   reverse(){
// //     let curr=this.head;
// //     let prev=null;
// //     while(curr){
// //       const next=curr.next;
// //       curr.next=prev;
// //       prev=curr;
// //       curr=next;
// //     }
// //     return prev;
// //   }

// //   isPalindrome(){
// //     /* ---by using stacks
// //     let stack=[];
// //     let curr=this.head;
// //     while(curr){
// //       stack.push(curr.value);
// //       curr=curr.next;
// //     }
// //     let temp=this.head;
// //     while(temp){
// //       if(temp.value==stack[stack.length-1]){
// //         stack.pop();
// //       }else{
// //         return false;
// //       }
// //       return true;
// //     } */

// //     // another approach  using hare and tortoise method
// //     let slow=this.head;
// //     let fast=this.head;
// //     while(fast && fast.next){
// //       slow=slow.next;
// //       fast=fast.next.next;
// //     }
// //     let prev=null;
// //     while(slow){
// //       let next=slow.next;
// //       slow.next=prev;
// //       prev=slow;
// //       slow=next;
// //     }
// //     while(prev!=null){
// //       //let curr=this.head;
// //       if(this.head.value!==prev.value){
// //         return false;
// //       }
// //       this.head=this.head.next;
// //       prev=prev.next;
// //     }
// //    return true;
// //   }

// //   print(){
// //     let curr=this.head;
// //     while(curr){
// //       console.log(curr.value);
// //       curr=curr.next;
// //     }
// //   }
// // }
// // let rotateList=(head,k)=>{
// //    this.head=head.head;
// //   if(head==null || k==0 ){
// //     return head;
// //   }
// //     let len=1;
// //     let curr=head;
// //     while(curr.next){
// //          curr=curr.next;
// //          len++;
// //     }

// //     let newHeadIndex=len-(k%len);
// //     if(newHeadIndex==len){
// //       return head;
// //     }
// //     curr.next=head;
// //     let newTrail=curr;
// //     for(i=0;i<newHeadIndex;i++){
// //       newTrail=newTrail.next;
// //     }
// //     let newHead=newTrail.next;
// //     newTrail.next=null;
// //     return newHead;
// // } 
// // let obj=new LinkedList();
// // obj.add(1);
// // obj.add(2);
// // obj.add(3);
// // obj.add(4);
// // obj.add(3);
// // obj.add(2);
// // obj.add(1);
// // //console.log(obj.isPalindrome())
// // //obj.remove(4)
// // //console.log(obj.reverse());
// // //obj.removeAt(4)
// // //obj.print();
// // //console.log(obj.head)
// // console.log(rotateList(obj,2))
// //
// //           ------------------------RECURSION------------
// // let stack=[];
// // print=(n)=>{
// //   if(n>5){
// //     return;
// //   }else{
// //     print(n+1);
// //     stack.push(n)
    
// //   }
// // }
// // print(1);
// // optimised recursion//
// // function factorial(n, acc = 1) {
// //   if (n === 0) {
// //     return acc;
// //   } else {
// //     return factorial(n - 1, n * acc);
// //   }
// // }
// // factorial(5);
// // function fibonacci(n) {
// //   if (n <= 1) {
// //     return n;
// //   } else {
// //     return fibonacci(n - 1) + fibonacci(n - 2);
// //   }
// // }

// // for (let i = 0; i < 10; i++) {
// //   console.log(fibonacci(i));
// // }
// // fibonacci(7);
// // function permutations(str) {
// //   let result = [];
  
// //   if (str.length === 1) {
// //     result.push(str);
// //     return result;
// //   }
  
// //   for (let i = 0; i < str.length; i++) {
// //     const firstChar = str[i];
// //     const charsLeft = str.substring(0, i) + str.substring(i + 1);
// //     const innerPermutations = permutations(charsLeft);
// //     for (let j = 0; j < innerPermutations.length; j++) {
// //       result.push(firstChar + innerPermutations[j]);
// //     }
// //   }
// //   return result;
// // }
// // permutations('abc')
// // function printSubsequences(arr, index = 0, subsequence = []) {
// //   if (index === arr.length) {
// //    console.log(subsequence);
// //    return;
// //   }
// //   printSubsequences(arr, index + 1, [...subsequence, arr[index]]);
// //   printSubsequences(arr, index + 1, subsequence);
// //  }
// //  const arr = [1, 2, 3];
// //  printSubsequences(arr);
// // subSeq=(arr)=>{
// //   if(arr.length===0){
// //     return [[]];
// //   }
// //   const lastNum=arr[arr.length-1];
// //   const seqWithOutLastNum=subSeq(arr.slice(0,-1));
// //   const seqWithLast=seqWithOutLastNum.map((seq)=>[...seq,lastNum]);
// //   return [...seqWithOutLastNum,...seqWithLast]

// // }
// // console.log(subSeq([1,2,3]))
// //                 Merge Sort
// function mergedSort(arr){
//   if(arr.length<=1){
//     return arr;
//   }
//   const mid = Math.floor(arr.length/2);
//   const left = arr.slice(0,mid);
//   const right = arr.slice(mid);

//   const sortedLeft = mergedSort(left);
//   const sortedRight = mergedSort(right);

//   return merge(sortedLeft,sortedRight);
// }

// function merge(left,right){
//    let res=[];
//    let i=0;
//    let j=0;
 
//   while(i<left.length && j<right.length){
//     if(left[i]<right[j]){
//       res.push(left[i]);
//       i++
//     }else{
//       res.push(right[j]);
//       j++;
//     }
//   }
//   return res.concat(left.slice(i)).concat(right.slice(j));
// }
// let unSortedArr=[6,1,5,2,4,3];
// console.log(mergedSort(unSortedArr));
//           TIM sort 
function timSort(arr) {
  const MIN_RUN = 32;
  const len = arr.length;
  for (let i = 0; i < len; i += MIN_RUN) {
    insertionSort(arr, i, Math.min(i + MIN_RUN - 1, len - 1));
  }
  for (let size = MIN_RUN; size < len; size = 2 * size) {
    for (let left = 0; left < len; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, len - 1);
      merge(arr, left, mid, right);
    }
  }
  return arr;
}

function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > key) {
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      j--;
    }
    
  }
}

function merge(arr, left, mid, right) {
  const len1 = mid - left + 1;
  const len2 = right - mid;
  const L = new Array(len1);
  const R = new Array(len2);
  for (let i = 0; i < len1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < len2; j++) {
    R[j] = arr[mid + 1 + j];
  }
  let i = 0, j = 0, k = left;
  while (i < len1 && j < len2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < len1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < len2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
console.log(timSort([9,0,8,7,1,2,6,5,3,4,10,19,18,11,12,17,16,13,14,15,20,29,28,21,22,23,27,26,24,25,30,39,38,31,32,33,37,36,34,35]))