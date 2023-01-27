//Inisialisasi Array kosong dengan index 100
const randomNumArray = new Array(100);

//Deklarasi Array index ganjil dan index genap
const evenIndexArray = [];
const oddIndexArray = [];

//Isi tiap index array dengan nomor random dengan range 0-50
for (let i = 0; i < randomNumArray.length; i++) {
  randomNumArray[i] = getRandomInteger(0, 50);
}

//Lakukan looping mengisi array evenIndexArray dan oddIndexArray
// dengan element dalam index dengan nilai ganjil ataupun genap
for (let i = 0, j = 0, k = 0; i < randomNumArray.length; i++) {
  console.log("Main Array index " + i + " value = " + randomNumArray[i]);
  //Kondisi apabila index merupakan bilangan genap
  if (i % 2 == 0) {
    evenIndexArray.push(randomNumArray[i]);
    console.log(
      "Even Array index " + j + " value = " + evenIndexArray[j] + "\n"
    );
    j++;
  }
  //Kondisi apabila index merupakan bilangan ganjil
  else if (i % 2 != 0) {
    oddIndexArray.push(randomNumArray[i]);
    console.log("Odd Array index " + k + " value = " + oddIndexArray[k] + "\n");
    k++;
  }
}

function printStatsArray(arrayName, arrayNameCompare) {
  console.log("Array elements = " + arrayName);
  console.log(
    "The smallest element in this array is " + getMinArray(arrayName)
  );
  console.log("The largest element in this array is " + getMaxArray(arrayName));
  console.log(
    "The total sum of all element in this array is " + getTotArray(arrayName)
  );
  console.log(
    "The average value of all element in this array is " +
      getAvgArray(arrayName)
  );
  console.log(compareMinArray(arrayName, arrayNameCompare));
  console.log(compareMaxArray(arrayName, arrayNameCompare));
  console.log(compareAvgArray(arrayName, arrayNameCompare));
  console.log(
    "This Array has " +
      sameElementIndex(arrayName, arrayNameCompare) +
      " same element in the same index compared with the other Array"
  );
  console.log("\n");
}

//Cetak hasil-hasil fungsi pada array
printStatsArray(evenIndexArray, oddIndexArray);
printStatsArray(oddIndexArray, evenIndexArray);

//Fungsi untuk mendapatkan bilangan bulat random
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Fungsi mencari nilai minimal dalam array
function getMinArray(arrayName) {
  let minValue = Infinity;
  index = arrayName.length;
  while (index) {
    if (arrayName[index] < minValue) minValue = arrayName[index];
    index--;
  }
  return minValue;
}

//Fungsi mencari nilai maksimal
function getMaxArray(arrayName) {
  let maxValue = -Infinity;
  index = arrayName.length;
  while (index) {
    if (arrayName[index] > maxValue) maxValue = arrayName[index];
    index--;
  }
  return maxValue;
}

//Fungsi mencari nilai total
function getTotArray(arrayName) {
  let totalValue = 0;
  for (i = 0; i < arrayName.length; i++) {
    totalValue += arrayName[i];
  }
  return totalValue;
}

//Fungsi mencari nilai rata-rata
function getAvgArray(arrayName) {
  let sumValue = arrayName.length;
  let totalValue = getTotArray(arrayName);
  return totalValue / sumValue;
}

//Fungsi membandingkan nilai minimum dua Array
function compareMinArray(arrayName1, arrayName2) {
  let minArray1Value = getMinArray(arrayName1);
  let minArray2Value = getMinArray(arrayName2);
  if (minArray1Value < minArray2Value)
    return "True, this Array have minimum value with the compared Array";
  else
    return "False, this Array don't have minimum value with the compared Array";
}

//Fungsi membandingkan nilai maximum dua Array
function compareMaxArray(arrayName1, arrayName2) {
  let minArray1Value = getMaxArray(arrayName1);
  let minArray2Value = getMaxArray(arrayName2);
  if (minArray1Value > minArray2Value)
    return "True, this Array have maximum value with the compared Array";
  else
    return "False, this Array don't have maximum value with the compared Array";
}

//Fungsi membandingkan nilai rata-rata dua Array
function compareAvgArray(arrayName1, arrayName2) {
  let minArray1Value = getAvgArray(arrayName1);
  let minArray2Value = getAvgArray(arrayName2);
  if (minArray1Value > minArray2Value)
    return "True, this Array have higher average value with the compared Array";
  else
    return "False, this Array don't have higher average value with the compared Array";
}

//Fungsi membandingkan dua nilai pada posisi yang sama pada tiap masing masing Array
function sameElementIndex(arrayName1, arrayName2) {
  let same = 0;
  for (let i = 0; i < arrayName1.length; i++) {
    if (arrayName1[i] == arrayName2[i]) same++;
  }
  return same;
}
