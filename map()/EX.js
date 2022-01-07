const productsList = [
    {
      id: 1,
      name: "Product 1",
      price: 200,
      img: "https://picsum.photos/200/200"
    }, // item
    {
      id: 2,
      name: "Product 2",
      price: 500,
      img: "https://picsum.photos/200/200"
    }, // item
    { id: 3, name: "Product 3", price: 600, img: "https://picsum.photos/200/200" }
  ];
  
  const showProduct = () => {
    // Selector đến thẻ div có id là products
    const productsElement = document.getElementById("products");
    // nếu id tồn tại
    if (productsElement) {
      // Tạo ra 1 vòng lặp mới và gán vào biến result
      const result = productsList
        .map(function (item) {
          return `
                  <div class="product-item">
                    <img src="${item.img}" alt="" />
                    <h3>${item.name}</h3>
                    <span>${item.price}</span>
                  </div>
              `;
        })
        // Chuyển đổi sang chuỗi và nối các phần tử lại với nhau
        .join("");
      // Hiển thị ra ngoài màn hình
      productsElement.innerHTML = result;
    }
  };
  showProduct();