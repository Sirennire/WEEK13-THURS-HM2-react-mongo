import React, {
  Component
} from "react";
import axios from "axios";
import ItemCard from "./ItemCard/ItemCard";
import Wrapper from "./Wrapper/Wrapper";
import items from "./Items.json";
import "./Home.css";

class Home extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    items
  };

  getArticles = () => {
    axios.get("/scrape").then((data) => {
      console.log(data.data);
    });
  };

  displayArticles = () => {
    axios.get("/articles").then((data) => {
      console.log("display: ", data.data);
      this.setState({
        items: data.data
      })
    });
  };

  componentDidMount = () => {
    this.getArticles();
    this.displayArticles();
  };

  render() {
    return ( <
      Wrapper > {
        this.state.items.map(item => ( <
          ItemCard

          id = {
            item._id
          }
          key = {
            item._id
          }
          title = {
            item.title
          }
          image = {
            item.image
          }
          link = {
            item.link
          }
          summary = {
            item.summary
          }
          modalTrigger = {
            this.modalTrigger
          }
          />
        ))
      } <
      /Wrapper>
    );
  }
}

export default Home;
