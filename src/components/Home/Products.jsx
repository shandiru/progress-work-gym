import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Product data by category
const productData = {
  "preWorkout": [
    {
      name: "ABE-Candy Ice Blast",
      desc: "Refreshing and energizing formula",
      img: "/ABE_Candy_Ice_Blast.png", // ABE Candy Ice Blast image
    },
    {
      name: "Naughty Boy - Apple Power",
      desc: "Apple flavor with powerful energy boost",
      img: "/apple-power.png", // Apple Power image
    },
    {
      name: "ABE-Baddy Berry",
      desc: "Intense focus and energy",
      img: "/baddy.png", // Baddy image
    },
    {
      name: "Nova Pump - Stim Free - Blackberry Mojito",
      desc: "Blackberry flavor for a burst of energy",
      img: "/blackberry.png", // Blackberry image
    },
    {
      name: "Naughty Boy - Blue Razz",
      desc: "Smooth blue berry flavor with intense effects",
      img: "/blue.png", // Blue image
    },
    {
      name: "Conteh - Conviction - Blue Ice Pop",
      desc: "Cool and energizing ice flavor",
      img: "/blue-ice.png", // Blue Ice image
    },
    {
      name: "Conteh Mega Pump - Rasberry Twist",
      desc: "Energy and endurance with a unique flavor",
      img: "/conteh.png", // Conteh image
    },
    {
      name: "EHP Labs - Oxyshred Proton Plasma",
      desc: "Enhanced energy and focus with every scoop",
      img: "/EHP.png", // EHP image
    },
    {
      name: "Conteh Mega Pump - Fruit Burst",
      desc: "Packed with fruit flavor and natural energy",
      img: "/Fruit.png", // Fruit image
    },
    {
      name: "Innova Pharm - Nova Pump Neuro Pump - Sour Apple",
      desc: "Innovative formula for ultimate performance",
      img: "/innova.png", // Innova image
    },
    {
      name: "Naughty Boy - Strawberry Mango",
      desc: "Tropical mango flavor for a boost of energy",
      img: "/mango.png", // Mango image
    },
    {
      name: "Naughty Boy Fruit Twist ",
      desc: "Sweet and tangy fruit twist flavor",
      img: "/Naughty_Boy_Fruit_Twist.png", // Naughty Boy Fruit Twist image
    },
    {
      name: "Zombie Juice - Tropical Cruch",
      desc: "Tropical explosion of energy and flavor",
      img: "/tropical.png", // Tropical image
    },
    {
      name: "Zombie Juice - Lemon Energy",
      desc: "Unstoppable energy with a zombie twist",
      img: "/zombie.png", // Zombie image
    }
  ],

  "Protein Powder": [
    {
      "name": "Naughty Boy Birthday Cake",
      "desc": "Sweet birthday cake flavored protein powder",
      "img": "Naughty_Boy_Birthday_Cake-removebg-preview.png"
    },
    {
      "name": "Naughty Boy Chocolate Orange",
      "desc": "Rich chocolate with a zesty orange twist",
      "img": "Naughty Boy Chocolate Orange.png"
    },
    {
      "name": "NXT Nutrition Beef Isolate Lemon Lime",
      "desc": "Beef isolate protein with lemon lime flavor",
      "img": "NXT_Nutrition-Beef_Isolate-Lemon___Lime-removebg-preview.png"
    },
    {
      "name": "NXT Nutrition Beef Isolate Mojito",
      "desc": "Refreshing mojito flavored beef isolate protein",
      "img": "NXT_Nutrition-Beef_Isolate-Mojito-removebg-preview.png"
    },
    {
      "name": "Per4m Protein Pancakes Chocolate Chip",
      "desc": "Protein-packed pancakes with chocolate chips",
      "img": "Per4m_Chocolate_chip_pancakes_-removebg-preview.png"
    },
    {
      "name": "Per4m Protein Pancakes Cookies n Creme",
      "desc": "Delicious cookies n creme protein pancake mix",
      "img": "Per4m_Cookies_and_Cream-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Baklava",
      "desc": "Exotic baklava flavored whey protein",
      "img": "Per4m_Whey_Protein-Baklava-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Banana Creme",
      "desc": "Smooth banana creme whey protein powder",
      "img": "Per4m_Banana_Whey-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Carrot Cake",
      "desc": "Unique carrot cake flavored whey protein",
      "img": "Per4m_Whey_Protein-Carrot_Cake-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Chocolate Brownie Batter",
      "desc": "Decadent brownie batter flavored whey protein",
      "img": "Per4m_Whey_Protein-Chocolate_Brownie_Batter-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Chocolate Brownie",
      "desc": "Classic chocolate brownie whey protein powder",
      "img": "Per4m_Whey_Protein-Chocolate_Brownie-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Double Chocolate",
      "desc": "Rich double chocolate flavored whey protein",
      "img": "Per4m_Whey_Protein-Double_Chocolate-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Fluffy Marshmallow",
      "desc": "Sweet marshmallow flavored whey protein",
      "img": "Per4m_Whey_Protein-Fluffy_Marshmallow-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Raspberry White Chocolate",
      "desc": "Fruity raspberry with creamy white chocolate whey protein",
      "img": "Per4m_Whey_Protein-Rasberry_White_chocolate-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein sDouble Chocolate",
      "desc": "Extra rich chocolate protein powder",
      "img": "Per4m_Whey_Protein-sDouble_Chocolate-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Sweet Salty Popcorn",
      "desc": "Unique sweet and salty popcorn flavored whey protein",
      "img": "Per4m_Whey_Protein-Sweet-Salty_Popcorn-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein Vanilla Cream",
      "desc": "Classic vanilla cream flavored whey protein",
      "img": "Per4m_Whey_Protein-Vanilla_Cream-removebg-preview.png"
    },
    {
      "name": "Per4m Whey Protein White Chocolate Hazelnut",
      "desc": "Nutty white chocolate hazelnut whey protein",
      "img": "Per4m_Whey_Protein-White_Chocolate_Hazlenut-removebg-preview.png"
    },
    {
      "name": "TBJP Cream Of Rice",
      "desc": "Classic cream of rice carbohydrate supplement",
      "img": "TBJP_-_Cream_Of_Rice-removebg-preview.png"
    }
  ],

  "Protein Bars": [
    {
      "name": "Bounty Hi Protein Bar",
      "desc": "Tropical coconut and chocolate with protein boost",
      "img": "Bounty_Protein_Bar_-removebg-preview.png"
    },
    {
      "name": "Food Connections Chocolate Caramel",
      "desc": "Chocolate and caramel protein bar indulgence",
      "img": "Connections_Chocolate_caramel-removebg-preview.png"
    },

    {
      "name": "Food Connections Strawberry Jam",
      "desc": "Sweet strawberry jam-filled protein bar",
      "img": "Connections_Strawberry_Jam-removebg-preview.png"
    },

    {
      "name": "Food Connections Sultana Cherry",
      "desc": "Fruity protein bar with sultana and cherry",
      "img": "Connections_Sultana_Cherry-removebg-preview.png"
    },

    {
      "name": "Grenade Protein Bar Cookie Dough",
      "desc": "Cookie dough flavor packed with protein",
      "img": "Grenade_Protein_Bar-Cookie_Dough-removebg-preview.png"
    },

    {
      "name": "Grenade Protein Bar Fudge Up",
      "desc": "Fudgy and rich protein bar treat",
      "img": "Grenade_Protein_Bar-Fudge_Up-removebg-preview.png"
    },
    {
      "name": "Grenade Protein Bar Oreo",
      "desc": "Oreo-inspired protein bar with creamy crunch",
      "img": "Grenade_Protein_Bar-Oreo_-removebg-preview.png"
    },
    {
      "name": "Per4m Protein Bar Chocolate Peanut Butter",
      "desc": "Chocolate and peanut butter protein goodness",
      "img": "Per4m_Protein_Bar-Chocolate_Peanut_Butter-removebg-preview.png"
    },
    {
      "name": "Snickers Crisp Hi Protein Bar",
      "desc": "Crispy Snickers with added protein",
      "img": "Snickers_Crisp_Hi_Protein_Bars-removebg-preview.png"
    },
    {
      "name": "Snickers Hi Protein Cookies",
      "desc": "Snickers with cookie twist and protein boost",
      "img": "Snickers_Hi-Protein_Cookies-removebg-preview.png"
    },
    {
      "name": "Snickers Hi Protein Bar",
      "desc": "Classic Snickers flavor, now protein-packed",
      "img": "Snickers-Hi_Protein_Bar-removebg-preview.png"
    }
  ]
  ,
  "Drinks": [
    {
      "name": "Chefs Brigade Liquid Egg Whites",
      "desc": "Pure protein boost for clean nutrition",
      "img": "Chefs_Brigade_-_Liquid_Egg_Whites-removebg-preview.png"
    },
    {
      "name": "Grenade Cookies & Cream",
      "desc": "Delicious protein snack with classic flavor",
      "img": "Grenade_-_Cookies___Cream-removebg-preview.png"
    },
    {
      "name": "Grenade Fudge Brownie",
      "desc": "Rich chocolate taste packed with protein",
      "img": "Grenade_-_Fudge_Brownie_-removebg-preview.png"
    },
    {
      "name": "Grenade Salted Caramel",
      "desc": "Sweet & salty protein satisfaction",
      "img": "Grenade_-_Salted_Caramel__copy-removebg-preview.png"
    },
    {
      "name": "Grenade Strawberries & Cream",
      "desc": "Fruity and creamy protein indulgence",
      "img": "Grenade_-_Strawberries___Cream-removebg-preview.png"
    },
    {
      "name": "Grenade White Chocolate",
      "desc": "Smooth and sweet protein fuel",
      "img": "Grenade_-_White_Chocolate-removebg-preview.png"
    },
    {
      "name": "Lucozade Sport Drink Raspberry",
      "desc": "Hydration with refreshing raspberry flavor",
      "img": "Lucozade_Sport_Drink_Raspberry-removebg-preview.png"
    },
    {
      "name": "QNT Actif BCAA Grapefruit",
      "desc": "Refreshing BCAA drink with grapefruit taste",
      "img": "QNT_Actif_By_Juice_BCAA_S_8000__-_Grapefruit_-removebg-preview.png"
    },
    {
      "name": "QNT Actif BCAA Lemon",
      "desc": "Boost recovery with lemon flavored BCAAs",
      "img": "QNT_Actif_By_Juice_BCAA_S_8000_-_Lemon-removebg-preview.png"
    },
    {
      "name": "QNT Carbo Load Lemon Lime",
      "desc": "Energy-loaded drink with citrus twist",
      "img": "QNT_Carbo_Load_-_Lemon_Lime-removebg-preview.png"
    },
    {
      "name": "QNT Carbo Load Superfruit",
      "desc": "Superfruit-powered carbohydrate drink",
      "img": "QNT_Carbo_Load_-_Superfruit_-removebg-preview.png"
    },
    {
      "name": "Reign Monster Razzle Berry",
      "desc": "Energy drink with bold berry flavor",
      "img": "Reign_Monster_REIGN_Razzle_Berry-removebg-preview.png"
    },
    {
      "name": "UFIT 25G Banana",
      "desc": "Protein-packed banana shake",
      "img": "UFIT_25G__-_Banana-removebg-preview.png"
    },
    {
      "name": "UFIT 25G Salted Caramel",
      "desc": "Sweet & salty protein drink",
      "img": "UFIT_25G__-_Salted_Caramel_-removebg-preview.png"
    },
    {
      "name": "UFIT 25G White Chocolate",
      "desc": "Creamy protein drink with white chocolate flavor",
      "img": "UFIT_25G__-_White_Chocolate_-removebg-preview.png"
    },
    {
      "name": "UFIT 25G Caramel Biscuit",
      "desc": "Protein shake with caramel biscuit taste",
      "img": "UFIT_25G_-_Carmel_Biscuit_-removebg-preview.png"
    },
    {
      "name": "UFIT 25G Raspberry Ripple",
      "desc": "Sweet and tangy raspberry ripple flavor",
      "img": "UFIT_25G_-_Rasberry_Ripple-removebg-preview.png"
    }, {
      "name": "EHP Labs x Ghostbusters Oxyshred Proton Plasma",
      "desc": "High-energy formula with explosive Ghostbusters collab",
      "img": "EHP_Labs_x_Ghostbusters_Oxyshred_Proton_Plasma-removebg-preview.png"
    },
    {
      "name": "EHP Labs x Ghostbusters Oxyshred Slimer",
      "desc": "Limited edition Oxyshred with Slimer-inspired flavor",
      "img": "EHP_Labs_x_Ghostbusters_Oxyshred_Slimer-removebg-preview.png"
    },
    {
      "name": "Ice Valley Water",
      "desc": "Pure and refreshing natural spring water",
      "img": "Ice_ValleyWater_-removebg-preview.png"
    },
    {
      "name": "QNT 53g Protein Shake Banana",
      "desc": "Banana-flavored protein shake with 53g protein",
      "img": "QNT_53g_Protein_Shake_-_Banana-removebg-preview.png"
    },
    {
      "name": "QNT 53g Protein Shake Chocolate",
      "desc": "Rich chocolate protein shake with 53g protein",
      "img": "QNT_53g_Protein_Shake_-_Chocolate_-removebg-preview.png"
    },
    {
      "name": "QNT 53g Protein Shake Cookie",
      "desc": "Cookie-inspired shake packed with protein",
      "img": "QNT_53g_Protein_Shake_-_Cookie-removebg-preview.png"
    },
    {
      "name": "QNT 53g Protein Shake Strawberry",
      "desc": "Strawberry protein shake for fruity recovery",
      "img": "QNT_53g_Protein_Shake_-_Strawberry_-removebg-preview.png"
    },
    {
      "name": "QNT 53g Protein Shake Vanilla",
      "desc": "Classic vanilla protein shake for muscle growth",
      "img": "QNT_53g_Protein_Shake_-_Vanilla-removebg-preview.png"
    },
    {
      "name": "Red Bull Sugar Free Pink Edition",
      "desc": "Zero sugar energy boost with pink edition flavor",
      "img": "Red_Bull_Sugar_Free_Pink_Edition-removebg-preview.png"
    },
    {
      "name": "Red Bull Winter Edition Iced Vanilla Berry",
      "desc": "Seasonal energy drink with iced vanilla berry flavor",
      "img": "Red_Bull_Winter_Edition_Iced_Vanilla_Berry-removebg-preview.png"
    }
  ]

};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("preWorkout");
  const [startIndex, setStartIndex] = useState(0);

  // Ensure items are safely retrieved from productData, default to empty array if undefined
  const items = productData[activeCategory] || [];
  const visibleItems = items.slice(startIndex, startIndex + 3);

  const categories = Object.keys(productData);

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, items.length - 3));
  };

  const handleCategory = (cat) => {
    if (productData[cat]) {  // Only set the category if it's valid
      setActiveCategory(cat);
      setStartIndex(0);
    }
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-600">PRODUCTS</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Fuel your workouts with premium supplements
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 border rounded-md ${activeCategory === cat
              ? "bg-red-600 text-white"
              : "border-red-600 text-white hover:bg-red-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="text-red-500 md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-md overflow-hidden bg-black hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-48 flex items-center justify-center bg-white">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-full object-contain"
                />
              </div>
              <div className="bg-[#0d1117] p-4">
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={startIndex + 3 >= items.length}
          className="text-red-500 md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}