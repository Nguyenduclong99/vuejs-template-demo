
function TaoSanPham(Anh, Ten, GiaGoc, PhanTramKM, ID) {
  var SanPham = Object();
  SanPham.Anh = Anh;
  SanPham.Ten = Ten;
  SanPham.GiaGoc = GiaGoc;
  SanPham.PhanTramKM = PhanTramKM;
  if (ID != null) {
    SanPham.ID = ID;
  } else {
    var ID = taoID();
  }
  SanPham.tinhGiaBan = function() {
    var GiaBan = (this.GiaGoc * (100 - this.PhanTramKM)) / 100;
    return GiaBan;
  };
  SanPham.toJson = function() {
    var json = JSON.stringify(this);
    return json;
  };
  SanPham.fromJson = function(json) {
    var doituongDayDu = new Object();

    var doituong = JSON.parse(json);

    var doituongDayDu = TaoSanPham(
      doituong.Anh,
      doituong.Ten,
      doituong.GiaGoc,
      doituong.PhanTramKM
    );
    return doituongDayDu;
  };
}
