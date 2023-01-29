//Inisialisasi Array element kosong dengan index 100
const randomNumArray = new Array(100);

//Deklarasi Array index ganjil dan index genap
const evenIndexArray = [];
const oddIndexArray = [];

//Isi tiap index array dengan nomor random dengan range 0-50
for (let i = 0; i < randomNumArray.length; i++) {
  randomNumArray[i] = GetRandomInteger(1, 50);
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

function PrintStatsArray(arrayName, arrayNameCompare) {
  console.log("Array elements = " + arrayName);
  console.log(
    "The smallest element in this array is " + GetMinArray(arrayName)
  );
  console.log("The largest element in this array is " + GetMaxArray(arrayName));
  console.log(
    "The total sum of all element in this array is " + GetTotArray(arrayName)
  );
  console.log(
    "The average value of all element in this array is " +
      GetAvgArray(arrayName)
  );
  console.log(CompareMinArray(arrayName, arrayNameCompare));
  console.log(CompareMaxArray(arrayName, arrayNameCompare));
  console.log(CompareAvgArray(arrayName, arrayNameCompare));
  console.log(
    "This Array has " +
      FindSameElementIndex(arrayName, arrayNameCompare) +
      " same element in the same index compared with the other Array"
  );
  // console.log(
  //   "This Array has " +
  //     FindSameElementInBoth(arrayName, arrayNameCompare) +
  //     " same element present in both Arrays"
  // );
  console.log("\n");
}

//Cetak hasil-hasil fungsi pada array
PrintStatsArray(evenIndexArray, oddIndexArray);
PrintStatsArray(oddIndexArray, evenIndexArray);

//Fungsi untuk mendapatkan bilangan bulat random
function GetRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Fungsi mencari nilai minimal dalam array
function GetMinArray(arrayName) {
  let minValue = Infinity;
  index = arrayName.length;
  while (index) {
    if (arrayName[index] < minValue) minValue = arrayName[index];
    index--;
  }
  return minValue;
}

//Fungsi mencari nilai maksimal
function GetMaxArray(arrayName) {
  let maxValue = -Infinity;
  index = arrayName.length;
  while (index) {
    if (arrayName[index] > maxValue) maxValue = arrayName[index];
    index--;
  }
  return maxValue;
}

//Fungsi mencari nilai total
function GetTotArray(arrayName) {
  let totalValue = 0;
  for (i = 0; i < arrayName.length; i++) {
    totalValue += arrayName[i];
  }
  return totalValue;
}

//Fungsi mencari nilai rata-rata
function GetAvgArray(arrayName) {
  let sumValue = arrayName.length;
  let totalValue = GetTotArray(arrayName);
  return totalValue / sumValue;
}

//Fungsi membandingkan nilai minimum dua Array
function CompareMinArray(arrayName1, arrayName2) {
  let minArray1Value = GetMinArray(arrayName1);
  let minArray2Value = GetMinArray(arrayName2);
  if (minArray1Value < minArray2Value)
    return "True, this Array have minimum value with the compared Array";
  else if (minArray1Value == minArray2Value)
    return "Both Array have the same minimum value";
  else
    return "False, this Array don't have minimum value with the compared Array";
}

//Fungsi membandingkan nilai maximum dua Array
function CompareMaxArray(arrayName1, arrayName2) {
  let maxArray1Value = GetMaxArray(arrayName1);
  let maxArray2Value = GetMaxArray(arrayName2);
  if (maxArray1Value > maxArray2Value)
    return "True, this Array have maximum value with the compared Array";
  else if (maxArray1Value == maxArray2Value)
    return "Both Array have the same maximum value";
  else
    return "False, this Array don't have maximum value with the compared Array";
}

//Fungsi membandingkan nilai rata-rata dua Array
function CompareAvgArray(arrayName1, arrayName2) {
  let avgArray1Value = GetAvgArray(arrayName1);
  let avgArray2Value = GetAvgArray(arrayName2);
  if (avgArray1Value > avgArray2Value)
    return "True, this Array have higher average value with the compared Array";
  else if (avgArray1Value == avgArray2Value)
    return "Both Array have the same maximum value";
  else
    return "False, this Array don't have higher average value with the compared Array";
}

//Fungsi membandingkan dua nilai pada posisi yang sama pada tiap masing masing Array
function FindSameElementIndex(arrayName1, arrayName2) {
  let same = 0;
  for (let i = 0; i < arrayName1.length; i++) {
    if (arrayName1[i] == arrayName2[i]) same++;
  }
  return same;
}

//Fungsi membandingkan berapa nilai yang sama dalam kedua Array
// function FindSameElementInBoth(arrayName1, arrayName2) {
//   let same = 0;
//   for (let i = 0; i < arrayName1.length; i++) {
//     for (let j = i; j < arrayName2.length; j++) {
//       if (arrayName1[i] == arrayName2[j]) same++;
//     }
//   }
//   return same;
// }
