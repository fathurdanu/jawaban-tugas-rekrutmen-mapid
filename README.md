# Jawaban Tugas Rekrutmen React Front End Developer MAPID

![Logo](https://mapid.co.id/img/mapid_logo_warna-min.png)

Tugas ini adalah sebagai syarat seleksi pertama untuk proses rekrutmen React Front End Developer MAPID. Akan diberikan repositori yang dibuat dengan Stateless components. Repositori tersebut berisi map yang terdapat titik-titik lokasi tempat dari API Mapid. Terdapat fitur menu untuk mensorting satu-persatu warna, dan darkmode.

## Ketentuan

- Buatlah react baru, pindahkan code yang diberikan berisi Stateless Components (Function Components) menjadi Statefull Components (Class Components) pada ReactJS. Beserta fitur-fiturnya.
- Terdapat Error pada Popup di Stateless Components, Selesaikkan Error itu di Statefull Components. Contoh seperti gambar disamping.
- Nilai tambahan :
  - Menambahkan fitur diluar task.
  - Modifies styling (dibolehkan memakai library lain).
  - Clear code.

<br/>
<br/>

# Instalasi

Clone projek ini

```bash
  git clone https://github.com/fathurdanu/jawaban-tugas-rekrutmen-mapid.git
```

Masuk ke directory projek

```bash
  cd jawaban-tugas-rekrutmen-mapid
```

Instal package

```bash
  npm install
```

jalankan react

```bash
  npm run dev
```
<br/>
<br/>

# Package

## 1. Package Wajib

- [Mapbox](https://www.mapbox.com/)
- [react-map-gl](https://urbica.github.io/react-map-gl/#/Introduction)
- [react-redux](https://react-redux.js.org/)
- [redux-toolkit](https://redux.js.org/)

## 2. Package yang digunakan

    "@reduxjs/toolkit": "^1.9.0",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.1.3",
    "mapbox-gl": "^2.11.0",
    "node-sass": "^7.0.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.6.0",
    "react-map-gl": "^7.0.19",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "redux": "^4.2.0",
    "web-vitals": "^2.1.4"

<br/>
<br/>

# Struktur folder

## 👉 components

- Button ➡️ Components Button (button untuk memfilter warna layer/titik)
- Card ➡️ Components Card (sub-bagian dari Popup, terdiri atas title dan description)
- Display ➡️ Components Display (Menampilkan titik dari layer)
- FilterColor ➡️ Components FilterColor (Memfilter data berdasarkan warna layer/titik)
- Layer ➡️ Components Titik 
- Menu ➡️ Components Menu (tempat menampung filter button)
- Popup ➡️ Components Popup (keterangan dari component titik)
- SideBar ➡️ Components SideBar (menampilkan daftar nama titik)

## 👉 configs

- DataApi ➡️ Kumpulan Data API
- Store ➡️ Kumpulan Data Reducer
- TokenStorage ➡️ Data Token (token diutamakan membuat sendiri)

## 👉 scss ➡️ folder menyimpan styling

<br/>
<br/>

# Fitur

## 1. Fitur wajib
- Menampilkan titik warna pada map
- Menampilkan popup ketika titik ditekan
- Menyediakan menu untuk memfilter titik berdasarkan warna
- Fitur dark mode & light mode

## 2. Fitur tambahan
- Menampilkan daftar nama & warna dari setiap titik di sidebar