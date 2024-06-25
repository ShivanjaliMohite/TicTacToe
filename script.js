let turn=true;

let arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
reset=()=>{
    for(let i=0;i<=8;i++)
    {
        document.getElementById(i).innerText=`Button ${i}`
        document.getElementById(i).disabled=false
       // document.getElementById("result").innerText=`${pos1} wins !!`;
        document.getElementById("result").innerText=""
    }
}
checkResult=()=>{
     for(let rows of arr)
     {
        let pos1=document.getElementById(rows[0]).innerText;
        let pos2=document.getElementById(rows[1]).innerText;
        let pos3=document.getElementById(rows[2]).innerText;
        console.log(pos1,pos2,pos3)
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos1==pos3)
            {
                document.getElementById("result").innerText=`${pos1} wins !! .`; 
                for(let i=0;i<=8;i++)
                {
                    document.getElementById(i).innerText=`Button ${i}`
                    document.getElementById(i).disabled=false
                }
              //  reset()
            }

        }
     }
}
check=(id)=>{
   if(turn)
   {
    turn=false;
    document.getElementById(id).innerText="X";
    document.getElementById(id).disabled=true;
    checkResult();

   }
   else
   {
    turn=true;
    document.getElementById(id).innerText="O";
    document.getElementById(id).disabled=true;
    checkResult();

   }
}