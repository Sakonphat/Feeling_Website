(function(window, undefined) {
  var dictionary = {
    "3c30da31-9c85-4cf9-a5a7-baddbea66b4a": "DontHaveID",
    "8f9314d1-96a4-4670-a24d-47bd2566a02f": "ProductList_Page",
    "d825f401-2839-44d6-9a77-fffca5fcfde6": "Product_detail_page",
    "a044234b-c792-4acc-a45c-d8bb0c35e2eb": "WISHLIST",
    "f8ff64c8-158c-4e65-a4d2-d2f2c5b7f8ff": "lounge_page",
    "3b2f4520-4c6e-4eac-b687-1cbb956d54ff": "CART",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "HomePage",
    "04ba84fe-cbde-401e-8c09-fd61a7ae908b": "Account_Address_Payment",
    "19341e4f-1e43-4c21-938a-9b1d192e2689": "Dining",
    "28fbe37f-a101-45d5-a550-394da5f63a15": "Lighting",
    "19ce976f-b797-4ce5-950a-7d9c7046b5e8": "Pay_Page",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "ad962290-925f-4fc6-9d8a-c57b532ccdc9": "Menubar",
    "760acb75-600c-4af6-bf64-0348d3bc9646": "BreadCrum",
    "84009793-81ff-42a2-8f06-9a81775f497a": "Footer",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);