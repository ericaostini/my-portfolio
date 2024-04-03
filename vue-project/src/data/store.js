import { reactive } from 'vue';

export const store = reactive({
   skills: [
      {
         id: 1,
         name: 'HTML',
         img: 'html-5.png',
         front_end: true
      },
      {
         id: 2,
         name: 'CSS',
         img: 'css-3.png',
         front_end: true
      },
      {
         id: 3,
         name: 'JavaScript',
         img: 'js.png',
         front_end: true
      },
      {
         id: 5,
         name: 'Vue',
         img: 'vue.png',
         front_end: true
      },
      {
         id: 6,
         name: 'Bootstrap',
         img: 'bootstrap.png',
         front_end: true
      },
      {
         id: 4,
         name: 'PHP',
         img: 'php.png',
         back_end: true
      },
      {
         id: 7,
         name: 'mySQL',
         img: 'mysql.png',
         back_end: true
      },
      {
         id: 8,
         name: 'Laravel',
         img: 'laravel.png',
         back_end: true
      },
      {
         id: 9,
         name: 'GitHub',
         img: 'github.png',
         support: true
      },
      {
         id: 10,
         name: 'phpMyAdmin',
         img: 'phpmyadmin.png',
         support: true
      },
      {
         id: 13,
         name: 'Office',
         img: 'pacchetto-office.png',
         support: true
      },
      {
         id: 11,
         name: 'React',
         img: 'react.png',
         inprogress: true,
      },
      {
         id: 12,
         name: 'Wordpress',
         img: 'wordpress.png',
         inprogress: true,
      },
   ],
})