var i=0;

var images=[
"https://c8.alamy.com/comp/W3KX0F/family-single-father-with-little-daughter-cartoon-W3KX0F.jpg",
"https://thumbs.dreamstime.com/z/cute-daughter-kissing-hugging-her-mom-mothers-day-greeting-cartoon-vector-illustration-isolated-scene-cute-daughter-kissing-114155870.jpg",
"https://en.pimg.jp/044/744/828/1/44744828.jpg"
];

var names =[
    "GOKUL SHANMUGAM",
    "ANUSHA GOKUL",
    "KANISHKA GOKUL"
];


function next(){

    document.getElementById("image").src=images[i];
    document.getElementById("name").innerHTML=names[i];
    i++;

    if (i>2){
        i=0;
    }

}