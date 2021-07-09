function panjangSisiAC(ab, bc) {
    nilai1 = Math.pow(ab, 2);
    nilai2 = Math.pow(bc, 2);
    total = Math.sqrt(nilai1 + nilai2);
    console.log(`Nilai AB: ${ab}`);
    console.log(`Nilai BC: ${bc}`);
    return `Panjang sisi AC segitiga siku-siku tersebut adalah: ${total} cm`;
}

let ab = 8;
let bc = 6;

console.log(panjangSisiAC(ab, bc));