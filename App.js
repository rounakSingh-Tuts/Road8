import React, { Component } from "react";

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends Component {
  constructor() {
    this.state = ({
      list,
      searchText: ''
    })
    this.onDismiss = this.onDismiss.bind(this);
    this.clickMe = this.clickMe.bind(this);
    this.searchTextChange = this.searchTextChange.bind(this);
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID != id);
    this.setState({
      list: updatedList
    })
  }

  clickMe() {
    alert("clicked")
  }

  searchTextChange(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    const {searchText,list} = this.state
    return(
      <div>
        <Search 
            value={searchText}
            onChange={this.searchTextChange}
        >
        Search Items
        </Search>
        <Table 
          list={list}
          pattern={searchText}
          onDismiss={this.onDismiss}
          clickMe={this.clickMe}
        />
      </div>
    )
  }
}

// class Search extends Component {
//   render() {
//     const { value, onChange, children} = this.props;
//     return (
//       <div>
//         {children}
//         <form>
//           <input type="text" value={value} onChange={onChange} />
//         </form>
//       </div>
//     )
//   }
// }

// function Search(props) {
//   const { value, onChange, children} = props;
//   return (
//     <div>
//       {children}
//       <form>
//         <input type="text" value={value} onChange={onChange} />
//       </form>
//     </div>
//   )
// }

const Search = ({ value, onChange, children }) =>
  <div>
    {children}
    <form>
      <input type="text" value={value} onChange={onChange} />
    </form>
  </div>

// class Table extends Component {
//   render() {
//     const{list,pattern,onDismiss,clickMe} = this.props;
//     return (
//       <div>
//       {
//         list.filter(isSearched(pattern)).map(item =>
//           <div key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <button type="button" onClick={() => onDismiss(item.objectID)}>
//               Dismiss
//               </button>
//             <button type="button" onClick={() => clickMe()}>
//               clickMe
//               </button>
//           </div>
//         )
//       }
//       </div>
//     )
//   }
// }

// function Table(props) {
//   const{list,pattern,onDismiss,clickMe} = props;
//   return(
//     <div>
//       {
//         list.filter(isSearched(pattern)).map(item =>
//           <div key={item.objectID}>
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <button type="button" onClick={() => onDismiss(item.objectID)}>
//               Dismiss
//                </button>
//             <button type="button" onClick={() => clickMe()}>
//               clickMe
//                </button>
//           </div>
//         )
//       }
//     </div>
//   ) 
// }

const Table = ({ list, pattern, onDismiss, clickMe }) =>
  <div>
    {
      list.filter(isSearched(pattern)).map(item =>
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <button type="button" onClick={() => onDismiss(item.objectID)}>
            Dismiss
               </button>
          <button type="button" onClick={() => clickMe()}>
            clickMe
               </button>
        </div>
      )
    }
  </div>

export default App