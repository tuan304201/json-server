var casual = require("casual");

const fs = require("fs");

const randomCategoryList = (n) => {
    if (n <= 0) return [];

    const categoryList = [];

    Array.from(new Array(n)).forEach(() => {
        const category = {
            id: casual.uuid,
            name: casual.title,
            password: casual.password,
            createAt: Date.now(),
            updateAt: Date.now(),
        };

        categoryList.push(category);
    });

    return categoryList;
};

const randomProductList = (categoryList, numberOfProduct) => {
    if (numberOfProduct <= 0) return [];

    const productList = [];

    for (const category of categoryList) {
        Array.from(new Array(numberOfProduct)).forEach(() => {
            const products = {
                categoryId: category.id,
                id: casual.uuid,
                name: casual.word,
                description: casual.description,
                color: casual.color_name,
                createAt: Date.now(),
                updateAt: Date.now(),
            };

            productList.push(products);
        });
    }

    return productList;
};

(() => {
    const categoryList = randomCategoryList(4);
    const productList = randomProductList(categoryList, 5);

    const db = {
        categories: categoryList,
        products: productList,
        profile: {
            name: "Tuan Anh",
        },
    };

    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generate data successfully");
    });
})();
