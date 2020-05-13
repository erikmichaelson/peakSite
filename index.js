$(function() {

    $("splashpic").mousewheel(function(event, delta) {
 
       this.scrollLeft -= (delta);
     
       event.preventDefault();
 
    });
 
 });