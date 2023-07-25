// QUẢN LÝ TUYỂN SINH
function layGiaTriKhuVuc() {
  const giaTriKhuVucDaChon = document.getElementById("khuVuc").value;
  if (giaTriKhuVucDaChon === "khuVucA") {
    return 2;
  } else if (giaTriKhuVucDaChon === "khuVucB") {
    return 1;
  } else if (giaTriKhuVucDaChon === "khuVucC") {
    return 0.5;
  } else {
    return 0;
  }
}
function layGiaTriDoiTuong() {
  const giaTriKhuVucDaChon = document.getElementById("doiTuong").value;
  if (giaTriKhuVucDaChon === "doiTuong1") {
    return 2.5;
  } else if (giaTriKhuVucDaChon === "doiTuong2") {
    return 1.5;
  } else if (giaTriKhuVucDaChon === "doiTuong3") {
    return 1;
  } else {
    return 0;
  }
}

function xuLyKetQuaTinhDiemSinhVien() {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const diemMonThuNhat = document.getElementById("diemMonThuNhat").value * 1;
  const diemMonThuHai = document.getElementById("diemMonThuHai").value * 1;
  const diemMonThuBa = document.getElementById("diemMonThuBa").value * 1;
  const ketQua = document.getElementById("ketQua");
  const diemKhuVuc = layGiaTriKhuVuc();
  const diemDoiTuong = layGiaTriDoiTuong();
  let diemThiSinh =
    diemMonThuNhat + diemMonThuHai + diemMonThuBa + diemDoiTuong + diemKhuVuc;
  ketQua.classList.add("d-block");
  if (diemMonThuNhat === 0 || diemMonThuHai === 0 || diemMonThuBa === 0) {
    ketQua.classList.remove("bg-success");
    ketQua.classList.add("bg-danger");
    ketQua.innerHTML = `Bạn đã rớt. Do có một môn 0 điểm`;
  } else if (diemThiSinh < diemChuan) {
    ketQua.classList.remove("bg-success");
    ketQua.classList.add("bg-danger");
    ketQua.innerHTML = `Bạn đã rớt do không đủ điểm chuẩn. Tổng điểm: ${diemThiSinh}`;
  } else {
    ketQua.classList.remove("bg-danger");
    ketQua.classList.add("bg-success");
    ketQua.innerHTML = `Chúc mừng bạn đã đậu. Tổng điểm: ${diemThiSinh}`;
  }
}

// TÍNH TIỀN ĐIỆN

function xuLyTinhTienDien() {
  const gia50KwDau = 500;
  const giaTu51KwDen100Kw = 650;
  const giaTu101KwDen200Kw = 850;
  const giaTu201KwDen350Kw = 1100;
  const giaTren350Kw = 1300;
  const hoTenNguoiDongTienDien = document.getElementById(
    "hoTenNguoiDongTienDien"
  ).value;
  const soKW = document.getElementById("soKw").value * 1;
  const ketQuaTienDien = document.getElementById("ketQuaTienDien");
  let tienDien;
  if (soKW <= 50) {
    tienDien = soKW * gia50KwDau;
  } else if (soKW > 50 && soKW <= 100) {
    tienDien = 50 * gia50KwDau + (soKW - 50) * giaTu51KwDen100Kw;
  } else if (soKW > 100 && soKW <= 200) {
    tienDien =
      50 * gia50KwDau +
      50 * giaTu51KwDen100Kw +
      (soKW - 100) * giaTu101KwDen200Kw;
  } else if (soKW > 200 && soKW <= 350) {
    tienDien =
      50 * gia50KwDau +
      50 * giaTu51KwDen100Kw +
      100 * giaTu101KwDen200Kw +
      (soKW - 200) * giaTu201KwDen350Kw;
  } else {
    tienDien =
      50 * gia50KwDau +
      50 * giaTu51KwDen100Kw +
      100 * giaTu101KwDen200Kw +
      150 * giaTu201KwDen350Kw +
      (soKW - 350) * giaTren350Kw;
  }
  ketQuaTienDien.classList.remove("d-none");
  // ketQuaTienDien.classList.add("d-block");
  ketQuaTienDien.classList.add("bg-success");
  ketQuaTienDien.innerHTML = `Người dùng ${hoTenNguoiDongTienDien}; Tiền điện: ${tienDien.toLocaleString()} vnđ `;
}

// TÍNH TIỀN THUẾ CÁ NHÂN

function xuLyTinhTienThue() {
  const hoTenNguoiDongThue =
    document.getElementById("hoTenNguoiDongThue").value;
  const tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  const ketQuaTienThue = document.getElementById("ketQuaTienThue");

  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  let thueThuNhapCaNhan;
  if (thuNhapChiuThue < 0) {
    alert("Vui lòng nhập số hợp lệ");
  } else if (thuNhapChiuThue <= 60000000) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.3;
  } else {
    thueThuNhapCaNhan = thuNhapChiuThue * 0.35;
  }
  ketQuaTienThue.classList.remove("d-none");
  ketQuaTienThue.classList.add("bg-success");
  ketQuaTienThue.innerHTML = `Người dùng ${hoTenNguoiDongThue}; Tiền thuế thu nhập cá nhân: ${thueThuNhapCaNhan.toLocaleString()} vnđ`;
}

// TÍNH TIỀN CÁP

function thayDoiLoaiKhachHang() {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const hideDiv = document.getElementById("hideDiv");
  switch (loaiKhachHang) {
    case "doanhNghiep":
      hideDiv.classList.remove("d-none");
      break;
    case "nhaDan":
      hideDiv.classList.add("d-none");
      break;
  }
  return loaiKhachHang;
}

function tinhGiaTienCap(loaiKhachHang) {
  let phiXuLyHoaDon, phiDichVuCoBan, phiThueMotKenhCaoCap;
  if (loaiKhachHang === "nhaDan") {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueMotKenhCaoCap = 7.5;
  } else {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75;
    phiThueMotKenhCaoCap = 50;
  }
  return {
    phiXuLyHoaDon,
    phiDichVuCoBan,
    phiThueMotKenhCaoCap,
  };
}

function xuLyTinhTienCap() {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const maKhachHang = document.getElementById("maKhachHang").value * 1;
  const soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  const ketQuaTienCap = document.getElementById("ketQuaTienCap");
  const { phiXuLyHoaDon, phiDichVuCoBan, phiThueMotKenhCaoCap } =
    tinhGiaTienCap(loaiKhachHang);
  let tienCap;
  switch (loaiKhachHang) {
    case "nhaDan":
      tienCap =
        phiXuLyHoaDon + phiDichVuCoBan + phiThueMotKenhCaoCap * soKenhCaoCap;
      break;
    case "doanhNghiep":
      const soKetNoi = document.getElementById("soKetNoi").value * 1;
      if (soKetNoi <= 10) {
        tienCap =
          phiXuLyHoaDon + phiDichVuCoBan + phiThueMotKenhCaoCap * soKenhCaoCap;
        break;
      } else {
        tienCap =
          phiXuLyHoaDon +
          phiDichVuCoBan +
          phiThueMotKenhCaoCap * soKenhCaoCap +
          (soKetNoi - 10) * 5;
        break;
      }
    default:
      alert("Vui lòng nhập loại khách hàng");
      break;
  }
  ketQuaTienCap.classList.remove("d-none");
  ketQuaTienCap.innerHTML = `Mã khách hàng: ${maKhachHang}; Tiền cáp: $ ${tienCap}`;
}
