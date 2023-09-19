function tinhSoNgay() {
    const monthNumber = parseInt(document.getElementById("monthNumber").value);
    let daysInMonth;

    switch (monthNumber) {
      case 1: // Tháng 1
      case 3: // Tháng 3
      case 5: // Tháng 5
      case 7: // Tháng 7
      case 8: // Tháng 8
      case 10: // Tháng 10
      case 12: // Tháng 12
        daysInMonth = 31;
        break;
      case 4: // Tháng 4
      case 6: // Tháng 6
      case 9: // Tháng 9
      case 11: // Tháng 11
        daysInMonth = 30;
        break;
      case 2: // Tháng 2
        daysInMonth = 28; // Mặc định 28 ngày, không xét năm nhuận
        break;
      default:
        daysInMonth = "Không hợp lệ";
        break;
    }

    document.getElementById("result").textContent = `Số ngày của tháng ${monthNumber} là: ${daysInMonth}`;
  }