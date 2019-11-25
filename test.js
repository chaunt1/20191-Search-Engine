let a =
[ { vname: [ 'Xin lỗi anh chỉ là sát thủ' ],
    ename: [ 'Luck-Key' ],
    director: [ 'Lee Gye-Byeok' ],
    country: [ 'Hàn Quốc' ],
    content: [ 'Luck-Key' ],
    tag:
     [ 'Phim chiến tranh',
       'Phim hài hước',
       'Phim chiếu rạp',
       'Phim thuyết minh',
       'Phim lẻ' ],
    url: [ 'phim/xin-loi-anh-chi-la-sat-thu-4603/' ],
    id: '48559c5f-4ecc-4ed8-b32a-7f3c7bbe9eba',
    _version_: 1650976255480168400 },
  { vname: [ 'Chìa khóa cuộc đời' ],
    ename: [ 'Key Of Life' ],
    director: [ 'Kenji Uchida' ],
    country: [ 'Nhật Bản' ],
    content:
     [ 'Một anh chàng diễn viên không mấy nổi tiếng và gặp nhiều rắc rối với vấn đề tiền nong tên là ' ],
    tag: [ 'Phim chiến tranh', 'Phim hài hước', 'Phim lẻ' ],
    url: [ 'phim/chia-khoa-cuoc-doi-4614/' ],
    id: '0624be0c-9bbe-40a6-b9f8-1e24888c589b',
    _version_: 1650976255563006000 },
  { vname: [ 'Chìa khóa xương người' ],
    ename: [ 'The Skeleton Key' ],
    director: [ 'Iain Softley' ],
    country: [ 'Mỹ', 'Đức' ],
    content:
     [ 'Caroline, một nữ y tá được mời đến chăm lo cho người chồng bị liệt của một phụ nữ đứng tuổi tại ngôi nhà của họ ở gần dòng sông Louisiana. Ngôi biệt thự với lối kiến trúc Gothic này đầy vẻ bí ẩn và rùng rợn cùng những hành vi ứng xử kỳ lạ bí ẩn của cặp vợ chồng già khiến Caroline tò mò muốn khám phá ngôi nhà cũ này. Có trong tay chiếc chìa khoá thân xương có thể mở ra mọi cánh cửa, cô đã khám phá ra một căn phòng bí mật chứa đựng một bí mật chết người và rùng rợn.\n' ],
    tag: [ 'Phim phiêu lưu', 'Phim kinh dị', 'Phim lẻ' ],
    url: [ 'phim/chia-khoa-xuong-nguoi-2160/' ],
    id: '134cf93d-bd88-4d90-b238-239fcb00325c',
    _version_: 1650976255725535200 },
  { vname: [ 'Quỷ Quyệt : Chìa Khóa Quỷ Dữ' ],
    ename: [ 'Insidious: The Last Key' ],
    director: [ 'Adam Robitel' ],
    country: [ 'Mỹ', 'Canada' ],
    content:
     [ 'Dường như bối cảnh và mốc thời gian của Insidious 4 diễn ra trước cả ba phần đầu tiên. ' ],
    tag:
     [ 'Phim kinh dị',
       'Phim hồi hộp-Gây cấn',
       'Phim Bí ẩn-Siêu nhiên',
       'Phim chiếu rạp',
       'Phim thuyết minh',
       'Phim lẻ' ],
    url: [ 'phim/quy-quyet-chia-khoa-quy-du-i2-6379/' ],
    id: '001c5f4d-97e9-4264-819a-b906a1c92437',
    _version_: 1650976255428788200 } ];

    let b = Object.keys(a).map(function(key){
        return [Number(key), a[key]]
    })

    let c = Object.keys(a).map(function(key){
        return [a[key]]
    })
console.log(b[0][1].vname)
console.log(c[0])

let d = [1,2,3];

console.log(d.map((d) => d + ', '));