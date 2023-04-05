# GoldenGlow Boutique

GoldenGlow Boutique is an e-commerce single-page application (SPA) built with React and Firebase. It allows users to browse a selection of elegant clothing and add items to their cart.

GoldenGlow Boutique is hosted on **Firebase Hosting**. You can access the hosted application by visiting [https://goldenglow.web.app/](https://goldenglow.web.app/).

## Table of Contents
- [Features](https://github.com/yoantodorovv/GoldenGlow#features)
- [Installation](https://github.com/yoantodorovv/GoldenGlow#installation)
- [Usage](https://github.com/yoantodorovv/GoldenGlow#usage)
- [Technology Used](https://github.com/yoantodorovv/GoldenGlow#technology-used)
- [APIs](https://github.com/yoantodorovv/GoldenGlow#apis)
- [License](https://github.com/yoantodorovv/GoldenGlow#license)

## Features
GoldenGlow Boutique offers the following features:

- Browse and search for elegant clothing products
- Filter products by gender, collection and category
- Add products to a shopping cart and wishlist
- Order a product
- View order history and details
- Sign Up with a Google account or with email and password
- Manage your profile once you have signed up
- Contact GoldenGlow elite support team

## Installation
1. Clone this repository to your machine:

```bash
git clone https://github.com/yoantodorovv/GoldenGlow.git
```

2. Install the required dependencies by running `npm install` in the project directory:

```bash
cd client
npm install
```

3. Create a Firebase project and configure the app with your Firebase credentials:
   1. Go to [Firebase](https://firebase.google.com/) and create an account. */If you don't already have one/*
   2. Go to the **Firebase Console** and create a new project.
   3. In the project overview page, click on *"Add Firebase to your web app"*. This will display a pop-up with your Firebase configuration details.
   4. Copy your configuration details into `src/services/firebase.js` in the project directory and replace **only the `firebaseConfig` object** containing the configuration settings for your Firebase project:

       ```javascript
       export const FIREBASE_CONFING = {
           apiKey: "YOUR_API_KEY",
           authDomain: "YOUR_AUTH_DOMAIN",
           projectId: "YOUR_PROJECT_ID",
           storageBucket: "YOUR_STORAGE_BUCKET",
           messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
           appId: "YOUR_APP_ID"
       };
       ```
    5. Start the app with `npm run dev`
       ```bash
       npm run dev
       ```
       The app should now be running on [http://localhost:5173](http://localhost:5173) in your web browser.

       **Note:** You need to be in the **client** folder, in order to successfully run the development script.

       **Note:** Before the app can be used to display store location information, you'll need to obtain a **Google Maps API key**. Once you have your API key, you can replace the `key` constant in `src/services/googleMapsService.js`:

       ```javascript
       export const key = YOUR_GOOGLE_MAPS_API_KEY;
       ```

## Usage

Once GoldenGlow Boutique is running on your machine, you can access it by visiting [http://localhost:5173](http://localhost:5173) in your web browser. You can browse products and add them to your shopping cart.

## Technology Used
The following technologies and libraries were used to build GoldenGlow Boutique:
- React
- Firebase
- react-router-dom
- react-fontAwesome-icons
- react-slick
- slick-carousel
- sweetalert2

## APIs
GoldenGlow Boutique uses the following APIs:
- Google Maps API (to display store location information)

**Note:** You'll need to obtain your own API keys for these services and add them to the appropriate configuration files in the project directory. Reference **Installation**.

## License

GoldenGlow Boutique is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
