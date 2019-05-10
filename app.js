var userFeed = new Instafeed({
    get: "user",
    userId: "174357544",
    accessToken:
        "174357544.f5da801.0d90deb33e364c6db4887224deee5477",
    limit: 6,
    resolution: "standard_resolution",
    template: '<a href="{{link}}" class="col-lg-4 col-md-6"><img src="{{image}}" class="img-fluid"/></a>'
});
userFeed.run();

var y = document.getElementsByClassName('list-group-item');
console.log(y[0]);
console.log(y[1]);

y[0].addEventListener("click", function(){
    var link = y[0].getAttribute("href");
    var target = document.querySelector(link);
    target.classList.add("fade-in");
});
y[1].addEventListener("click", function(e){
    var link = y[1].getAttribute("href");
    var target = document.querySelector(link);
    target.classList.add("fade-in");
});
y[2].addEventListener("click", function(e){
    var link = y[2].getAttribute("href");
    var target = document.querySelector(link);
    target.classList.add("fade-in");
});
y[3].addEventListener("click", function(e){
    var link = y[3].getAttribute("href");
    var target = document.querySelector(link);
    target.classList.add("fade-in");
});


window.addEventListener("scroll", function(e){
    var image = document.querySelector(".description");
    if(this.scrollY > 530){ // if scrolled 10px from the top

        image.classList.add("slide-in-right"); // add class "animate"

    }
});

window.addEventListener("scroll", function(e){
    var image = document.querySelector(".skills");
    if(this.scrollY > 1300){ // if scrolled 10px from the top

        image.classList.add("slide-in-left"); // add class "animate"

    }
});

window.addEventListener("scroll", function(e){
    var title = document.querySelector(".t-project-title");
    var paragraph1 = document.querySelector(".t-paragraph1");
    var paragraph2 = document.querySelector(".t-paragraph2");
    if(this.scrollY > 2102){ 
        title.classList.add("scoot-up"); // add class "animate"
        paragraph1.classList.add("slide-in-bottom-d1")
        paragraph2.classList.add("slide-in-bottom-d2")
    }
});

window.addEventListener("scroll", function(e){
    var title = document.querySelector(".g-project-title");
    var paragraph1 = document.querySelector(".g-paragraph1");
    var paragraph2 = document.querySelector(".g-paragraph2");
    if(this.scrollY > 2643){ 
        title.classList.add("scoot-up"); // add class "animate"
        paragraph1.classList.add("slide-in-bottom-d1")
        paragraph2.classList.add("slide-in-bottom-d2")
    }
});