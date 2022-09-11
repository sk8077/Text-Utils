// import React from 'react' //writing this not mandatory after 17th verson for functional compone, not or below approach with const

// // function App(){
// //   return (
// //     <div>
// //       <h1>Hello World</h1>
// //     </div>
// //   )
// // }

// // Fet Arrow function 
// const App=()=>{
//   //JSX returns always a single tag(div,section) or react framework 
//   //we must have to write closing tag for every element
//   //attribute in camelCase
//   return (
//     <>
//     {/* here MyVar componet called in App component-> so it is nested */}
//     < MyVar /> 
//       <h1 classNameName='myclassName'>Hello World {3*4}</h1>
//       <p>Ek Number</p>
//       <img src="" alt="" />
//     </>
//   );
// }

// const MyVar =()=>{
//   return <h2>Sunny Kumar</h2>
// }



// //how react look into above functional code--> old approch of above functional code
// //this much code to be written in case of adding a div aand h1
// // const App=() =>{
// // return React.createElement(
// //   "div",
// //   {},
// //   React.createElement("h1",{},"Hello World")
// // );
// // };

// export default App //we are exporting for importing in index.js

// import React from 'react'
// import Restaurant from './component/Basics/Restaurant'

// const App = () => {
//   return (
//     <Restaurant/>
//   )
// }

// export default App

import React from 'react'



function App  () {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text-Utils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default App