down = new IntersectionObserver(function(entries) {
    entries.forEach(function(item){
      if(item.intersectionRatio <= 0 )return;
      item.target.classList.add("onStart");
      item.target.classList.remove("onScroll");
    }) 
  });
  
  animar = document.getElementsByClassName('OnScroll');
  for(i = 0; i < animar.length; i++){
    down.observe(animar[i]);
  } 