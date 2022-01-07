
const productsList = [
    {
        id: 1, name: "iphone7",   price: 3000, image: "https://picsum.photos/70/40"
    },
    {
        id: 2, name: "iphone8pl", price: 3000, image: "https://picsum.photos/70/40"
    },
    {
        id: 3, name: "iphoneX",   price: 3000, image: "https://picsum.photos/70/40"
    }
  ];
  
  const showProduct = () => {
    // Selector đến thẻ div có id là products
    const productsElement = document.getElementById("list");
    // nếu id tồn tại
    if (productsElement) {
      // Tạo ra 1 vòng lặp mới và gán vào biến result
      const result = productsList
        .map(function (item) {
          return `
          <tr>${item.id} </tr>
          <tr><h3>${item.name}</h3></tr>
          
          <tr><span>${item.price}</span></tr>
          <tr><img src="${item.img}" alt=""></tr>
              `;
        })
        // Chuyển đổi sang chuỗi và nối các phần tử lại với nhau
        .join(" ");
      // Hiển thị ra ngoài màn hình
      productsElement.innerHTML = result;
    }
  };
  showProduct();