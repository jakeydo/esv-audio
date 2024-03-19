console.log('I am running!');


const myh = new Headers();
myh.append('Authorization', 'Token 630191c8aece95e275320509641cbc887a117019')
const myInit = {method: "GET", headers, myh}
const request = new Request('https://api.esv.org/v3/passage/audio/?q=Psalm+146', myInit)

fetch(request)

console.log("trying to request some audio")