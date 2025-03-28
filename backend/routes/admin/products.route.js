const express =  require("express")
const route = express.Router();

const controller = require("../../controllers/admin/product.controller")

// lấy danh sách sản phẩm

route.get("/products",controller.Products)

// Them san pham
route.post("/products/create", controller.createProducts);

// Sua san pham
route.put("/products/edit/:id", controller.updatedProduct);

// Xoa san pham
route.delete("/products/delete/:id", controller.deleteProduct);

// Chi tiết sản phẩm
route.get("/products/:id", controller.detailProduct);

// Xem sản phẩm theo danh mục
route.get("/products/category/:categoryId", controller.getProductsByCategory);

// Sắp xếp theo tiêu chí

module.exports = route;