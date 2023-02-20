function remove_hash_from_url() {
  let uri = window.location.toString();

  if (uri.indexOf("#") > 0) {
    let clean_uri = uri.substring(0,
      uri.indexOf("#"));

    window.history.replaceState({},
      document.title, clean_uri);
  }
}
//for toggling nav
function toggleCheck() {
  const check_box = document.getElementById("hidden");
  const main = document.getElementById("main");
  if (!check_box.checked) {
    main.classList.remove("md:ml-80");
    main.classList.add("ml-0");
  }
  else {
    main.classList.add("md:ml-80");
  }
}

let section = document.querySelectorAll('.section');
let lists = document.querySelectorAll('.list');

function activeLink(li) {
  lists.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
}
lists.forEach((item) =>
  item.addEventListener('click', function() {
    activeLink(this);
  }));

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
    }
  })
};

function removeHash() {
  history.pushState("", document.title, window.location.pathname
    + window.location.search);
}

const links = document.querySelectorAll(".links");

links.forEach((link) => {
  link.addEventListener('click', function(e) {
    // e.preventDefault();
    remove_hash_from_url();
    console.log(window.location.toString());
  });
});
