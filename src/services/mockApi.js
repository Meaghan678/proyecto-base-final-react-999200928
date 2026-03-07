const users = [
  {
    id: 1,
    name: "Emily Stone",
    email: "emilystone@gmail.com",
    password: "Emi#4821",
    avatar_url: "https://devsapihub.com/img-users/1.jpg",
    last_seen: "18:30",
    messages: [
      { author: "Emily Stone", text: "Hey, ¿qué haces?", time: "18:00" },
      { author: "me", text: "Nada, descansando 😊", time: "18:05" },
      { author: "Emily Stone", text: "¿Salimos más tarde?", time: "18:10" },
      { author: "me", text: "Dale, ¿a dónde?", time: "18:12" },
      { author: "Emily Stone", text: "Podemos ir al centro", time: "18:15" },
      { author: "me", text: "Perfecto, paso por vos", time: "18:20" }
    ]
  },
  {
    id: 2,
    name: "Carlos Mendez",
    email: "carlosmendez@gmail.com",
    password: "Car!7392",
    avatar_url: "https://devsapihub.com/img-users/2.jpg",
    last_seen: "17:45",
    messages: [
      { author: "Carlos Mendez", text: "¿Terminaste el proyecto?", time: "17:20" },
      { author: "me", text: "Sí, recién lo envío", time: "17:30" },
      { author: "Carlos Mendez", text: "Genial 👌", time: "17:32" },
      { author: "me", text: "Costó bastante", time: "17:35" },
      { author: "Carlos Mendez", text: "Valió la pena seguro", time: "17:40" },
      { author: "me", text: "Eso espero 😅", time: "17:44" }
    ]
  },
  {
    id: 3,
    name: "Amina Yusuf",
    email: "aminayusuf@gmail.com",
    password: "Ami$1593",
    avatar_url: "https://devsapihub.com/img-users/3.jpg",
    last_seen: "15:10",
    messages: [
      { author: "Amina Yusuf", text: "Vamos al gym mañana 💪", time: "14:00" },
      { author: "me", text: "Dale, a las 10?", time: "14:10" },
      { author: "Amina Yusuf", text: "Sí, perfecto", time: "14:15" },
      { author: "me", text: "Entrenamos fuerte?", time: "14:20" },
      { author: "Amina Yusuf", text: "Obvio 😎", time: "14:25" },
      { author: "me", text: "Listo entonces", time: "14:30" }
    ]
  },
  {
    id: 4,
    name: "Lucas Brown",
    email: "lucasbrown@gmail.com",
    password: "Luc@8642",
    avatar_url: "https://devsapihub.com/img-users/4.jpg",
    last_seen: "12:25",
    messages: [
      { author: "Lucas Brown", text: "Te paso el archivo ahora", time: "12:00" },
      { author: "me", text: "Perfecto, gracias!", time: "12:05" },
      { author: "Lucas Brown", text: "Revisalo cuando puedas", time: "12:10" },
      { author: "me", text: "Ya lo abro", time: "12:12" },
      { author: "Lucas Brown", text: "Avisame cualquier cosa", time: "12:15" },
      { author: "me", text: "Dale 👍", time: "12:20" }
    ]
  },
  {
    id: 5,
    name: "Sofia Rossi",
    email: "sofiarossi@gmail.com",
    password: "Sof!2736",
    avatar_url: "https://devsapihub.com/img-users/5.jpg",
    last_seen: "11:40",
    messages: [
      { author: "Sofia Rossi", text: "¿Almorzamos juntas?", time: "11:00" },
      { author: "me", text: "Dale 😊", time: "11:10" },
      { author: "Sofia Rossi", text: "¿Dónde vamos?", time: "11:15" },
      { author: "me", text: "Al bar de siempre?", time: "11:18" },
      { author: "Sofia Rossi", text: "Me encanta", time: "11:25" },
      { author: "me", text: "Entonces a las 13", time: "11:30" }
    ]
  },

  {
    id: 6,
    name: "Daniel Kim",
    email: "danielkim@gmail.com",
    password: "Dan#9184",
    avatar_url: "https://devsapihub.com/img-users/6.jpg",
    last_seen: "10:55",
    messages: [
      { author: "Daniel Kim", text: "¿Viste la serie nueva?", time: "10:30" },
      { author: "me", text: "Todavía no 😅", time: "10:40" },
      { author: "Daniel Kim", text: "Está buenísima", time: "10:42" },
      { author: "me", text: "La empiezo hoy", time: "10:45" },
      { author: "Daniel Kim", text: "Después comentamos", time: "10:50" },
      { author: "me", text: "De una 😎", time: "10:54" }
    ]
  },

  {
    id: 7,
    name: "Valentina Perez",
    email: "valentinaperez@gmail.com",
    password: "Val$6621",
    avatar_url: "https://devsapihub.com/img-users/7.jpg",
    last_seen: "09:50",
    messages: [
      { author: "Valentina Perez", text: "Buen día ☀️", time: "09:00" },
      { author: "me", text: "Buen díaaa!", time: "09:05" },
      { author: "Valentina Perez", text: "¿Dormiste bien?", time: "09:10" },
      { author: "me", text: "Más o menos 😴", time: "09:15" },
      { author: "Valentina Perez", text: "Necesitas café", time: "09:20" },
      { author: "me", text: "Urgente ☕", time: "09:30" }
    ]
  },

  {
    id: 8,
    name: "Omar Ali",
    email: "omarali@gmail.com",
    password: "Oma!4477",
    avatar_url: "https://devsapihub.com/img-users/8.jpg",
    last_seen: "08:20",
    messages: [
      { author: "Omar Ali", text: "Te llamo más tarde", time: "08:00" },
      { author: "me", text: "Ok!", time: "08:05" },
      { author: "Omar Ali", text: "Estoy ocupado ahora", time: "08:10" },
      { author: "me", text: "Todo bien", time: "08:12" },
      { author: "Omar Ali", text: "Hablamos a la noche", time: "08:15" },
      { author: "me", text: "Perfecto", time: "08:18" }
    ]
  },

  {
    id: 11,
    name: "Isabella Rossi",
    email: "isabellarossi@gmail.com",
    password: "Isa#1993",
    avatar_url: "https://devsapihub.com/img-users/11.jpg",
    last_seen: "05:00",
    messages: [
      { author: "Isabella Rossi", text: "¿Quieres ir a un café?", time: "04:30" },
      { author: "me", text: "Sí, buena idea ☕", time: "04:40" },
      { author: "Isabella Rossi", text: "Voy por uno cerca de casa", time: "04:45" },
      { author: "me", text: "Perfecto, paso en 10", time: "04:50" },
      { author: "Isabella Rossi", text: "Genial!", time: "04:55" },
      { author: "me", text: "Nos vemos pronto", time: "05:00" }
    ]
  },
  {
    id: 12,
    name: "Mark Johnson",
    email: "markjohnson@gmail.com",
    password: "Mar@1980",
    avatar_url: "https://devsapihub.com/img-users/12.jpg",
    last_seen: "04:00",
    messages: [
      { author: "Mark Johnson", text: "¿Te gustaría ver una película?", time: "03:30" },
      { author: "me", text: "Claro, suena bien 🎬", time: "03:40" },
      { author: "Mark Johnson", text: "Tengo una buena idea", time: "03:45" },
      { author: "me", text: "Dime cuál 😎", time: "03:50" },
      { author: "Mark Johnson", text: "Es un thriller nuevo", time: "03:55" },
      { author: "me", text: "Perfecto, vamos!", time: "04:00" }
    ]
  },
  {
    id: 13,
    name: "Fatima Al-Khaled",
    email: "fatimaal.khaled@gmail.com",
    password: "Fat#1995",
    avatar_url: "https://devsapihub.com/img-users/13.jpg",
    last_seen: "03:00",
    messages: [
      { author: "Fatima Al-Khaled", text: "¿Cómo sigue tu mamá?", time: "02:30" },
      { author: "me", text: "Mejorando poco a poco 😊", time: "02:40" },
      { author: "Fatima Al-Khaled", text: "Qué bueno escuchar eso", time: "02:45" },
      { author: "me", text: "Gracias por preguntar", time: "02:50" },
      { author: "Fatima Al-Khaled", text: "Siempre pendiente", time: "02:55" },
      { author: "me", text: "Se agradece mucho 🙏", time: "03:00" }
    ]
  },
  {
    id: 14,
    name: "Lucas Ferreira",
    email: "lucasferreira@gmail.com",
    password: "Luc#1992",
    avatar_url: "https://devsapihub.com/img-users/14.jpg",
    last_seen: "02:00",
    messages: [
      { author: "Lucas Ferreira", text: "Me gustaría salir a bailar 💃", time: "01:30" },
      { author: "me", text: "Sí, hace tiempo que no salimos", time: "01:40" },
      { author: "Lucas Ferreira", text: "A qué club vamos?", time: "01:45" },
      { author: "me", text: "Al que siempre vamos", time: "01:50" },
      { author: "Lucas Ferreira", text: "Perfecto!", time: "01:55" },
      { author: "me", text: "Nos vemos a las 22:00", time: "02:00" }
    ]
  },
  {
    id: 15,
    name: "Chloe Martin",
    email: "chloemartin@gmail.com",
    password: "Chl#1997",
    avatar_url: "https://devsapihub.com/img-users/15.jpg",
    last_seen: "01:00",
    messages: [
      { author: "Chloe Martin", text: "¿Te gustaría ir a un concierto de música?", time: "00:30" },
      { author: "me", text: "Sí! 🎵", time: "00:40" },
      { author: "Chloe Martin", text: "Me encanta la banda", time: "00:45" },
      { author: "me", text: "A mí también 😎", time: "00:50" },
      { author: "Chloe Martin", text: "Entonces vamos juntos", time: "00:55" },
      { author: "me", text: "Hecho, cuenta conmigo", time: "01:00" }
    ]
  },
  {
    id: 16,
    name: "Mohammed El-Sayed",
    email: "mohammedelsayed@gmail.com",
    password: "Moh#1984",
    avatar_url: "https://devsapihub.com/img-users/16.jpg",
    last_seen: "00:00",
    messages: [
      { author: "Mohammed El-Sayed", text: "¿Vas para clases hoy?", time: "23:30" },
      { author: "me", text: "Sí, voy llegando", time: "23:40" },
      { author: "Mohammed El-Sayed", text: "Perfecto", time: "23:45" },
      { author: "me", text: "No me retraso 😅", time: "23:50" },
      { author: "Mohammed El-Sayed", text: "Buenísimo", time: "23:55" },
      { author: "me", text: "Nos vemos ahí", time: "00:00" }
    ]
  },
  {
    id: 17,
    name: "Anna Muller",
    email: "annamueller@gmail.com",
    password: "Ann#1991",
    avatar_url: "https://devsapihub.com/img-users/17.jpg",
    last_seen: "23:00",
    messages: [
      { author: "Anna Müller", text: "¿Cómo se llama el profe de matemáticas?", time: "22:30" },
      { author: "me", text: "Se llama Sr. Weber", time: "22:40" },
      { author: "Anna Müller", text: "Gracias!", time: "22:45" },
      { author: "me", text: "De nada 😊", time: "22:50" },
      { author: "Anna Müller", text: "¿Cuándo es el examen?", time: "22:55" },
      { author: "me", text: "El lunes a las 9:00", time: "23:00" }
    ]
  },
  {
    id: 18,
    name: "Jacob Kim",
    email: "jacobkim@gmail.com",
    password: "Jac#1990",
    avatar_url: "https://devsapihub.com/img-users/18.jpg",
    last_seen: "22:00",
    messages: [
      { author: "Jacob Kim", text: "Me compraré un carro nuevo 🚗", time: "21:30" },
      { author: "me", text: "Wow, qué emoción!", time: "21:40" },
      { author: "Jacob Kim", text: "Sí, estoy buscando uno bueno", time: "21:45" },
      { author: "me", text: "Qué marca te gusta?", time: "21:50" },
      { author: "Jacob Kim", text: "Toyota o BMW", time: "21:55" },
      { author: "me", text: "Perfecto, suerte con eso", time: "22:00" }
    ]
  },
  {
    id: 19,
    name: "Camila Torres",
    email: "camilatorres@gmail.com",
    password: "Cam#1998",
    avatar_url: "https://devsapihub.com/img-users/19.jpg",
    last_seen: "21:00",
    messages: [
      { author: "Camila Torres", text: "¿Quiero un teléfono nuevo?", time: "20:30" },
      { author: "me", text: "Yo también necesito uno nuevo 📱", time: "20:40" },
      { author: "Camila Torres", text: "Estaba viendo modelos", time: "20:45" },
      { author: "me", text: "Cuál te gustó?", time: "20:50" },
      { author: "Camila Torres", text: "El último iPhone", time: "20:55" },
      { author: "me", text: "Perfecto, me gusta también", time: "21:00" }
    ]
  },
  {
    id: 20,
    name: "David Brown",
    email: "davidbrown@gmail.com",
    password: "Dav#1983",
    avatar_url: "https://devsapihub.com/img-users/20.jpg",
    last_seen: "20:00",
    messages: [
      { author: "David Brown", text: "Tengo mucha hambre, ¿quieres comer algo?", time: "19:30" },
      { author: "me", text: "Sí! 😋", time: "19:40" },
      { author: "David Brown", text: "Pizza o hamburguesa?", time: "19:45" },
      { author: "me", text: "Pizza 🍕", time: "19:50" },
      { author: "David Brown", text: "Ok, pido ya", time: "19:55" },
      { author: "me", text: "Perfecto, gracias", time: "20:00" }
    ]
  }

]

export {users}