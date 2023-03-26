class Node{
    constructor(ele){
        this.val=ele;
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
            node.next=null;
            this.size++;
            
        }
    }}

    let obj=new LinkedList();
    let obj2=new LinkedList();
    obj.push(2);
    obj.push(3);
    obj.push(4);
    
    obj.push(5);
    obj.push(6);
    obj.push(7);

   
  function rotateList(head,k){
    if(!head.head || !head.head.next || k==0){
        return head;
    }
    let len=1;
    let temp=head.head
    while(temp.next){
        len++;
        temp=temp.next
    }
    temp.next=head.head;

    var k=k%len
    let newTail=head.head;
    for(var i=0;i<len-k-1;i++){
         newTail=newTail.next
    }
    let newHead=newTail.next;
    newTail.next=null;
    return newHead;
  }
//console.log(obj.head.next.next.next)



removeNth=(list,n)=>{
     var dummy=new LinkedList();
     dummy.next=list.head;

     let first=dummy;
     let sec=dummy;
     for(i=0;i<n;i++){
        first=first.next;
     }
     while(first.next){
        first=first.next;
        sec=sec.next;
     }
     sec.next=sec.next.next;
     return dummy.next;

}
console.log(removeNth(obj,2).next.next)





