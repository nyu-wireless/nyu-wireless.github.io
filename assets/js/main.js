// YouTube thumbnails (event demo pages): swap in the player on click
document.querySelectorAll('.yt-lite').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.id + '?autoplay=1';
    f.title = btn.getAttribute('aria-label');
    f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    btn.replaceChildren(f);
  });
});

// Poster list (event posters page): filter by topic and search
(function () {
  var search = document.querySelector('.poster-search');
  if (!search) return;
  var buttons = document.querySelectorAll('.poster-filters button');
  var topics = document.querySelectorAll('.poster-topic');
  var empty = document.querySelector('.poster-empty');
  var topic = 'all';
  function update() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    topics.forEach(function (sec) {
      var n = 0;
      sec.querySelectorAll('.poster-card').forEach(function (card) {
        var match = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
        card.hidden = !match;
        if (match) n++;
      });
      sec.hidden = n === 0 || (topic !== 'all' && sec.dataset.topic !== topic);
      if (!sec.hidden) shown += n;
    });
    empty.hidden = shown > 0;
  }
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
      topic = btn.dataset.topic;
      update();
    });
  });
  search.addEventListener('input', update);
})();

// Mobile menu toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
