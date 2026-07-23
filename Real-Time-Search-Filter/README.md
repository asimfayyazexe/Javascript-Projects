# Real Time Prodcut Search Filter 

A responsive product search and filter web app built with vanilla HTML, CSS, and JavaScript.
---

## ✨ Features

- 🔍 **Live Search** — filters products instantly as you type
- 🏷️ **Category Filter** — filter by All, Topwear, Bottomwear, Jacket, Shoes, Watch
- 🎨 **Smooth Animations** — cards fade in and out on filter/search
- 📱 **Responsive Design** — works on all screen sizes
- ⚡ **No Libraries** — pure HTML, CSS, and JavaScript

---

## 🗂️ Project Structure

```
Real-Time-Search-Filter/
├── index.html       # Main HTML file
├── style.css        # All styling
├── script.js        # Search and filter logic
└── img/             # Product images and background
    ├── background-image.jpg
    ├── Jeans.jpg
    ├── Pant.jpg
    ├── White-shirt.jpg
    ├── Shoes.jpg
    ├── Watch-1.webp
    ├── Watch.jpg
    └── Jacket.jpg
```

---

## 🧠 How It Works

### Search
- User types in the search bar
- JavaScript listens with `addEventListener("input")`
- Every card is checked — if the product name includes the typed text it stays visible, otherwise it hides

### Category Filter
- Each button passes its text to `filterProduct()`
- Cards store their category in `data-category` attribute
- Only cards matching the active category are shown

### Both Together
- Search and filter work at the same time
- A card must pass **both** checks to be visible

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML | Page structure |
| CSS | Styling and animations |
| JavaScript | Search and filter logic |
| Google Fonts | Noto Sans font |
| Font Awesome | Search icon |

---

## 📦 Products Included

| Product | Category | Price |
|---|---|---|
| Denim Baggy Jeans | Bottomwear | 4500 PKR |
| Cotton Jeans Pant | Bottomwear | 3000 PKR |
| White T-shirt | Topwear | 1500 PKR |
| Sports Shoes | Shoes | 4000 PKR |
| NaviForce Watch | Watch | 6000 PKR |
| Black Watch | Watch | 5000 PKR |
| Black Leather Jacket | Jacket | 8000 PKR |

---

## 📚 What I Learned

- DOM manipulation with `createElement`, `appendChild`
- Event listeners — `input`, `click`
- Filtering arrays and toggling CSS classes with JavaScript
- Responsive CSS Grid with `auto-fill` and `minmax`
- CSS transitions for smooth animations
- Git and GitHub for version control
---

## 📄 License
This project is open source and free to use.
