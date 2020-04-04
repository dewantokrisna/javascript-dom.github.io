// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Dewanto Krisna</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world!';

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'Salmon';

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

// DOM Manipulation
// buat elemen baru
// const pBaru = document.createElement('p');
// const teksPbaru = document.createTextNode('Paragraf Baru');
// // simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPbaru);
// // simpan pBaru di akhir Section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru!');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';

// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function () {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function () {
//     p3.style.color = 'red';
// }
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightgreen';
});
