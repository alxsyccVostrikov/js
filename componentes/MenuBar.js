/*
*written by alxsy mostovik
*vostrikovalxsycc@gmail.com
*/


function CreatingMe(path="./"){
        for(let i=0;i<pag.length;i++)
      document.write("<li><a href='"+path+pag[i]+"'>"+pagName[i]+"</a></li>");  
}

function CreatingMd(path="./"){
for(let i=0;i<glyphicon.length;i++)
      document.write("<li><a href='"+path+glyphiconPag[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");}















//left menu full
function Me(path="./"){
  document.write("<nav class='navbar navbar-inverse'>");
    document.write("<a class='navbar-brand' onclick='sms()'>"+WebSite+"</a>");
      document.write("<ul class='nav navbar-nav'>");    
        // for(let i=0;i<fields.length;i++)
          // for(let j=0;j<fields[i].length;j++)
      // document.write("<li><a href='"+fields[i][j]+"'>"+fields[i][++j]+"</a></li>");
        for(let i=0;i<pag.length;i++)
      document.write("<li><a href='"+path+pag[i]+"'>"+pagName[i]+"</a></li>");

           document.write("</ul>");    
}
//just component
function CriarMenuEsq(path="./"){
  // for(let i=0;i<fields.length;i++)
    // for(let j=0;j<fields[i].length;j++)
      // document.write("<li><a href='"+fields[i][j]+"'>"+fields[i][++j]+"</a></li>"); 
for(let i=0;i<pag.length;i++)
      document.write("<li><a href='"+path+pag[i]+"'>"+pagName[i]+"</a></li>");   
       // document.write("</ul>");    

}





//message
function sms(path="./"){
  alert("Desenvolvido por:"+person["nome"]+"\nemail:"+person["email"]);
}


//right menu full
function Md(path="./"){
  document.write("<ul class='nav navbar-nav navbar-right'>");
  // for(let i=0;i<glyphicon.length;i++)
    // for(let j=0;j<glyphicon[i].length;j++)
      // document.write("<li><a href='"+glyphicon[i][j]+"'><span class='glyphicon glyphicon-"+glyphicon[i][++j]+"'></span> "+glyphicon[i][++j]+"</a></li>");
for(let i=0;i<glyphicon.length;i++)
      document.write("<li><a href='"+path+glyphiconPag[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");
      document.write("</ul>");
  document.write("</nav>");

}
//just component
function CriarMenuDir(path="./"){
  // for(let i=0;i<glyphicon.length;i++)
    // for(let j=0;j<glyphicon[i].length;j++)
      // document.write("<li><a href='"+glyphicon[i][j]+"'><span class='glyphicon glyphicon-"+glyphicon[i][++j]+"'></span> "+glyphicon[i][++j]+"</a></li>");
 for(let i=0;i<glyphicon.length;i++)
      document.write("<li><a href='"+path+glyphiconPag[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");       //document.write("</ul></nav>");
  
}          
  
//creatin menu
function CriarMenu(){
 Me();
// CriarMenuEsq();
  Md();
 // CriarMenuDir();
}
//CriarMenu();


//another wat to create menu
function tst(path="./"){
   document.write("<nav class='navbar navbar-inverse'>");
    document.write("<a class='navbar-brand' onclick='sms()'>"+WebSite+"</a>");
      document.write("<ul class='nav navbar-nav'>");    
        // for(let i=0;i<fields.length;i++)
          // for(let j=0;j<fields[i].length;j++)
            // document.write("<li><a href='"+fields[i][j]+"'>"+fields[i][++j]+"</a></li>");
        for(let i=0;i<pag.length;i++)
      document.write("<li><a href='"+path+pag[i]+"'>"+pagName[i]+"</a></li>");
           document.write("</ul>");    

document.write("<ul class='nav navbar-nav navbar-right'>");
  // for(let i=0;i<glyphicon.length;i++)
    // for(let j=0;j<glyphicon[i].length;j++)
      // document.write("<li><a href='"+glyphicon[i][j]+"'><span class='glyphicon glyphicon-"+glyphicon[i][++j]+"'></span> "+glyphicon[i][++j]+"</a></li>");
    for(let i=0;i<glyphicon.length;i++)
      document.write("<li><a href='"+path+glyphiconPag[i]+"'><span class='glyphicon glyphicon-"+glyphicon[i]+"'></span> "+glyphiconName[i]+"</a></li>");
        document.write("</ul>");
  document.write("</nav>");
}
//tst();