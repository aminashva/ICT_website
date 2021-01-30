let info_s = [];
info_s.push("Hello! I am Amina Shikhaliyeva, 19 year old <br> freshman in ADA University. <br> I have went through a long way to get where I am <br>today: moving from my homeland Russia to Azerbaijan, <br> changing my study curriculum 3 times ending up <br> in the one of the most, <br> difficult school programs IB, as well as, <br> graduating two, music and educational, schools successfully. <br> My interests never stood still, рowever, I found myself in BSCS, <br> a world of computers, IA, and programming. ");
info_s.push("Hi, I am Javid Magsudov and I am 18 years old. <br> I graduated from School N.1 <br> in Sumgait and currently I am student in School <br> of IT and Engineering in ADA University. I had interest <br> to Programming and Computers since I was a <br> child and this inspired me <br> to become a Programmer. In my free time <br> I play on musical instruments, solve Rubik’s Cube or watch movies.");
info_s.push("Hey! My name is Neyjan Ibrahimova, I am 17 years <br> old. The first school in <br> which I studied was IB Lyceum and Language School <br> №6, and then I moved to the ADA School. Currently, <br> I am on my first year of studies at ADA University, <br> with a Computer Science <br> major. I like to spend my spare time  <br>listening to music, playing the piano and reading articles <br> related to psychology. ");
info_s.push("Hi, I am Sadig Khudaverdiyev, 20 years old. I am <br> currently studying for a bachelor's <br> degree in BSIT at ADA University. I have <br> been interested in computers and games since I <br> was a child and that inspired me to be a game <br> developer in the future. <br> My hobbies are fitness and playing football.");
let post = document.getElementById("disp_post");
let post2 = document.getElementById("disp_post2");
console.log(post);
let person = 0;
let pic = 0;
const names = ["Amina Shikhaliyeva", "Javid Magsudov", "Neyjan Ibrahimova", "Sadig Khudaverdiyev"];
post.innerHTML = '<h1>' + names[person] + '</h1> <br>' + '<img id = "myi"  src = "./pics/' + (person + 1) + '.png" width="160" height="150">';
post.innerHTML += ' <p class = "pp">' + info_s[person] + '</p>';
post2.innerHTML = '<img class = "myi2"  src = "./pics/' + (pic + 1) + '.jpg" max-width="550" height="350">';

function verify(i){
    if (i > 3) i = 0;
    if (i < 0) i = 3;
    return i;
}
function verify2(i){
    if (i > 9) i = 0;
    if (i < 0) i = 9;
    return i;
}
function prev(){
    person--; person = verify(person);
    post.innerHTML = '<h1>' + names[person] + '</h1> <br>' + '<img id = "myi"  src = "./pics/' + (person + 1) + '.png" max-width="160" height="150">';
    post.innerHTML += '<p class = "pp"> ' + info_s[person] + '</p>';
}

function next(){
    person++; person = verify(person);
    post.innerHTML = '<h1>' + names[person] + '</h1> <br>' + '<img id = "myi"  src = "./pics/' + (person + 1) + '.png" max-width="160" height="150">';
    post.innerHTML += '<p class = "pp">' + info_s[person] + '</p>';
}
function next2(){
    pic++; pic = verify2(pic);
    post2.innerHTML = '<img class = "myi2"  src = "./pics/' + (pic + 1) + '.jpg" max-width="550" height="350">';
}
function prev2(){
    pic--; pic = verify2(pic);
    post2.innerHTML = '<img class = "myi2"  src = "./pics/' + (pic + 1) + '.jpg" max-width="550" height="350" align = "center">';
}
let form = document.getElementsByTagName("form")[0];
function sub(){
form.addEventListener("Submit", (e) => {
  e.preventDefault();
  alert("Form Submitted!");
});
}
