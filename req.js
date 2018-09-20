let display = document.querySelector('.display');
let uploadInput = document.getElementById('input');
let displayString = '';

// counter 
let schema = 0;
let host = 0;
let port = 0;
let path = 0;
let query = 0;
let fragment = 0;
let userName = 0;


// 

// 
let proto = "protocol";
let hostname = "hostname";

// 

uploadInput.addEventListener('change', e =>  {
  console.log(uploadInput.files[0])
    readeFiles(uploadInput.files[0]);
    console.log(uploadInput.files[0]);



}, false);

function readeFiles(files){
const reader = new FileReader();
reader.onload = ()=> {
  let resultSet = reader.result.split('\n');
 
    parseURL(resultSet);

  
  

}
reader.readAsText(files);

}












async function getURL(url) {

    url = `https://dns.google.com/resolve?name=${url}`;
    
   
    let respond = await fetch(url);

   
    if(!respond.ok) {
        throw new Error(`can not fetch url: ${url}`);
    }
   respond = await respond.json();
  console.log(respond);
   console.log(respond.Answer[0]['data'])
    
}

function parseURL(set) {
        let result = [];
     for(let i = 0; i < set.length; i++)
    result[i].push(builder(new URL(element)));
          
    
            
        result;
        
}

function builder(ele) {
    let poto = ele.protocol;
    if (poto !="") {
        schema++;
    }
    let username = ele.username;
    if (username != "") {
        userName ++;
        
    }
    let HOst = ele.host;
    if (HOst != "") {
        host++;
        
    }
    let Port = ele.port;
     if (Port !="") {
         port++;
         
     }
    let pn = ele.pathname;
    if (pn !="") {
       path++;
    }
    let sch = ele.search;
    if (sch !="") {
        query++;
    }
    let has =   ele.hash;
    if (has != "") {
        fragment++;
    }

    let table = `<table>
 <tr><th>url: ${ele.href}</th></tr>
<tr><th>schema</th> <td>${poto}</td>  </tr>
<tr><th>userinfo</th> <td>${username}</td>  </tr>
<tr><th>host</th> <td>${HOst}</td>  </tr>
<tr><th>port</th> <td>${Port}</td>  </tr>
<tr><th>path</th> <td>${pn}</td>  </tr>
<tr><th>query</th> <td>${sch}</td>  </tr>
<tr><th>fragment</th> <td>${has}</td>  </tr>
</table>
`;

console.log(table);

return table;


  



}

let final = parseURL();
console.log(final);
let data =  final.reduce((acc,next)=>{
    return acc+ next;
}
);
display.innerHTML = data;





