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
    const cartWrapper = document.querySelector('.order');
    const cartEmpty = document.querySelector('.cartEmpty');
    const minus = document.querySelector('.minus');
    const plus = document.querySelector('.plus');
    // let count = 1;
    const counter = document.querySelector('.counter');

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

    // counter
    // minus.addEventListener('click', () => {
    //   counter.innerText = --counter.innerText;
    //   })
    //   console.log(count)
    //   plus.addEventListener('click', () => {
    //     counter.innerText = ++counter.innerText;
    //   })

    // add to Cart

    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('btn-add')) {
        const cardButton = event.target.closest('.card');
        cartEmpty.style.display = 'none';
        const productInfo = {
          imgSrc: cardButton.querySelector('.card-img-top').getAttribute('src'),
          title: cardButton.querySelector('.card-title').innerText,
          price: cardButton.querySelector('.price').innerText,

        };

        cartItem = `<div class ='cartItem'>
        <div class ='cartItem-photo'>
        <img src = '${productInfo.imgSrc}'>
        </div>
        <div class = 'cartItem-title'>${productInfo.title} </div>
        <div class = 'cartItem-info'>
        <button class = 'minus' type='button'>-</button>
        <span class="badge text-bg-primary"><span class = 'counter'>1</span> x ${productInfo.price.replace('Price:', '')}</span>
        <button class = 'plus' type='button'>+</button>
        <button type="button" class="btn btn-danger">Remove from order</button>
        </div>

        </div>`;
        cartWrapper.insertAdjacentHTML('afterend', cartItem);
      }
    });
  });
