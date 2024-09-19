function filterImages() {
    const input = document.getElementById ('searchInput');
    const filter = input.value.toLowerCase ();
    const images = document.querySelectorAll ('.image');

for (let i = 0 ; i  < images.length ; i++) {
    const description  = images[i].getElementByClassName('description') [0].innerText.toLowerCase();
     if (description.includes(filter)) {
        imagens[i].style.display = '';
        } else {
            imagens[i].style.display = '';
            }
            }
        }


