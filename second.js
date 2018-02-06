//
//Drugi algorytm
//
console.log("Start");
var t1 = new Date();
var tab = [];
var primeNumber = [];
for(let i=0;i<=1000000;i++){
	tab[i]=i;
}
var t2 = new Date();
console.log("Wypełniona w: ", (t2-t1)/1000, " sekund");

for(let i=0, j=tab.length;i<j;i++){
	let temp = tab[i];
	if(temp%2){
		for(let k=3;k<=temp;k+=2){
			if(temp%k){	
				continue;
			}else{
				if(temp==k){
					primeNumber.push(temp);
				}
				break;
			}
		}
	}else{
		if(temp==2){
			primeNumber.push(temp);
		}
	}
}
var t3 = (new Date()-t2)/1000;
console.log("Algorytm zakończył pracę w: ", t3, " sekund");
console.log(primeNumber);
