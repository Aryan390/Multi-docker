import React, { useState, useEffect } from "react";
import axios from "axios";

// class Fib extends Component {
//   state = {
//     seenIndexes: [],
//     values: {},
//     index: "",
//   };

//   componentDidMount() {
//     this.fetchValues();
//     this.fetchIndexes();
//     console.log(this.state);
//   }
//   async fetchValues() {
//     const values = await axios.get("/api/values/current");
//     this.setState({ values: values.data });
//   }

//   async fetchIndexes() {
//     const seenIndexes = await axios.get("/api/values/all");
//     this.setState({ seenIndexes: seenIndexes.data });
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     await axios.post("/api/values", {
//       index: this.state.index,
//     });

//     this.setState({ index: "" });
//   };

//   renderSeenIndexes() {
//     return this.state.seenIndexes.map(({ number }) => number).join(", ");
//   }

//   renderValues() {
//     const entries = [];
//     for (let key in this.state.values) {
//       entries.push(
//         <div key={key}>
//           For index {key} I calculated {this.state.values[key]}
//         </div>
//       );
//     }
//     return entries;
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Enter your index:</label>
//           <input
//             value={this.state.index}
//             onChange={(event) => this.setState({ index: event.target.value })}
//           />
//           <button>Submit</button>
//         </form>

//         <h3>Indexes I have seen:</h3>
//         {this.renderSeenIndexes()}

//         <h3>Calculated Values:</h3>
//         {this.renderValues()}
//       </div>
//     );
//   }
// }

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = React.useState([]);
  const [values, setValues] = React.useState({});
  const [index, setIndex] = React.useState("");

  console.log(seenIndexes, values, index);

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchValues = async () => {
    const values = await axios.get("/api/values/current");
    setValues(values.data);
  };

  const fetchIndexes = async () => {
    const seenIndexes1 = await axios.get("/api/values/all");
    setSeenIndexes(seenIndexes1.data);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index,
    });

    setIndex("");
  };

  function renderSeenIndexes() {
    return seenIndexes.map(({ number }) => number).join(", ");
  }

  function renderValues() {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }
    return entries;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          value={index}
          onChange={(event) => setIndex(event.target.value)}
        />
        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>
      {renderSeenIndexes()}

      <h3>Calculated Values:</h3>
      {renderValues()}
    </div>
  );
};

export default Fib;
