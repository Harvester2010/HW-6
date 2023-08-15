fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    const { products } = data;
    // searching products
    const input = document.querySelector('.form-control');
    const form = document.querySelector('form');
    const card = document.querySelectorAll('.card');
    const title = document.querySelectorAll('.card-title');
    const list = document.querySelector('.order');
    const photo = document.querySelector('.card-img-top');

    const description = document.querySelectorAll('.card-text');
    form.addEventListener('submit', SubmitEvent);
    form.addEventListener('submit', DescriptionSubmitEvent);

    function SubmitEvent(event) {
      event.preventDefault();
      if (input.value !== '') {
        title.forEach((element, i) => {
          if (!element.textContent.toLowerCase().includes(input.value.toLowerCase())) {
            card[i].classList.add('hide');
          } else {
            card[i].classList.remove('hide');
          }
        });
      } else {
        title.forEach((element, i) => {
          card[i].classList.remove('hide');
        });
      }
    }

    function DescriptionSubmitEvent(event) {
      event.preventDefault();
      if (input.value !== '') {
        description.forEach((element, i) => {
          if (!element.textContent.toLowerCase().includes(input.value.toLowerCase())) {
            card[i].classList.add('hide');
          } else {
            card[i].classList.remove('hide');
          }
        });
      } else {
        description.forEach((element, i) => {
          card[i].classList.remove('hide');
        });
      }
    }

    // button cart

    const cartButton = document.querySelector('.btn-success');
    const aside = document.querySelector('.aside');
    cartButton.addEventListener('click', (event) => {
      aside.classList.toggle('open');
    });

    const closeButton = document.querySelector('.btn-close');
    closeButton.addEventListener('click', (event) => {
      aside.classList.remove('open');
    });

    // add to Cart

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn-add')) {
        const cardButton = event.target.closest('.card');
        const productInfo = {
          imgSrc: cardButton.querySelector('.card-img-top').getAttribute('src'),
          title: cardButton.querySelector('.card-title').innerText,

        };

        AddToCart();
      }
    });

    function AddToCart() {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      // let clonePhoto = photo.cloneNode(true);
      // listItem.appendChild(clonePhoto);
      // let cloneTitle = title.cloneNode(true)
      // listItem.appendChild(cloneTitle);
      list.append(listItem);
      return listItem;
    }
  });
