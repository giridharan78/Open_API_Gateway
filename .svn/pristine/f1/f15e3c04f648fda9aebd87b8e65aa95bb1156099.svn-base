


/* Enter the user name and password in the format username:password                                           
This function will change the username and password to Base64 */
//T0 aadbd03d-5607-4c88-8386-ba94bc3c0c3c:b5d66a52-a8ff-4aba-8766-bf6a0591041f
//Dig1 :8c0283bd-89dd-41c6-941d-bdea50f6db36:e6536e8d-432c-4a00-a75e-f3c05af1f753
//T2: 3137d8ac-9159-4dc1-a33b-ccea439352fd:secret
function encode64(input){
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=:" ;
var  input= "ec9d8d8c-9eed-43fe-b217-893d87c85651:secret";   

 var output = "";  
 var chr1, chr2, chr3 = "";  
 var enc1, enc2, enc3, enc4 = "";  
 var i = 0;  
 

     do {  
        chr1 = input.charCodeAt(i++);  
        chr2 = input.charCodeAt(i++);  
        chr3 = input.charCodeAt(i++);  
 

        enc1 = chr1 >> 2;  
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
        enc4 = chr3 & 63;  
  

        if (isNaN(chr2)) {  
           enc3 = enc4 = 64;  
        } else if (isNaN(chr3)) {  
           enc4 = 64;  
        }  

        output = output +  
           keyStr.charAt(enc1) + keyStr.charAt(enc2)+keyStr.charAt(enc3)+keyStr.charAt(enc4);
              chr1 = chr2 = chr3 = "";  
        enc1 = enc2 = enc3 = enc4 = "";  

     } while (i < input.length);  


return (output);

}















































