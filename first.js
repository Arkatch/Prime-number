///
///Frist
///
	let tab = [];
	let x = [];
	let primeNumber = [];
	for(let i=0;i<=1000000;i++){
		tab[i]=i;
	}
	let t3 = new Date();
	for(let i=0, j=tab.length;i<j;i++){
		let temp = tab[i];
		let sqrt = Math.floor(Math.sqrt(temp));
		if(!(sqrt%2)){
			sqrt++;
		}
		if(temp%2){
			for(let k=sqrt;k>=1;k-=2){	
				if(temp%k){	
					continue;
				}else{
					if(k==1){
						primeNumber.push(temp);
						//x.push(sqrt);
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
	primeNumber.shift();
	let t4 = (new Date()-t3)/1000;
	console.log("Koniec: ", t4, " sekund");	