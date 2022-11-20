import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetApi = createAsyncThunk("layer/getLayer", async () => {
  // const response = await axios.get(
  //   "https://geoserver.mapid.io/layers_new/get_layer?api_key=689c2279e0834a3ba82743432605e746&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc"
  // );
  // return response.data.geojson.features;
  return ([
    {
      "geometry": {
        "coordinates": [
          107.58467149401622,
          -6.91774733368014
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "f6fa26dc-013e-45aa-a54b-6767eb4b0ae1",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Satu",
        "Status": "Hijau",
        "Angka": "50"
      },
      "_id": "628f1db684b953e79a7cd8aa"
    },
    {
      "geometry": {
        "coordinates": [
          107.57968502223065,
          -6.939857577882748
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "b95a0567-4ac0-4675-9980-fc530edcf9b6",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Dua",
        "Status": "Hijau",
        "Angka": "10"
      },
      "_id": "628f1dba84b953e79a7cd8ad"
    },
    {
      "geometry": {
        "coordinates": [
          107.62356597393847,
          -6.971536116952208
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "e17e2dd7-8970-4908-a00d-3bf91118b11f",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Tiga",
        "Status": "Kuning",
        "Angka": "10"
      },
      "_id": "628f1dbe84b953e79a7cd8b0"
    },
    {
      "geometry": {
        "coordinates": [
          107.64783346995802,
          -6.956357083627736
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "8404900f-1a5d-4c07-9620-5e78149ee74e",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Empat",
        "Status": "Merah",
        "Angka": "20"
      },
      "_id": "628f1dc184b953e79a7cd8b3"
    },
    {
      "geometry": {
        "coordinates": [
          107.64085240945826,
          -6.972196063776408
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "9ec232af-7442-4482-ba1b-7a8dded3aced",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Lima",
        "Status": "Merah",
        "Angka": "30"
      },
      "_id": "628f1dc484b953e79a7cd8b6"
    },
    {
      "geometry": {
        "coordinates": [
          107.64883076431522,
          -6.969226295748882
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "2066f785-f965-49f6-bdbc-736204f8f7a0",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Enam",
        "Status": "Hijau",
        "Angka": "50"
      },
      "_id": "628f1dc784b953e79a7cd8b9"
    },
    {
      "geometry": {
        "coordinates": [
          107.72894674432428,
          -6.948437393133986
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "4b44effe-83c6-48eb-b3c3-2b50e1a7302f",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Tujuh",
        "Status": "Merah",
        "Angka": "30"
      },
      "_id": "628f1dca84b953e79a7cd8bc"
    },
    {
      "geometry": {
        "coordinates": [
          107.72994746173964,
          -6.941163967761611
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "4039a4db-3ae6-45c7-ac9a-f89edbef3154",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Delapan",
        "Status": "Kuning",
        "Angka": "60"
      },
      "_id": "628f1dce84b953e79a7cd8bf"
    },
    {
      "geometry": {
        "coordinates": [
          107.74058526821375,
          -6.947433830737722
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "6d1023f5-43df-433d-97d1-608bcb34d08f",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Sembilan",
        "Status": "Kuning",
        "Angka": "10"
      },
      "_id": "628f1dd484b953e79a7cd8c2"
    },
    {
      "geometry": {
        "coordinates": [
          107.59298570338188,
          -6.927963983288649
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "d59b83ee-3390-42d0-b3d4-bd4cbaae1598",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Sepuluh",
        "Status": "Hijau",
        "Angka": "20"
      },
      "_id": "628f1dd784b953e79a7cd8c5"
    },
    {
      "geometry": {
        "coordinates": [
          107.58135060255057,
          -6.929614001570542
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "068498b8-efc5-4be3-85fd-d434677bdeb3",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Sebelas",
        "Status": "Hijau",
        "Angka": "50"
      },
      "_id": "628f1ddb84b953e79a7cd8c8"
    },
    {
      "geometry": {
        "coordinates": [
          107.63753151799443,
          -6.965252984591231
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "761d3b00-5e43-4ed3-ae7b-66fa3ac5b9c7",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Dua belas",
        "Status": "Merah",
        "Angka": "70"
      },
      "_id": "628f1dde84b953e79a7cd8cb"
    },
    {
      "geometry": {
        "coordinates": [
          107.73460150207285,
          -6.9546935676271175
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "3f546d62-76c9-421c-88ce-933be7ae74f4",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Tiga belas",
        "Status": "Hijau",
        "Angka": "70"
      },
      "_id": "628f1de284b953e79a7cd8ce"
    },
    {
      "geometry": {
        "coordinates": [
          107.73759338514435,
          -6.938524000466373
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "2d8b2153-ebd0-4212-9cdf-505f8e2609e4",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Empat belas",
        "Status": "Merah",
        "Angka": "70"
      },
      "_id": "628f1de884b953e79a7cd8d1"
    },
    {
      "geometry": {
        "coordinates": [
          107.58866409450303,
          -6.938524000466373
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "02037bce-36c0-4eca-91fd-d1697857011a",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Lima belas",
        "Status": "Kuning",
        "Angka": "30"
      },
      "_id": "628f1deb84b953e79a7cd8d4"
    },
    {
      "geometry": {
        "coordinates": [
          107.5730398162433,
          -6.921363852441914
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "4b4321ed-76aa-49ce-b487-0f81192af1f6",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Enam belas",
        "Status": "Merah",
        "Angka": "10"
      },
      "_id": "628f1def84b953e79a7cd8d7"
    },
    {
      "geometry": {
        "coordinates": [
          107.63121532039946,
          -6.957993410950209
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "12cbb776-b7e5-4441-a2a8-52a536e7f6d5",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Tujuh belas",
        "Status": "Merah",
        "Angka": "30"
      },
      "_id": "628f1df384b953e79a7cd8da"
    },
    {
      "geometry": {
        "coordinates": [
          107.73393663916823,
          -6.945783874903611
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "b56b201a-088c-437c-b04c-8b94c8f6adc8",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Delapan belas",
        "Status": "Hijau",
        "Angka": "40"
      },
      "_id": "628f1df684b953e79a7cd8dd"
    },
    {
      "geometry": {
        "coordinates": [
          107.57370467914802,
          -6.933904022075907
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "88ce9e0f-a9f6-4c0b-9ce6-3d024b636913",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Sembilan belas",
        "Status": "Hijau",
        "Angka": "50"
      },
      "_id": "628f1dfa84b953e79a7cd8e0"
    },
    {
      "geometry": {
        "coordinates": [
          107.59398299774091,
          -6.922023869681851
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "33a92cdf-863a-4c58-a495-950804e18eee",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Dua puluh",
        "Status": "Kuning",
        "Angka": "60"
      },
      "_id": "628f1dfe84b953e79a7cd8e3"
    },
    {
      "geometry": {
        "coordinates": [
          107.6385288123517,
          -6.957993410950209
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "1d55d0fc-1553-43d1-84f8-436def893e8b",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Dua puluh satu",
        "Status": "Kuning",
        "Angka": "10"
      },
      "_id": "628f1e0184b953e79a7cd8e6"
    },
    {
      "geometry": {
        "coordinates": [
          107.74025283676156,
          -6.955023553006129
        ],
        "type": "Point"
      },
      "formStatus": {
        "status": "pending",
        "message": "",
        "revision_list": []
      },
      "date_in": "2022-11-17T10:18:14.069Z",
      "user": "5cb88367ce451995f7ed86f2",
      "key": "6390bfbf-8507-4fd2-8b86-81473bf3315d",
      "type": "Feature",
      "properties": {
        "icon_image": "museum",
        "text_field": "icon_image",
        "fill_color": "#1E5E96",
        "circle_radius": 5,
        "circle_stroke_width": 1,
        "circle_stroke_color": "#fff",
        "Nama": "Dua puluh dua",
        "Status": "Kuning",
        "Angka": "40"
      },
      "_id": "628f1e0584b953e79a7cd8e9"
    }
  ])
});

const apiDataSlice = createSlice({
  name: "apiData",
  initialState: {
    Datas: [],
    loading: false,
  },
  extraReducers: {
    [GetApi.fulfilled]: (state, action) => {
      state.loading = false;
      state.Datas = action.payload;
    },
  },
});

export default apiDataSlice.reducer;