/*
 TUGAS NO. 1 BUATLAH KODE FUNCTION DISINI
*/

function shoutout() {
  console.log("Halo Function!");
}
shoutout();



/*
 TUGAS NO. 2 BUATLAH KODE FUNCTION DISINI
*/
function CalculateMultiply(num1, num2){
  return num1 * num2
}
var num1 = 5;
var num2 = 6;

var hasilperkalian = CalculateMultiply(num1,num2)
console.log(hasilperkalian);//Menampilkan Angka 30



/*
 TUGAS NO. 3 BUATLAH KODE FUNCTION DISINI
*/
function processentence (){
return 'Nama saya ' + name + ' umur saya ' + age + ' tahun ' + ' alamat saya ' + address +' dan saya punya hobi yaitu ' + hobby
}
var name = "Agus"
var age = "30"
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "gaming!"

var fullsentence = processentence(name,age,address,hobby);
console.log(fullsentence);//Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobi yaitu gaming!"



