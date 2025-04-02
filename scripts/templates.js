function loadImageTemplate(index) {
  return `<div class="image_container" onclick="showOverlay(${index})">
                <div class="image">
                    <img src="assets/img/${images[index].src}" alt="">
                </div>
                
                <div class="image_info">
                    <h2>${images[index].title}</h2>
                </div>
            </div>`;
}

function loadOverlayTemplate(index) {
  return `<div class="close-icon" onclick="hideOverlay()">
            <img src="./assets/icons/close.png" class="icon" alt="close">
        </div>
        <div class="count-info">
            ${index + 1} / ${images.length}
        </div>

        <div class="image_wrapper">
            <div>
                <img src="./assets/icons/left-arrow.png" onclick="previousImage(${index})" class="icon" alt="left-arrow">
            </div>
            <div>
                <img src="./assets/img/${
                  images[index].src
                }" class="main_image" alt="${images[index].title}">
            </div>
            <div>
                <img src="./assets/icons/right-arrow.png" onclick="nextImage(${index})" class="icon" alt="right-arrow">
            </div>
        </div>

        <h3>${images[index].title}</h3>`;
}
