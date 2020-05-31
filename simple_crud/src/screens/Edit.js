import React, { Component } from "react";
import { withRouter } from "react-router";
import MainForm from "../components/Form";
import axios from "axios";



class Edit extends Component {
  state = {data:{}};
  
  render() {
    console.log(this.state.data.name);
    return (
      <div className="container mt-4"> 
        <MainForm
        value="update"
        operation={this.props.update}
        def={this.state.data}
        className="mb-2"
      />
      </div>
    )
  }

  async componentDidMount(){
    try {
      const res = await axios.get(`/data/${this.props.match.params.id}`);
      this.setState({data:{...res.data}}); 
    } catch (error) {
      console.log(error);
    }
  }
}

export default withRouter(Edit);


// const Edit = ({ update, data, match }) => {
//   // console.log(match.params.id);
//   const [item, setItem] = useState({});

//   useEffect( () => {
//     async function getData(){
      
//       try {
//         const res = await axios.get(`/data/${match.params.id}`)
//         console.log(res.data);
//         setItem({item:[...res.data ]});
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getData();
//     console.log('item',item);
//   }, []);
//   return (
//     <div className="container pt-4 ">
//       {item.item}
//       {/*  */}
//     </div>
//   );
// };

// export default withRouter(Edit);
