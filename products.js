// products.js - 全站數據中心 (自動生成圖片版)
const allProducts = [];
const categories = [
    { name: "電子產品", count: 35, prefix: "E" },
    { name: "居家生活", count: 15, prefix: "H" },
    { name: "服飾配件", count: 20, prefix: "C" },
    { name: "美食飲品", count: 21, prefix: "F" }
];

categories.forEach(cat => {
    for (let i = 1; i <= cat.count; i++) {
        allProducts.push({
            id: `${cat.prefix}-${i}`,
            name: `${cat.name} - 商品 ${i}`,
            price: Math.floor(Math.random() * 20000) + 500,
            category: cat.name,
            desc: `這是一項高品質的${cat.name}精選商品，編號為 ${i}，提供給您最優質的使用體驗。`,
            // 使用 Picsum 隨機圖片 API，確保每個商品都有圖
            image: `https://picsum.photos/seed/${cat.prefix}${i}/400/300`
        });
    }
});