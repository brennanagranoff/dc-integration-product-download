var axios = require("axios");

async function main() {
  let pageSize = 5000;
  let pageNumber = 1;
  let anotherPage = true;

  let products = [];

  while (anotherPage) {
    //wait 2 seconds to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log(`Fetching page ${pageNumber}...`);
    //make request\
    var response = await axios.get(
      `https://dcservicestest.azurewebsites.net/api/ProductPriceStockAvailability?code=4uDxNUkiT7KM7E84DUV2rpGCBIbj0wcwKRNBOYEmBIOBAzFu4Aww3g==&page_size=${pageSize}&page_number=${pageNumber}`
    );
    console.log(
      `https://dcservicestest.azurewebsites.net/api/ProductPriceStockAvailability?code=4uDxNUkiT7KM7E84DUV2rpGCBIbj0wcwKRNBOYEmBIOBAzFu4Aww3g==&page_size=${pageSize}&page_number=${pageNumber}`
    );
    console.log(response.data);
    //add products to results
    for (let product of response.data) {
      products.push(product);
    }
    //check if there is another page
    if (response.data.length < pageSize) {
      anotherPage = false;
    }
    pageNumber = pageNumber + 1;
  }

  console.log(products.length);
}

main();
