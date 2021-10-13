import React, { useState } from 'react';
import PropTypes from "prop-types";

// const foodILike = [
//   {
//     id: 1,
//     name: "Kimchi",
//     image:
//       "https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_1054824%2F10548247185.20161027172705.jpg&type=sc960_832",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MTZfMzIg%2FMDAxNjMxNzYxMjM4NTE1.i8Jbsg7RvVou9RaWmsLFRfTP7iJnDYk5v3lbo9JgM5wg.GcUfDo40t1-bg8sFrjRYbOsTwpomXXgxjTQDcxHxEm4g.JPEG.kyeumi%2FIMG_6018.jpg&type=sc960_832",
//     rating: 4.9
//   },
//   {
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjVfMTc3%2FMDAxNjMyNTI2OTg5NzMx.B4k7n0aWQteR6D9zdheg4XL4usZ_U_pFDqmVzC0HAH8g.SpNjcFokWz0EuNVO8Urever2InaJvWMBIm9uuZDAY_Qg.JPEG.jjalyu7179%2FIMG_7519.jpg&type=sc960_832",
//     rating: 4.8
//   },
//   {
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MjBfMzcg%2FMDAxNjMyMTM0NTA5MDI2.YVKUANUknZUMeBhR93Lbl1iqg3V3WORCK4fG-fq4Z1cg.9rYJjqYW8IG-1H9MndXYjOv7l2Mn_qT53fyZzYDedfcg.JPEG.lol4983%2FIMG_5105.jpg&type=sc960_832",
//     rating: 5.5
//   },
//   {
//     id: 5,
//     name: "Kimbap",
//     image:
//       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MTlfNzMg%2FMDAxNjMyMDU2MTI3Mzc0.8O3Vp_Dj5PCNcZuMZACHWG6qsCzlnxGNR9_WN4BTTvcg.z9dpxaXuVTkqhHiml1WcczORCKO_JcgOqt2q4QbN6xsg.JPEG.manhong0426%2FIMG_1932.jpg&type=sc960_832",
//     rating: 4.7
//   }
// ];

// function Food({ name, picture, rating }) {
//   return <div>
//     <h2> I Like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name} />
//   </div>;
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       {foodILike.map(dish => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />))};
//     </div>
//   );
// }

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
    console.log("add");
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
    console.log("minus");
  };

  render(){
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

//Add branch

export default App;