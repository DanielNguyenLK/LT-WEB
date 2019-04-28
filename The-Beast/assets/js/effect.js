var slideIndex = 0;
var baiViet1 = {
  url: "gia-cua-bien-ca-mau-tang-manh",
  image: "assets/img/cua-ca-mau-hinh-1.png",
  header: "Giá cua biển Cà Mau tăng mạnh",
  displayText: "Ghi nhận của PV Báo NNVN tại huyện Cái Nước (Cà Mau), ở thời điểm hiện tại cua gạch, cua cốm (cua lột) có giá dao động từ 550 – 600 ngàn đồng/kg, tăng từ 120 – 150 ngàn đồng/kg so với tháng trước; cua y có giá khoảng 350 – 370 ngàn đồng/kg; cua xô khoảng 100 ngàn đồng/kg",
}
var baiViet2 = {
  url: "nhung-ty-phu-chan-dat-nho-trong-thanh-long",
  image: "assets/img/TL-hinh-6.png",
  header: "Những tỷ phú 'chân đất' nhờ trồng thanh long",
  displayText: "Từ một xã nghèo cái ăn không đủ, người dân phải bỏ quê đi tha phương cầu thực thì đến nay xã Tân Thuận, huyện Hàm Thuận Nam, Bình Thuận đang là nơi có nhiều tỷ phú nhờ trồng cây thanh long . Xã Tân Thuận cách trung tâm huyện Hàm Thuận Nam chừng 5km theo đường chim bay. Nép mình sau núi Tà Cú, làng quê này xen giữa những cánh đồng thanh long bạt ngàn với những nóc nhà xanh đỏ hiện đại. Ngay khi bước chân vào đầu thôn Hiệp Nghĩa, chúng tôi bị choáng ngợp bởi những căn nhà mái Thái, những ngôi biệt thự đồ sộ lộng lẫy nằm dọc đường vào trung tâm xã."
}
var baiViet3 = {
  url: "",
  image: "assets/img/vai-hinh-5.png",
  header: "Mùa đông ấm, vải thiều lại 'tịt hoa'",
  displayText: "Diễn biến thời tiết mùa đông 2018-2019 ấm hơn mọi năm khiến nhiều diện tích vải thiều tại các vựa lớn như Bắc Giang, Hải Dương có tỉ lệ ra hoa thấp. Hiện tượng vải thiều mất mùa do “tịt hoa” này lại diễn ra tương tự như niên vụ năm 2016-2017."
}
var baiViet4 = {
  url: "vi-sao-cua-huynh-de-ban-gan-10-trieu-dong-con",
  image: "assets/img/cua-hd-hinh-5.png",
  header: "Vì sao cua huỳnh đế bán gần 10 triệu đồng/con?",
  displayText: "Nếu phải lựa chọn ra danh sách những món hải sản đắt đỏ nhất, cua hoàng đế (có nơi gọi là huỳnh đế) chắc chắn phải có một chỗ trong đó, thậm chí nằm trên top đầu. Cua huỳnh đế là gì và cua hoàng đế bổ dưỡng ra sao mà cực đắt. Được biết đến là một loại hải sản thơm ngon, cua hoàng đế có hình dạng lạ mắt, chắc thịt dù hơn 1 triệu/kg nhưng vẫn được mọi người ưa chuộng và tìm mua."
}
var baiViet5 = {
  url: "nam-2019-xuat-khau-tom-uoc-dat-4-ty-usd",
  image: "assets/img/tom-su-hinh-2.png",
  header: "Năm 2019, xuất khẩu tôm ước đạt 4 tỷ USD",
  displayText: "Tổng cục Thủy sản (Bộ NN-PTNT) vừa cho biết, năm 2019, ngành thủy sản đặt mục tiêu có tổng kim ngạch xuất khẩu tôm đạt 4 tỷ USD. Theo ông Trần Đình Luân, Phó Tổng cục trưởng Tổng cục Thủy sản, để đảm bảo cho mục tiêu này, ngay từ đầu năm, ngành thủy sản xác định diện tích nuôi tôm sú năm 2019 duy trì khoảng 620.000ha, với sản lượng khoảng 330.000 tấn."
}
listBaiViet = [baiViet1, baiViet2, baiViet3, baiViet4, baiViet5];
function nextImage() {
  console.log("next");
  slideIndex++;
  if(slideIndex > 4) {
    slideIndex = 0;
  }
  updateBanner();
}
function preImage() {
  console.log("pre");
  slideIndex--;
  if(slideIndex < 0) {
    slideIndex = 4;
  }
  updateBanner();
}
function updateBanner() {
  var banner = document.getElementById("slide-banner");
  var header = document.getElementById("header-banner");
  var content = document.getElementById("text-display");
  banner.style.backgroundImage = "url("+ listBaiViet[slideIndex].image +")";
  header.innerText = listBaiViet[slideIndex].header;
  content.innerText = listBaiViet[slideIndex].displayText;
}
function plusDivs() {
  slideIndex++;
  if(slideIndex > 4) {
    slideIndex = 0;
  }
  updateBanner();
  setTimeout(plusDivs, 5000);
}
function moreInfo() {
  location.replace("bai-viet-chi-tiet.html#" + listBaiViet[slideIndex].url);
}

plusDivs();