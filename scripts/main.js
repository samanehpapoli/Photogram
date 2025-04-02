let images = [
  {
    title: "Shiraz",
    src: "iran-1.jpg",
  },
  {
    title: "Azadi",
    src: "iran-2.jpg",
  },
  {
    title: "Isfahan",
    src: "iran-3.jpg",
  },
  {
    title: "Takht jamshid",
    src: "iran-4.jpg",
  },
  {
    title: "Masjed Shah",
    src: "iran-5.jpg",
  },
  {
    title: "Masjed Abi",
    src: "iran-6.jpg",
  },
  {
    title: "Isfahan",
    src: "iran-7.jpg",
  },
  {
    title: "Alighapoo",
    src: "iran-8.jpg",
  },
  {
    title: "Emarat Sefid",
    src: "iran-9.jpg",
  },
  {
    title: "Yazd",
    src: "iran-10.jpg",
  },
  {
    title: "Siosepol",
    src: "iran-11.jpg",
  },
  {
    title: "Mashhad",
    src: "iran-12.jpg",
  },
  {
    title: "Tehran",
    src: "iran-13.jpg",
  },
  {
    title: "Saadabad",
    src: "iran-14.jpg",
  },
  {
    title: "Borj Milad",
    src: "iran-15.jpg",
  },
];

function init() {
  loadImages();
  overlayEvent();
}

function loadImages() {
  document.getElementById("images").innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    document.getElementById("images").innerHTML += loadImageTemplate(i);
  }
}

function showOverlay(imageIndex) {
  document.getElementById("overlay").innerHTML =
    loadOverlayTemplate(imageIndex);
  document.getElementById("overlay").classList.remove("d-none");
}

function hideOverlay() {
  document.getElementById("overlay").classList.add("d-none");
}

function nextImage(index) {
  let nextImageIndex = index + 1;

  if (nextImageIndex === images.length) {
    nextImageIndex = 0;
  }
  showOverlay(nextImageIndex);
}

function previousImage(index) {
  let previousImageIndex = index - 1;

  if (previousImageIndex < 0) {
    previousImageIndex = images.length - 1;
  }
  showOverlay(previousImageIndex);
}

function overlayEvent() {
  document.getElementById("overlay").addEventListener("click", function (e) {
    if (e.target === this) {
      hideOverlay();
    }
  });
}
