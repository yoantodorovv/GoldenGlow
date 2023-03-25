import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseService";

export const SeedDb = async () => {
    const productsRef = collection(db, "products");

    await addDoc(productsRef, {   
        "name": "Pleated skirt",
        "brand": "GoldenGlow",
        "collection": "Elegant Everyday",
        "price": 24.99,
        "color": [
            "white",
            "beige"
        ],
        "size": [
            "XS",
            "S",
            "M",
            "L"
        ],
        "material": [
            "50% cotton",
            "50% polyester"
        ],
        "gender": "women",
        "category": "skirt",
        "images": [
            "https://i.pinimg.com/736x/bf/e4/71/bfe47128bea3cfdeebe2f2a6ce07dd5b.jpg", 
            "https://i.pinimg.com/originals/c5/a1/f5/c5a1f5c2bb34e3b37c822e4132e871e4.jpg"
        ],
        "description": "This classic skirt is a must-have for any wardrobe and is perfect for any occasion. Made with a blend of 50% cotton and 50% polyester materials, this skirt is comfortable, breathable, and easy to care for. The fabric is durable and resists wrinkles, making it perfect for everyday wear or travel.This skirt features a classic A-line silhouette with a high waist that flatters your figure and enhances your curves."
    });
    await addDoc(productsRef, {   
        "name": "Long summer pleated dress",
        "brand": "GoldenGlow",
        "collection": "Elegant Everyday",
        "price": 50.00,
        "color": [
            "light-yellow",
            "light-blue"
        ],
        "size": [
            "XXS",
            "XS",
            "S",
            "M"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "dress",
        "images": [
            "https://ae01.alicdn.com/kf/H4bcb5c28c64b43dcb003e615cb7dbae6R/Korean-style-women-pleated-dress-summer-fashion-V-neck-short-sleeve-office-ladies-work-long-dress.jpg", 
            "https://ae01.alicdn.com/kf/S35f782d6bd7a4a3aaa64d8047787735eM/High-Quality-New-Women-Summer-Clothes-Elegant-V-Neck-Slim-Office-Lady-Casual-A-Line-Bandge.jpg"
        ],
        "description": "Introducing our newest addition to your summer wardrobe, our stunning long summer dress. Perfect for beach days, garden parties, or any other summer occasion, this dress will keep you looking stylish and feeling comfortable all day long. The dress features a simple and elegant design, with a scoop neckline. The bodice of the dress is fitted, creating a flattering silhouette that accentuates your curves."
    }),
    await addDoc(productsRef, {   
        "name": "Baggy pants",
        "brand": "GoldenGlow",
        "collection": "Elegant Everyday",
        "price": 29.99,
        "color": [
            "white"
        ],
        "size": [
            "S",
            "M",
            "L"
        ],
        "material": [
            "100% denim"
        ],
        "gender": "women",
        "category": "pants",
        "images": [
            "https://i.pinimg.com/736x/d5/f0/8d/d5f08dc5a396000471a53da289463684.jpg"
        ],
        "description": "Introducing our stylish and comfortable baggy denim pants, perfect for your casual and laid-back look! These pants are crafted from high-quality denim fabric, designed to last and withstand regular wear. The baggy pants feature a loose and relaxed fit, making them comfortable to wear all day long. The denim fabric is durable, ensuring that these pants will last for many wears to come. They also feature a four-pocket design, including two front pockets and two back pockets."
    }),
    await addDoc(productsRef, {   
        "name": "Long classic dress",
        "brand": "GoldenGlow",
        "collection": "Elegant Everyday",
        "price": 54.55,
        "color": [
            "light-brown",
            "dark-brown"
        ],
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% satin"
        ],
        "gender": "women",
        "category": "dress",
        "images": [
            "https://ae01.alicdn.com/kf/Hedd7cc7de9ed4b2080d6bbec82a98f5bS/Spring-And-Autumn-Japanese-And-Korean-Fashion-Single-breasted-Trench-Coat-Dress-With-Belt-Simple-Dress.jpg_Q90.jpg_.webp", 
            "https://img1.vvic.com/upload/1638114214294_150513.jpg"
        ],
        "description": "Introducing our stunning long classic dress, the perfect addition to your wardrobe for any formal occasion. Made from high-quality materials, this dress is designed to make you feel confident and sophisticated. The dress features a classic and timeless design, with a flowing A-line skirt that falls gracefully to the floor."
    }),
    await addDoc(productsRef, {   
        "name": "3/4 Suit Jacket",
        "brand": "GoldenGlow",
        "collection": "Elegant Everyday",
        "price": 65.00,
        "color": [
            "dark-brown"
        ],
        "size": [
            "S",
            "M"
        ],
        "material": [
            "100% wool"
        ],
        "gender": "women",
        "category": "suit",
        "images": [
            "https://honestlybecca.com/wp-content/uploads/2021/08/183C2828-4C5B-4AE1-9229-C23C38E38393-1025x991.jpeg"
        ],
        "description": "Introducing our high-quality wool suit jacket, the perfect addition to any professional wardrobe. Made from premium wool fabric, this jacket is designed to provide both comfort and style. The jacket features a classic and timeless design, with a single-breasted three-button closure and notch lapel. The wool fabric is soft and breathable, making it perfect for all-day wear. The jacket is fully lined, ensuring a smooth and comfortable fit."
    }),
    await addDoc(productsRef, {   
        "name": "Denim skirt",
        "brand": "GoldenGlow",
        "collection": "Businessworld",
        "price": 25.99,
        "color": [
            "black"
        ],
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% denim"
        ],
        "gender": "women",
        "category": "skirt",
        "images": [
            "https://img.ltwebstatic.com/images3_pi/2023/02/22/16770519835e7da628f99ab3e741e1614a8d9e742a_thumbnail_600x.webp"
        ],
        "description": "Introducing our stylish and versatile denim short skirt, the perfect addition to your summer wardrobe. Made from high-quality denim fabric, this skirt is designed to last and withstand regular wear. The skirt features a classic and timeless design, with a short length that hits just above the knee. It has a flattering A-line shape, providing a comfortable and flattering fit for all body types. The denim short skirt is perfect for summer events such as festivals, concerts, and outdoor parties."
    }),
    await addDoc(productsRef, {   
        "name": "Oversized T-shirt",
        "brand": "GoldenGlow",
        "collection": "Businessworld",
        "price": 19.00,
        "color": [
            "white-brown stripes"
        ],
        "size": [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "T-shirt",
        "images": [
            "https://i.pinimg.com/originals/6b/59/14/6b591401de6caa147fe5817738b353ee.jpg"
        ],
        "description": "Introducing our trendy and comfortable oversized t-shirt, the perfect addition to your casual wardrobe. Made from soft and high-quality materials, this t-shirt is designed to provide both style and comfort. The oversized t-shirt features a loose and relaxed fit, providing plenty of room for movement and keeping you cool on warmer days. It has a classic crew neckline and medium-length sleeves. The fabric is soft and lightweight, ensuring that you feel comfortable all day long."
    }),
    await addDoc(productsRef, {   
        "name": "Long sleeved shirt",
        "brand": "GoldenGlow",
        "collection": "Businessworld",
        "price": 25.00,
        "color": [
            "white"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "shirt",
        "images": [
            "https://i.pinimg.com/originals/3d/3a/a9/3d3aa9fcd40cc3bb7c0e5b726f0132a7.jpg"
        ],
        "description": "Introducing our stylish and versatile long-sleeved shirt, the perfect addition to your wardrobe for any occasion. Made from high-quality material, this shirt is designed to provide both comfort and style. The shirt features a classic and timeless design, with a button-front closure and a pointed collar. It has long sleeves with button cuffs, providing a polished and sophisticated look. The fabric is soft and breathable, ensuring that you feel comfortable all day long."
    }),    
    await addDoc(productsRef, {   
        "name": "Turtleneck blouse",
        "brand": "GoldenGlow",
        "collection": "Businessworld",
        "price": 23.99,
        "color": [
            "beige"
        ],
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "blouse",
        "images": [
            "https://i.pinimg.com/736x/2b/e4/29/2be42992205fd2edfe42dad15c8f4c23.jpg"
        ],
        "description": "The blouse features a classic and sophisticated design, with a turtleneck collar and long sleeves. It has a fitted silhouette that flatters the figure and provides a polished look. The fabric is soft and lightweight, ensuring that you feel comfortable all day long. The turtleneck blouse is perfect for a variety of events, from professional meetings to more formal occasions. It can be dressed up with a pencil skirt and heels or dressed down with jeans and boots for a more relaxed look."
    }),
    await addDoc(productsRef, {   
        "name": "Short sleeve oversized shirt",
        "brand": "GoldenGlow",
        "collection": "Businessworld",
        "price": 23.67,
        "color": [
            "light-green",
            "beige",
            "white"
        ],
        "size": [
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "shirt",
        "images": [
            "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/19/537/L_g0150453719.jpg",
            "https://ae01.alicdn.com/kf/S84534c2d284c4a28a8b8b16949aae1392.jpg?width=1080&height=1080&hash=2160",
            "https://ae01.alicdn.com/kf/S54537c7ca35a4211a198b411fc53c8506/2022-Summer-New-Retro-Hong-Kong-Style-Korean-Professional-Suit-Collar-Lapel-Short-Sleeve-Shirt-Woman.jpg_640x640.jpg"

        ],
        "description": "Looking for a stylish short sleeve shirt? Check out our collection of versatile short sleeve shirts that can be dressed up or down. Our shirts are made with high-quality materials that are both comfortable and durable, making them perfect for any occasion. Whether you're heading to the office or hanging out with friends, our short sleeve shirts are the perfect choice for any fashion-savvy individual."
    }),
    await addDoc(productsRef, {   
        "name": "Suit Jacket and Pants (set)",
        "brand": "GoldenGlow",
        "collection": "Businessworld",
        "price": 63.99,
        "color": [
            "violet"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "suit",
        "images": [
            "https://thefashionfrill.com/wp-content/uploads/2021/05/Popular-Korean-Fashion-Bloggers-to-Follow-in-2022.jpg"
        ],
        "description": "Dress to impress with our elegant Suit Jacket and Pants set, perfect for any formal occasion. Made with high-quality materials, this set is designed to fit and flatter your body while keeping you comfortable throughout the day. The suit jacket features a classic design with a modern twist, featuring a single-breasted front and notched lapel, while the pants are tailored for a sleek and sophisticated look. "
    }),
    await addDoc(productsRef, {   
        "name": "Charleston pants",
        "brand": "GoldenGlow",
        "collection": "Businessworld",
        "price": 26.99,
        "color": [
            "maroon"
        ],
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "material": [
            "50% cotton",
            "50% polyester"
        ],
        "gender": "women",
        "category": "pants",
        "images": [
            "https://i.pinimg.com/originals/f1/ab/37/f1ab37f7d307a16e80caf18790add043.jpg"
        ],
        "description": "Step back in time with our vintage-inspired Charleston Pants. These pants are a nod to the glamorous and carefree 1920s, featuring a wide-leg cut and a high waist that accentuates your curves while elongating your legs. Made with high-quality materials, our Charleston Pants are both comfortable and durable, ensuring they'll become a staple in your wardrobe. These pants are perfect for any occasion, from a night out on the town to a formal event."
    }),
    await addDoc(productsRef, {   
        "name": "Butterfly-chest T-shirt",
        "brand": "GoldenGlow",
        "collection": "Casually Important",
        "price": 19.25,
        "color": [
            "violet"
        ],
        "size": [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "T-shirt",
        "images": [
            "https://i.pinimg.com/originals/6e/f8/f0/6ef8f00243f2c9b3554eec136fffae72.jpg"
        ],
        "description": "Looking for a trendy and unique T-shirt? Check out our Butterfly-chest T-shirt! This T-shirt features a playful and eye-catching design, with a butterfly graphic across the chest. The shirt is made with high-quality materials that are both soft and durable, ensuring that you'll be comfortable while wearing it. The T-shirt has a relaxed fit that is perfect for casual wear, and it comes in a range of sizes to fit any body type."
    }),
    await addDoc(productsRef, {   
        "name": "Open sholder blouse",
        "brand": "GoldenGlow",
        "collection": "Casually Important",
        "price": 24.00,
        "color": [
            "white"
        ],
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "blouse",
        "images": [
            "https://i.pinimg.com/originals/d7/86/7f/d7867f86f5e22126990962d97c10311c.jpg"
        ],
        "description": "Introducing our stylish and feminine Open Shoulder Blouse. This blouse features an on-trend design with a cut-out shoulder detail that adds a touch of sophistication and allure to any outfit. Made with high-quality materials, our blouse is both lightweight and breathable, ensuring that you'll be comfortable all day long. Whether you're dressing up for a night out or looking for a chic and comfortable top for everyday wear, our Open Shoulder Blouse is the perfect choice."
    }),
    await addDoc(productsRef, {   
        "name": "Miniskirt",
        "brand": "GoldenGlow",
        "collection": "Casually Important",
        "price": 20.20,
        "color": [
            "light-blue"
        ],
        "size": [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "skirt",
        "images": [
            "https://ph-live-01.slatic.net/p/5bb603b3bb3db49818787a280f3088a0.jpg"
        ],
        "description": "Get ready to turn heads with our chic and stylish Mini Skirt! This skirt is the perfect addition to any wardrobe, with a flattering and versatile design that can be dressed up or down. Made with high-quality materials, our Mini Skirt is both comfortable and durable, ensuring that it will last for seasons to come. The skirt has a figure-hugging fit that accentuates your curves while still providing enough stretch for a comfortable and flexible wear. "
    }),
    await addDoc(productsRef, {   
        "name": "Long summer dress",
        "brand": "GoldenGlow",
        "collection": "Casually Important",
        "price": 30.00,
        "color": [
            "black and white"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "dress",
        "images": [
            "https://i.pinimg.com/736x/e3/b5/79/e3b579ff1ee7dad533b1d4c837bea930.jpg"
        ],
        "description": "Stay cool and stylish this summer with our stunning Long Summer Dress! Made with high-quality materials, this dress is lightweight and breathable, making it the perfect choice for hot summer days. The dress features a flowy, maxi length that provides both comfort and elegance, and it comes in a range of colors and patterns to suit any style. The sleeveless design is perfect for showing off your sun-kissed skin, while the adjustable waistband allows you to customize the fit to your liking. Whether you're headed to a beach vacation, a summer wedding, or just a casual day out, our Long Summer Dress is the perfect choice for any occasion."
    }),
    await addDoc(productsRef, {   
        "name": "Slim T-shirt",
        "brand": "GoldenGlow",
        "collection": "Casually Important",
        "price": 19.00,
        "color": [
            "white"
        ],
        "size": [
            "XXS",
            "XS",
            "S",
            "M",
            "L"
        ],
        "material": [
            "100% cotton"
        ],
        "gender": "women",
        "category": "T-shirt",
        "images": [
            "https://data.whicdn.com/images/355659463/original.jpg"
        ],
        "description": "Get ready for a sleek and stylish look with our Slim T-shirt! Made with high-quality materials, this shirt is both comfortable and durable, ensuring that it will be a staple in your wardrobe for seasons to come. The shirt features a slim fit design that hugs your body in all the right places, highlighting your physique and providing a flattering silhouette. The shirt comes in a range of colors and sizes to suit any style, and its versatile design makes it perfect for any occasion, from a night out with friends to a casual day at work."
    }),
    await addDoc(productsRef, {   
        "name": "Cone skirt",
        "brand": "GoldenGlow",
        "collection": "Casually Important",
        "price": 24.00,
        "color": [
            "dark-blue"
        ],
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "material": [
            "100% denim"
        ],
        "gender": "women",
        "category": "skirt",
        "images": [
            "https://i.pinimg.com/originals/1c/42/55/1c425522729635cdd53515fefd09ed0d.jpg"
        ],
        "description": "Elevate your style with our chic and trendy Cone Skirt! This skirt features a unique design that is sure to turn heads, with a flattering high-waist and a playful cone-shaped silhouette. Made with high-quality materials, our Cone Skirt is both comfortable and durable, ensuring that you'll feel confident and stylish all day long. The skirt comes in a range of colors and patterns to suit any style, and its versatile length makes it perfect for any occasion, from a night out to a formal event."
    });
}