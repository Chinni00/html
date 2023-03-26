class Node{
    constructor(ele){
        this.val=ele;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    push(ele){
        let node=new Node(ele);
        if(!this.head){
            this.head=node;
            this.size++;
        }else{
            let curr=this.head;
            while(curr.next){
                  curr=curr.next;
            }
            curr.next=node;
            this.size++;
            
        }
    }
    remove(ele){
           if(!this.head){
            return;
           }
           while(this.head && this.head.val==ele){
            this.head=this.head.next;
            this.size--;
           }
           let curr=this.head;
           while(curr && curr.next){
            if(curr.next.val==ele){
                curr.next=curr.next.next
                this.size--;
            }else{
                curr=curr.next;
            }
           }

    }
    
    insertAt(index,ele){
        if (index<0 || index>this.size){
               return 
        }
        let curr=this.head;
        let node=new Node(ele);
        if(index==0){
              this.head=node;
              this.head.next=curr;
            this.size++
        }else{
           
            var prev;
            for(var i=0;i<index;i++){
                 prev=curr;
                curr=curr.next;
            }
            prev.next=node;
            node.next=curr;
            this.size++;
        }
    }

    getMiddle(){
        let curr=this.head;
        if(this.size%2!=0){
            for(var i=0;i<Math.floor(this.size/2);i++){
                curr=curr.next;
            }
            return curr.val
        }else{
            for(var i=0;i<Math.floor(this.size/2)-1;i++){
                curr=curr.next;
            }
            return curr.val;
        }
    }

}



let obj1=new LinkedList();
obj1.push(0);
obj1.push(2);
obj1.push(4);
let obj2=new LinkedList();
obj2.push(1);
obj2.push(3);
obj2.push(5);


merge=(p,q)=>{
  const mergedList=new LinkedList();
  var curr1=p.head;
  var curr2=q.head;
  while(curr1 && curr2){
    if(curr1.val<=curr2.val){
        mergedList.push(curr1.val);
        curr1=curr1.next;
    }else{
        mergedList.push(curr2.val);
        curr2=curr2.next;
    }
  }
  while(curr1){
    mergedList.push(curr1.val);
    curr1=curr1.next
  }
  while(curr2){
    mergedList.push(curr2.val);
    curr2=curr2.next
  }
  return mergedList;
}
mergedList=merge(obj1,obj2);
reversedList=(q)=>{
    let curr=q.head;
    let prev=null
    while(curr){
        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
}
let obj3=new LinkedList();
obj3.push(1);
obj3.push(2);
obj3.push(3);
obj3.push(2);
obj3.push(1);

// isPalindrome=(p)=>{
//     let curr=p.head
//     let temp=p.head
//     let stack=[]
//     while(temp){
//        stack.push(temp.val);
//        temp=temp.next;
//     }
//     while(curr){
//         if(curr.val==stack[stack.length-1]){
//             stack.pop()
//         }else{
//             return false;
//         }
//         return true;
//     }
// }
function isPalindrome(p){
    let slow=p.head;
    let fast=p.head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next
    }

    let prev=null;
    while(slow){
        let next=slow.next;
        slow.next=prev;
        prev=slow;
        slow=next
    }
    let curr=p.head;
    while(prev){
        if(curr.val!=prev.val){
            return false;
        }
        prev=prev.next;
        curr=curr.next;
    }
    return true;

}
let obj4=new LinkedList();
obj4.push(1);
obj4.push(2);
obj4.push(3);
obj4.push(4);
obj4.push(5);
console.log(obj4)
// //function rotateList(p,index){
//     let curr=p.head;
//     let prev;
//     let temp=p.head;
//     while(temp.next){
//         temp=temp.next
//     }
//      temp.next=p.head;
//     for(i=0;i<=index;i++){
//         prev=curr;
//         curr=curr.next;
//     }
//     prev.next=null;
//     p.head=curr;
// return p;
// //}
function rotateList(head,rotations){
    if(!head.head || !head.head.next || rotations===0 ){
        return head;
    }
    let temp=head.head;
    while(temp.next){
        temp=temp.next;
    }
    temp.next=head.head;

    k=rotations%this.size;
    let newTail=head.head;
    for(i=0;i<this.size-k-1;i++){
        newTail=newTail.next
    }
    newHead=newTail.next;
    newTail.next=null;
    return newHead;
}
console.log(rotateList(obj4,2))