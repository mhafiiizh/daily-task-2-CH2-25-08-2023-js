// 1. contoh array
const contohArray = [1, "imam", 28, 2, "Hafizh", 20, 3, "Diki", 21];
// console.log(arr)

// console.log(`ini index kedua dari array arr ${arr[1]}`)

for (let i = 0; i < contohArray.length; i++) {
  // console.log(`ini index ke ${i} dari contohArray yaitu : ${contohArray[i]}`)
}

// 2. contoh mainan object
const contohObj = {
  name: "imam",
  age: 28,
  id: 1,
};

// console.log(contohObj.id);

// 1 :
// print contohObj dengan key name, tp value nya ambil dari index 2 contohArr
// print contohObj dengan key age, tp value nya ambil dari index 3 contohArr
// print contohObj dengan key id, tp value nya ambil dari index 1 contohArr

contohObj.name = contohArray[1];
contohObj.age = contohArray[2];
contohObj.id = contohArray[0];

console.log(`Ini contohObj key name = ${contohObj.name}`);
console.log(`Ini contohObj key age = ${contohObj.age}`);
console.log(`Ini contohObj key id = ${contohObj.id}`);
console.log(`==========================================`);

// 2 :
// - kalian tambah data kalian di arr + 1 temen kalian juga
// - menggunakan looping, di dalam nya check condisi pake if utk print contohObj key id yang value nya dari index 0,3,6

for (let i = 0; i < contohArray.length; i++) {
  if (i == 0 || i == 3 || i == 6) {
    contohObj.id = contohArray[i];
    console.log(`Ini index ${[i]} berisikan ${contohObj.id}`);
  }
}

console.log(`==========================================`);

// 3
// masukkan data object dengan arr.push (Nirwana)
// tapi hanya masukkan data yang bernama imam, hafizh, syifa (pake IF dari hafizh no 2) ke dalam array kosong
// dari array kosong yang udah di masukkan data diatas, tapi cuman print yang age nya dibawah 28 dan id nya  (loping dan if2
let data = [];

const obj1 = { name: "Imam", age: 28, id: 1 };
const obj2 = { name: "Hafizh", age: 20, id: 2 };
const obj4 = { name: "Ale", age: 22, id: 3 };
const obj5 = { name: "Dimas", age: 23, id: 4 };
const obj6 = { name: "Adella", age: 25, id: 5 };
const obj7 = { name: "Syifa", age: 21, id: 6 };

const arrayOfObjects = [obj1, obj2, obj4, obj5, obj6, obj7];

for (let i = 0; i < arrayOfObjects.length; i++) {
  if (
    arrayOfObjects[i].name === "Imam" ||
    arrayOfObjects[i].name === "Hafizh" ||
    arrayOfObjects[i].name === "Syifa"
  ) {
    data.push(arrayOfObjects[i]);
  }
}

for (let i = 0; i < data.length; i++) {
  if (data[i].age < 28 && data[i].id == 2) {
    console.log("Nama:", data[i].name);
    console.log("Usia:", data[i].age);
    console.log("ID:", data[i].id);
  }
}
