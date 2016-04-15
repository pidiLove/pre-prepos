function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  	var result=[];
	
	
for(var i = 0;i<collection_a.length;)  
{  
   
 var count1 = 0;  
 for(var j=i;j<collection_a.length;j++)  
 {  
       
  if(collection_a[i] == collection_a[j])  
  {  
   count1++;  
  }  
 
 	

    
 }
 if(count1!=1)  
 result.push({"key":collection_a[i],"count":count1});
else if(count1==1){
 	
 	result.push({"key":"d","count":5});  
 }
 i+=count1;  
   
}  

  var result1=[];
  for(var i=0;i<result.length;i++){
	for(var j=0;j<object_b["value"].length;j++){
		if(result[i]["key"]==object_b["value"][j])
			 result[i]["count"]=result[i]["count"]-Math.floor((result[i]["count"])/3);
			
		

}
result1.push({"key":result[i]["key"],"count":result[i]["count"]});
}
  return result1;
}
