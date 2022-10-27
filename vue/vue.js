const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [
        {
          image:
            "https://pix8.agoda.net/hotelImages/22423667/-1/c8b11fd11884172c23959f0ccb4ebfc0.jpg?ca=19&ce=1",
          name: "Căn hộ Nikko - Cuộc sống quý phái (Nikko Apartments - The Classy Life)",
          address: "Quận 7,Hồ Chí Minh",
          price: "577,116",
        },
        {
          image:
            "https://pix8.agoda.net/hotelImages/25462197/506168035/01eb644e25e1629347061522f356c631.jpg?ca=29&ce=0",
          name: "Somerset Feliz TP Hồ Chí Minh (Somerset Feliz Ho Chi Minh City)",
          address: "Quận 2,Hồ Chí Minh",
          price: "2,106,000",
        },
        {
          image:
            "https://pix8.agoda.net/hotelImages/568/5684454/5684454_18081316440067440969.jpg?ca=0&ce=1",
          name: "Căn hộ dịch vụ NTA (NTA Serviced Apartments)",
          address: "Quận 1,Hồ Chí Minh",
          price: "1,158,767",
        },
        {
          image:
            "https://pix8.agoda.net/hotelImages/31053655/0/fc9f322e6a3564451509eb3fc4b5e16f.jpg?ca=28&ce=0",
          name: "Cityhouse - Ariosa",
          address: "Quận 3,Hồ Chí Minh",
          price: "740,741",
        },
        {
          image:
            "https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0",
          name: "Căn hộ LuxHomes Saigon – Vinhomes Central Park (LuxHomes Saigon - Vinhomes Central Park)",
          address: "Bình Thạnh,Hồ Chí Minh",
          price: "1,241,667",
        },
        {
          image:
            "https://pix8.agoda.net/hotelImages/32914198/0/acadfb35b2348704235ef186f7c9f57c.jpg?ce=0",
          name: "Cozrum Homes - June Corner",
          address: "Quận 1,Hồ Chí Minh",
          price: "527,239",
        },
        {
          image:
            "https://pix8.agoda.net/hotelImages/941/9411958/9411958_19082615140080010014.jpg?ca=9&ce=1",
          name: "Cozrum Homes Premier Residences",
          address: "Bình Thạnh,Hồ Chí Minh ",
          price: "29,923",
        },
        {
          image:
            "https://pix8.agoda.net/hotelImages/1517561/-1/c8d7f0bb4cf45c2493dfaf257b0b1750.jpg?ca=16&ce=1",
          name: "Lavis 18 Residence",
          address: "Quận 3,Hồ Chí Minh",
          price: "1,088,930",
        },
      ],
    };
  },
}).mount("#body");
