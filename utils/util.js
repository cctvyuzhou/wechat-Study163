
var index_data = require('../data/index_data.js');
/*获取bannerArr*/
function getBanner(){
    return index_data.bannerSrc.banner;
}
/*获取navArr */
function getNav(){
    return index_data.navSrc.nav;
}
/*获取adArr */
function getAd(){
    return index_data.adSrc.ad;
}
module.exports.getBanner = getBanner;
module.exports.getNav = getNav;
module.exports.getAd = getAd;





