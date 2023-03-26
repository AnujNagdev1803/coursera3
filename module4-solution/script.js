var names=new Array();
names[0]="Drick";
names[1]="Jhon";
names[2]="Harry";
names[3]="jim";
names[4]="Angel";
names[5]="Ram";
names[6]="Mark";
names[7]="Jass";
names[8]="King";
names[9]="Jack";
names[10]="TimCook";
for (var i=0;i<names.length;i++){
    if (names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
}