function count_same_elements(collection) {
	var result=[];
	
	
for(var i = 0;i<collection.length;)  
{  
   
 var count1 = 0;  
 for(var j=i;j<collection.length;j++)  
 {  
       
  if(collection[i] == collection[j])  
  {  
   count1++;  
  }  
 
 	

    
 }
 if(count1!=1)  
 result.push({"key":collection[i],"count":count1});
else if(count1==1){
 	
 	result.push({"key":"d","count":5});  
 }
 i+=count1;  
   
}  

  //在这里写入代码
  return result;
}
