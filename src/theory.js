// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./App";

// // ReactDOM.render(<App />, document.getElementById('root'))

// // ======== Рендер App через строгий режим - StrictMode
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// // ============ React-элементы ======
// // ==== React.createElement(type, [props], [...children])
// // const link = React.createElement(
// //   'a',
// //   { href: 'react.org', target: '_blank' },
// //   'Ссилочка')

// // ============ Формат JSX ======
// // // Формат JSX (Babell преобразует в обычный формат)
// // const jsxlink = <a href='react.org' target='_blank'></a>

// // console.log(link);
// // console.log(jsxlink);

// // ReactDOM.render(link, document.getElementById('root'))


// // const user = {
// //   "name": "Jacques Gluke",
// //   "tag": "jgluke",
// //   "location": "Ocho Rios, Jamaica",
// //   "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
// //   "stats": {
// //     "followers": 5603,
// //     "views": 4827,
// //     "likes": 1308
// //   }
// // }

// // const template = (
// //   <div>
// //     <img src={user.avatar}
// //       alt={user.tag}
// //       width="480" />
// //     <h2>{user.name}</h2>
// //     <p>{user.location}</p>
// //     <p>followers: {user.stats.followers}</p>
// //     <p>views: {user.stats.views}</p>
// //     <p>likes: {user.stats.likes}</p>
// //     <button type="button">Довабить в друзья</button>
// //   </div>
// // )

// // console.log(template);


// // =========== Компоненти - App.js