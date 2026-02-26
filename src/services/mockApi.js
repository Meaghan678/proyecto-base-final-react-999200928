const users =[
  {
    id: 1,
    name: "Emily Stone",
    avatar_url: "https://devsapihub.com/img-users/1.jpg",
    last_seen: "18:30",
    messages: [
      { author: "Emily Stone", text: "Hey, ¿qué haces?", time: "18:00" },
      { author: "me", text: "Nada, descansando un poco 😊", time: "18:05" },
      { author: "Emily Stone", text: "¿Salimos más tarde?", time: "18:15" }
    ]
  },
  {
    id: 2,
    name: "Carlos Méndez",
    avatar_url: "https://devsapihub.com/img-users/2.jpg",
    last_seen: "18:30",
    messages: [
      { author: "Carlos Méndez", text: "Hola, ¿cómo estás?", time: "17:50" },
      { author: "me", text: "Todo bien! ¿Y tú?", time: "17:55" },
      { author: "Carlos Méndez", text: "Trabajando todavía 😅", time: "18:10" }
    ]
  },
  {
    id: 3,
    name: "Amina Yusuf",
    avatar_url: "https://devsapihub.com/img-users/3.jpg",
    last_seen: "15:20",
    messages: [
      { author: "Amina Yusuf", text: "¿Vamos al cine?", time: "14:00" },
      { author: "me", text: "¡Claro! ¿Qué vemos?", time: "14:05" },
      { author: "Amina Yusuf", text: "La nueva de acción 🎬", time: "14:10" }
    ]
  },
  {
    id: 4,
    name: "Leo Nakamura",
    avatar_url: "https://devsapihub.com/img-users/4.jpg",
    last_seen: "14:00",
    messages: [
      { author: "Leo Nakamura", text: "Saludos, ¿cómo va todo?", time: "13:30" },
      { author: "me", text: "Todo tranquilo 👍", time: "13:35" },
      { author: "Leo Nakamura", text: "Me alegra escuchar eso.", time: "13:50" }
    ]
  },
  {
    id: 5,
    name: "Sophie Dubois",
    avatar_url: "https://devsapihub.com/img-users/5.jpg",
    last_seen: "12:00",
    messages: [
      { author: "Sophie Dubois", text: "¿Vamos para la playa?", time: "11:00" },
      { author: "me", text: "Ojalá! Hace mucho calor ☀️", time: "11:10" },
      { author: "Sophie Dubois", text: "Entonces vamos este finde!", time: "11:25" }
    ]
  },
  {
    id: 6,
    name: "Andrés Gómez",
    avatar_url: "https://devsapihub.com/img-users/6.jpg",
    last_seen: "10:30",
    messages: [
      { author: "Andrés Gómez", text: "¿Te gustaría salir a cenar?", time: "10:00" },
      { author: "me", text: "Sí, ¿a dónde?", time: "10:05" },
      { author: "Andrés Gómez", text: "Conozco un lugar buenísimo.", time: "10:15" }
    ]
  },
  {
    id: 7,
    name: "Mei Lin",
    avatar_url: "https://devsapihub.com/img-users/7.jpg",
    last_seen: "09:00",
    messages: [
      { author: "Mei Lin", text: "¿Qué te gustaría comer hoy?", time: "08:20" },
      { author: "me", text: "Algo asiático estaría genial 😋", time: "08:30" },
      { author: "Mei Lin", text: "Perfecto!", time: "08:40" }
    ]
  },
  {
    id: 8,
    name: "Tomás Silva",
    avatar_url: "https://devsapihub.com/img-users/8.jpg",
    last_seen: "08:00",
    messages: [
      { author: "Tomás Silva", text: "¿Quieres ir a un concierto?", time: "07:20" },
      { author: "me", text: "Depende de la banda 👀", time: "07:25" },
      { author: "Tomás Silva", text: "Rock nacional 🤘", time: "07:40" }
    ]
  },
  {
    id: 9,
    name: "Lara Smith",
    avatar_url: "https://devsapihub.com/img-users/9.jpg",
    last_seen: "07:00",
    messages: [
      { author: "Lara Smith", text: "¿Te gustaría ir a un museo?", time: "06:30" },
      { author: "me", text: "Sí, me encanta el arte.", time: "06:35" },
      { author: "Lara Smith", text: "Vamos el sábado.", time: "06:50" }
    ]
  },
  {
    id: 10,
    name: "Nathan Okoye",
    avatar_url: "https://devsapihub.com/img-users/10.jpg",
    last_seen: "06:00",
    messages: [
      { author: "Nathan Okoye", text: "Quiero comer algo rico.", time: "05:20" },
      { author: "me", text: "Pizza siempre funciona 🍕", time: "05:25" },
      { author: "Nathan Okoye", text: "Me convenciste!", time: "05:40" }
    ]
  },
  {
    id: 11,
    name: "Isabella Rossi",
    avatar_url: "https://devsapihub.com/img-users/11.jpg",
    last_seen: "05:00",
    messages: [
      { author: "Isabella Rossi", text: "¿Vamos a un café?", time: "04:20" },
      { author: "me", text: "Sí, necesito uno ☕", time: "04:25" },
      { author: "Isabella Rossi", text: "Te espero entonces.", time: "04:40" }
    ]
  },
  {
    id: 12,
    name: "Mark Johnson",
    avatar_url: "https://devsapihub.com/img-users/12.jpg",
    last_seen: "04:00",
    messages: [
      { author: "Mark Johnson", text: "Tengo una idea para una película.", time: "03:10" },
      { author: "me", text: "A ver 👀", time: "03:15" },
      { author: "Mark Johnson", text: "Es de ciencia ficción.", time: "03:25" }
    ]
  },
  {
    id: 13,
    name: "Fatima Al-Khaled",
    avatar_url: "https://devsapihub.com/img-users/13.jpg",
    last_seen: "03:00",
    messages: [
      { author: "Fatima Al-Khaled", text: "¿Cómo sigue tu mamá?", time: "02:20" },
      { author: "me", text: "Mucho mejor, gracias 💛", time: "02:25" },
      { author: "Fatima Al-Khaled", text: "Me alegro mucho.", time: "02:40" }
    ]
  },
  {
    id: 14,
    name: "Lucas Ferreira",
    avatar_url: "https://devsapihub.com/img-users/14.jpg",
    last_seen: "02:00",
    messages: [
      { author: "Lucas Ferreira", text: "Me gustaría salir a bailar.", time: "01:10" },
      { author: "me", text: "Hace mucho no salgo 💃", time: "01:15" },
      { author: "Lucas Ferreira", text: "Entonces es momento!", time: "01:30" }
    ]
  },
  {
    id: 15,
    name: "Chloe Martin",
    avatar_url: "https://devsapihub.com/img-users/15.jpg",
    last_seen: "01:00",
    messages: [
      { author: "Chloe Martin", text: "¿Concierto este viernes?", time: "00:10" },
      { author: "me", text: "Suena bien!", time: "00:15" },
      { author: "Chloe Martin", text: "Genial 🎶", time: "00:30" }
    ]
  },
  {
    id: 16,
    name: "Mohammed El-Sayed",
    avatar_url: "https://devsapihub.com/img-users/16.jpg",
    last_seen: "00:00",
    messages: [
      { author: "Mohammed El-Sayed", text: "¿Vas a clases hoy?", time: "23:10" },
      { author: "me", text: "Sí, tengo matemáticas.", time: "23:15" },
      { author: "Mohammed El-Sayed", text: "Suerte!", time: "23:20" }
    ]
  },
  {
    id: 17,
    name: "Anna Müller",
    avatar_url: "https://devsapihub.com/img-users/17.jpg",
    last_seen: "23:00",
    messages: [
      { author: "Anna Müller", text: "¿Cómo se llama el profe?", time: "22:10" },
      { author: "me", text: "El profesor García.", time: "22:15" },
      { author: "Anna Müller", text: "Gracias!", time: "22:20" }
    ]
  },
  {
    id: 18,
    name: "Jacob Kim",
    avatar_url: "https://devsapihub.com/img-users/18.jpg",
    last_seen: "22:00",
    messages: [
      { author: "Jacob Kim", text: "Me compraré un carro nuevo.", time: "21:10" },
      { author: "me", text: "Qué bueno! ¿Cuál?", time: "21:15" },
      { author: "Jacob Kim", text: "Uno eléctrico ⚡", time: "21:30" }
    ]
  },
  {
    id: 19,
    name: "Camila Torres",
    avatar_url: "https://devsapihub.com/img-users/19.jpg",
    last_seen: "21:00",
    messages: [
      { author: "Camila Torres", text: "Quiero un teléfono nuevo.", time: "20:10" },
      { author: "me", text: "¿Cuál estás mirando?", time: "20:15" },
      { author: "Camila Torres", text: "El último modelo 📱", time: "20:25" }
    ]
  },
  {
    id: 20,
    name: "David Brown",
    avatar_url: "https://devsapihub.com/img-users/20.jpg",
    last_seen: "20:00",
    messages: [
      { author: "David Brown", text: "Tengo mucha hambre.", time: "19:10" },
      { author: "me", text: "¿Pedimos algo?", time: "19:15" },
      { author: "David Brown", text: "Sí, hamburguesas!", time: "19:25" }
    ]
  }
]