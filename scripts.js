(function($){
  
  const apiBase = window.location.origin;
  
  const fetchProductDetails = async (path) => {
   const res = await axios.get(`${apiBase}/api/v1/entity_route/route?url_part=${path}`);
   return await res;
  }
  
  const productSelector = '[class*="grid__container-12"] [class*="styles__product"]';
  const productLinkSelector = '[class*="styles__link"]';
  const appendProductDetails = async function () {
    const product = $(this);
    const productUrl = product.find(productLinkSelector).attr('href');
    const { data } = await fetchProductDetails(productUrl);
    const sku = data?.result?.route?.other_props?. product_variants?.[0]?.sku;
    const name = data?.result?.route?.other_props?. product_categories?.[1]?.name;
    product.append(`<div>${sku} - ${name}</div>`)  
  };
  $(productSelector).each(appendProductDetails);
  
  
  $('[class*="styles__left-side"] > [class*="styles__user-auth"]').clone(true).appendTo('[class*="styles__footer"] [class*="styles__column-menu"] > ul > li:last-child');
  $('[class*="styles__footer"] div[class*="styles__logo"]').append("<div>عکس آرت یک فضایی برای نمایش و حفظ هنر عکاسان و ترغیب این هنر برای سایرین است</div>");
  
})(jQuery)
