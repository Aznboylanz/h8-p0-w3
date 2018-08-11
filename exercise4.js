

function dataHandling2(){
  var result = []
  var array = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
  array.splice(1,2, "Roman Alamsyah Elshamarawy","Provinsi Bandar Lampung",);
  array.splice(4,2,"Pria", "SMA International Metro");
  var bulan = array[3].split('/');
  var nama = '';
  switch(Number(bulan[1])){
    case 01: nama = "January";
    break;
    case 02: nama = "February";
    break;
    case 03: nama ="March";
    break;
    case 04: nama ="April";
    break;
    case 05: nama ="May";
    break;
    case 06: nama ="June";
    break;
    case 07: nama ="July";
    break;
    case 08: nama ="August";
    break;
    case 09: nama ="September";
    break;
    case 10: nama ="October";
    break;
    case 11: nama ="November";
    break;
    case 12: nama ="December";
    break;
    default: nama ="enter month";
  };
  bulan.sort();
  return bulan;

}


 console.log(dataHandling2())
