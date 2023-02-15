var pages = document.getElementsByClassName('page');
let count = 0;
for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = (pages.length - i);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
    pages[i].onclick = function () {
      if (this.pageNum % 2 === 0) {
        count = count - 2;
        count <= 0 ? count = 0 : '';
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      }
      else {
        count = count + 2;
        count === pages.length ? count = (pages.length - 1) : '';
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    }
  }
})

let leftarrow = document.getElementById('left-arrow')
leftarrow.onclick = function () {
  console.log(count)
  if (count > 0) {
    if (count % 2 == 0) {
      count = count - 1;
      pages[count].classList.remove('flipped');
      pages[count].previousElementSibling.classList.remove('flipped');
      count = count - 2;
      count <= 0 ? count = 0 : '';
    }
    else {
      pages[count].classList.remove('flipped');
      pages[count].previousElementSibling.classList.remove('flipped');
      count = count - 2;
      count <= 0 ? count = 0 : '';
    }

  }
}

let rightarrow = document.getElementById('right-arrow');
rightarrow.onclick = function () {
  console.log(count)
  if (count < pages.length - 1) {
    if (count % 2 != 0) {
      count=count+1;
      pages[count].classList.add('flipped');
      pages[count].nextElementSibling.classList.add('flipped');
      count = count + 2;
      count === pages.length ? count = (pages.length - 1) : '';
    }
    else {
      pages[count].classList.add('flipped');
      pages[count].nextElementSibling.classList.add('flipped');
      count = count + 2;
      count === pages.length ? count = (pages.length - 1) : '';
    }

  }

}