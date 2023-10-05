function HienThiNgay() {
    var _date = new Date;
    var ngay = _date.getDay()+1;
    var thang = _date.getMonth()+1;
    var nam = _date.getFullYear();
    alert("Hôm nay là ngày " + ngay + " tháng " + thang + " năm " + nam);
}