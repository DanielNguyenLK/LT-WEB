var baiViet1 = {
    url: "gia-cao-su-xuat-khau-van-o-muc-thap-nhat",
    title: "Giá cao su xuất khẩu vẫn ở mức thấp",
    date: "2019-04-10",
    content: [
                "img@:@assets/img/cao-su.png",
                "strong@:@Xuất khẩu cao su Việt Nam đạt 71 nghìn tấn, giá trị đạt 93 triệu USD",
                "Theo báo cáo của Trung tâm tin học & Thống kê Bộ NN&PTNT, khối lượng xuất khẩu cao su tháng 2 năm 2019 của Việt nam ước đạt 71 nghìn tấn với giá trị đạt 93 triệu USD. Với ước tính này, khối lượng xuất khẩu cao su 2 tháng đầu năm 2019 đạt 228 nghìn tấn và 293 triệu USD, tăng 22,4% về khối lượng và tăng 6,8% về giá trị so với cùng kỳ năm 2018.",
                "Giá cao su xuất khẩu bình quân tháng 1 năm 2019 đạt 1.271 USD/tấn, giảm 13,1% so với cùng kỳ năm 2018. Trung Quốc, Ấn Độ, và Hàn Quốc là 3 thị trường tiêu thụ cao su lớn nhất của Việt Nam trong tháng 1 năm 2019, chiếm thị phần lần lượt là 65,6%, 8,9% và 3,1%.",
                "Thị trường cao su nguyên liệu trong nước trầm lắng trước và sau Tết Nguyên đán. Giá mủ cao su Bình Phước tháng 2/2019 giữ ở mức 255 đồng/độ. Tại Đồng Nai, mủ cao su dạng nước vẫn giữ ở mức 12.000 đồng/kg. Đầu năm 2019, xuất khẩu cao su của Việt Nam sang các nước đạt 157,15 nghìn tấn, ứng với 199,78 triệu USD, tăng 16 % về lượng và 0,8% về giá trị.",
                "Dự báo trong năm nay, mức tăng trưởng tiêu thụ cao su thiên nhiên của toàn cầu sẽ chậm lại, ở mức 2,5%/năm, thêm nữa bất cứ động thái nào của Mỹ áp thuế lên ô tô và phụ tùng ô tô từ Trung Quốc đều có thể ảnh hưởng tiêu cực tới nhu cầu cao su tự nhiên, đây cũng là nước nhập khẩu cao su lớn nhất của Việt Nam. Trong thời gian tới, doanh nghiệp Việt Nam nên tìm kiếm những thị trường mới, tránh phụ thuộc vào những thị trường lớn như trước đây."
            ],
    tag: ["Kinh doanh", "Nông sản"]
};

var listBaiViet = [baiViet1];
window.onload = function() {
    var text = window.location.hash.substring(1)
    listBaiViet.forEach(element => {
        if (element.url === text) {
            // display content bai viet
            var titles = document.getElementById("title-bai-viet");
            titles.innerText = element.title;
            var tags = document.getElementById("tags-bai-viet");
            tags.innerHTML = `<li><span><i class="glyphicon glyphicon-calendar"></i> 2019-04-10 </span></li>`;
            element.tag.forEach(item => {
                tags.innerHTML += `<li> | </li>
                                   <span><i class="glyphicon glyphicon-tag"></i> ` + item + ` </span>`;
            });
            var content = document.getElementById("content-bai viet");
            element.content.forEach(item => {
                var temp = item.split("@:@");
                if (temp.length > 1) {
                    if (temp[0] === "img") { //image tag 
                        content.innerHTML += `<img class="img-main my-4" id="image" src="`+ temp[1] +`"><hr>`;
                    } else if (temp[0] === "strong") {
                        content.innerHTML += `<p><strong>` + temp[1] + `</strong></p>`;
                    }
                } else{
                    content.innerHTML += `<p>`+ item +`</p>`;
                }
            });
        }
    });
};