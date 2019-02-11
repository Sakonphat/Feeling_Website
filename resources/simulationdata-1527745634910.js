function initData() {
  jimData.variables["CardNumber"] = "";
  jimData.variables["CVV"] = "";
  jimData.variables["firstname"] = "";
  jimData.variables["Address"] = "";
  jimData.variables["Product_ID"] = "000";
  jimData.variables["YearCard"] = "";
  jimData.variables["Dots"] = "1";
  jimData.variables["InformationSec"] = "0";
  jimData.variables["clickCart"] = "0";
  jimData.variables["List_Page_Panel"] = "6";
  jimData.variables["Product_Image"] = "";
  jimData.variables["ClickWishlist"] = "0";
  jimData.variables["LnameA"] = "";
  jimData.variables["Subtotal"] = "100";
  jimData.variables["Product_Name"] = "";
  jimData.variables["telephone"] = "";
  jimData.variables["Mounthcard"] = "";
  jimData.variables["lastname"] = "";
  jimData.variables["zipcode"] = "";
  jimData.variables["ClikAdd"] = "0";
  jimData.variables["Product_Price"] = "";
  jimData.variables["Country"] = "";
  jimData.variables["fnameA"] = "";
  jimData.variables["CardHolder"] = "";
  jimData.variables["position"] = "1";
  jimData.variables["Product_PriceDiscount"] = "";
  jimData.variables["username"] = "";
  jimData.datamasters["Wishlist"] = [
    {
      "id": 1,
      "datamaster": "Wishlist",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "Quantity": "",
        "ID": "000",
        "Discount": ""
      }
    },
    {
      "id": 2,
      "datamaster": "Wishlist",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "Quantity": "",
        "ID": "001",
        "Discount": ""
      }
    },
    {
      "id": 3,
      "datamaster": "Wishlist",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "Quantity": "",
        "ID": "002",
        "Discount": ""
      }
    },
    {
      "id": 4,
      "datamaster": "Wishlist",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "Quantity": "",
        "ID": "003",
        "Discount": ""
      }
    }
  ];

  jimData.datamasters["ShopingCart"] = [
    {
      "id": 1,
      "datamaster": "ShopingCart",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "quntity": "",
        "ID": "000",
        "Discount": ""
      }
    },
    {
      "id": 2,
      "datamaster": "ShopingCart",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "quntity": "",
        "ID": "001",
        "Discount": ""
      }
    },
    {
      "id": 3,
      "datamaster": "ShopingCart",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "quntity": "",
        "ID": "002",
        "Discount": ""
      }
    },
    {
      "id": 4,
      "datamaster": "ShopingCart",
      "userdata": {
        "Name": "",
        "Price": "",
        "Photo": "./resources/_jim/images/common/crossimage.png",
        "quntity": "",
        "ID": "003",
        "Discount": ""
      }
    }
  ];

  jimData.datamasters["users"] = [
    {
      "id": 1,
      "datamaster": "users",
      "userdata": {
        "username": "test",
        "password": "123",
        "firstname": "sample text",
        "lastName": "sample text",
        "Country": "sample text",
        "Address": "sample text",
        "Zipcode": "sample text",
        "Telephone": "sample text",
        "FirstNameA": "sample text",
        "LastNameA": "sample text"
      }
    }
  ];

  jimData.isInitialized = true;
}