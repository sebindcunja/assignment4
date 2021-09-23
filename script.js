var names=new Array();
names[0]="yaakov";
names[1]="John";
names[2]="James";
names[3]="Lucy";
names[4]="Dora";
names[5]="Jacob";
names[6]="Leo";
names[7]="Antony";
names[8]="Janson";
names[9]="Jeo";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}