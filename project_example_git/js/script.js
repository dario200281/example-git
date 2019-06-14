var imgEng=document.images[0]; 
var imgSpa=document.images[1];
var imgIta=document.images[2];
imgEng.addEventListener("click", function(){translateLang("eng")});
imgSpa.addEventListener("click", function(){translateLang("spa")});
imgIta.addEventListener("click", function(){translateLang("ita")});
function translateLang(lang)
{if(lang=="eng") document.getElementById("main-content").innerHTML = "The island is one of the main tourist destinations of the country due to its natural beauty and its mysterious ancestral culture of the Rapanui ethnic group, whose most notable vestige corresponds to huge statues known as moais.";
if(lang=="spa") document.getElementById("main-content").innerHTML = "La isla es uno de los principales destinos turísticos del país debido a su belleza natural y su misteriosa cultura ancestral de la etnia rapanui, cuyo más notable vestigio corresponde a enormes estatuas conocidas como moais.";
if(lang=="ita") document.getElementById("main-content").innerHTML = "L'isola è una delle principali destinazioni turistiche del paese per la sua bellezza naturale e la sua misteriosa cultura ancestrale del gruppo etnico Rapanui, la cui maggior parte delle notevoli vestigia corrisponde a enormi statue conosciute come moai.";
}