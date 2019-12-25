import React, { Component } from "react";
import TecnicCard from "./TecnicCard";

export default class TecnicanList extends Component {
  constructor(props){
    super(props)
    this.state={
      tecnics:[],
    }
  }
  componentDidMount(){
    //Aquí peticiones al api
    setTimeout(()=>{
      this.setState({
        tecnics:[
          {
            id: 1,
            name: "Carlos García",
            office: "Carpintero",
            stars: 5,
            location: "Miraflores",
            opinions: 10,
            works: 20,
            imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
          },
          {
            id: 2,
            name: "Carlos García",
            office: "Carpintero",
            stars: 5,
            location: "Miraflores",
            opinions: 10,
            works: 20,
            imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
          },
          {
            id: 3,
            name: "Carlos García",
            office: "Carpintero",
            stars: 5,
            location: "Miraflores",
            opinions: 10,
            works: 20,
            imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
          },
          {
            id: 4,
            name: "Carlos García",
            office: "Carpintero",
            stars: 5,
            location: "Miraflores",
            opinions: 10,
            works: 20,
            imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
          }
        ],
      })
    },100)
  }
  render() {
    return (
      <div>
        {this.state.tecnics.map((tecnic) => (
          <TecnicCard
            key={tecnic.id}
            name={tecnic.name}
            work={tecnic.office}
            stars={tecnic.stars}
            location={tecnic.location}
            opinions={tecnic.opinions}
            works={tecnic.works}
            imageUrl={tecnic.imageUrl}
          />
        ))}
      </div>
    );
  }
}
