function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle...
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var titles = [];
		var titleEls = document.querySelectorAll('.video-title');
		Array.prototype.slice.call(titleEls).forEach(function(item){
			console.log(item);
			titles.push(item.innerHTML);
		});
		titles = shuffle(titles);

		for(var i=0;i < titleEls.length;i++) {
			titleEls[i].innerHTML = titles[i];
		}

	}
}, 10);
