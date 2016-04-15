function count_same_elements(collection) {
	var result=[];
	
	/*var ary =["aaa","露露","bbb","aaa","ccc","ccc","aaa","露露","haha"];  
var res = [];  
ary.sort();  */
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
 result.push({"key":collection[i],"count":count1});  
 i+=count1;  
   
}  
//res 二维数维中保存了 值和值的重复数  
/*for(var  i = 0 ;i<res.length;i++)  
{  
 document.writeln(result[i][0]result[i][1]);  
}  */
  //在这里写入代码
  return result;
}
