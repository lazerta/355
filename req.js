let display = document.querySelector('.display');
let uploadInput = document.getElementById('input');
let displayString = '';
uploadInput.addEventListener('change', e => {
  console.log(uploadInput.files[0])
    readeFiles(uploadInput.files[0]);

}, false);

function readeFiles(files){
const reader = new FileReader();
reader.onload = ()=> {
  let resultSet = reader.result.split('\n');
 console.log(resultSet);
 
   parseURl(resultSet);

  
  

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
    set.forEach(ele => {
        let url = new URL(ele);
        
        
    });
}



getURL('www.google.com').then(parseURL);





