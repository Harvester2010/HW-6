fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    const { products } = data;
    console.log(data.products);
    products.forEach((product) => {
      const container = document.querySelector('.card-group1');
      const col = document.createElement('div');
      col.classList.add('col1');
      container.append(col);
      const card = document.createElement('div');
      card.classList.add('card');
      col.append(card);

      const photo = document.createElement('img');
      photo.classList.add('card-img-top');
      photo.src = product.images[0];
      photo.style.height = '150px';
      card.append(photo);

      const wrapper = document.createElement('div');
      wrapper.classList.add('card-body');
      card.append(wrapper);

      const brand = document.createElement('h5');
      brand.classList.add('card-title');
      brand.textContent = product.title;
      wrapper.append(brand);

      const describe = document.createElement('p');
      describe.classList.add('card-text');
      describe.textContent = product.description;
      wrapper.append(describe);

      const character = document.createElement('div');
      character.classList.add('card-header');
      character.style.display = 'flex';
      character.style.justifyContent = 'space-between';
      const price = document.createElement('span');
      const rank = document.createElement('span');
      rank.classList.add('list-group-item');
      price.classList.add('list-group-item');
      wrapper.append(character);
      price.textContent = `Price: ${product.price}$`;
      rank.textContent = `Rating: ${product.rating}`;
      character.append(price);
      character.append(rank);

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('d-grid', 'gap-2');
      wrapper.append(buttonContainer);

      const addCart = document.createElement('a');
      addCart.classList.add('btn', 'btn-primary', 'btn-add');
      addCart.textContent = 'Add to cart';
      buttonContainer.append(addCart);
    });
  });
