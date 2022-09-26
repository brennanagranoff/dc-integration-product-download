var axios = require("axios");

async function main() {
  let pageSize = 200;
  let pageNumber = 1;
  let anotherPage = true;

  let products = [];

  while (anotherPage) {
    console.log(`Fetching page ${pageNumber}...`);
    //make request\
    let response = await axios.get(
      `https://dcservicestest.azurewebsites.net/api/ProductPriceStockAvailability?code=4uDxNUkiT7KM7E84DUV2rpGCBIbj0wcwKRNBOYEmBIOBAzFu4Aww3g==&page_size=${pageSize}&page_number=${pageNumber}`
    );
    //add products to results
    for (let product of response.data) {
      products.push(product);
    }
    //check if there is another page
    if (response.data.length < pageSize) {
      anotherPage = false;
    }
    pageNumber++;
  }

  console.log(products.length);
}

main();
