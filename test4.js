let expAmt=document.getElementById('expAmt');
let expDes=document.getElementById('expDes');
let expCat=document.getElementById('expCat');
let btn=document.getElementById('btn');
let list =document.getElementById('list');
btn.addEventListener('click',()=>{
 let expAmtVal=expAmt.value;
 let expDesVal=expDes.value;
 let expCatVal=expCat.value;
 let li=document.createElement('li');
 li.textContent=`${expAmtVal} - ${expDesVal} - ${expCatVal}`;
 let span=document.createElement('span');
 let delBtn=document.createElement('button');
 delBtn.textContent='X';
 let editBtn=document.createElement('button');
 editBtn.textContent='edit'
 editBtn.addEventListener('click',()=>{
      expAmt.value=expAmtVal;
      expDes.value=expDesVal;
      expCat.value=expCatVal;
      list.removeChild(li);
 })
 li.appendChild(span);
 li.appendChild(delBtn);
 li.appendChild(editBtn)
 list.appendChild(li)
 delBtn.addEventListener('click',()=>{
      list.removeChild(li);
      localStorage.removeItem(`${expCatVal}`)
      
 })
 
 let obj={
      [expAmt.name]:expAmtVal,
      [expDes.name]:expDesVal,
      [expCat.name]:expCatVal,
 }
localStorage.setItem(`${expCatVal}`,JSON.stringify(obj));
expAmt.value='';
      expDes.value='';
      expCat.value='none';
})



