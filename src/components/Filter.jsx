import React, { Component } from 'react'
import '../styles/filter.css'
import FilterItem from './FilterItem'
export default class Filter extends Component {
    state={
        filters:[
            {
                name:'Todos',
                isActive:false
            },
            {
                name:'Carpi',
                isActive:false
            },
            {
                name:'Cerra',
                isActive:false
            },
            {
                name:'Pintu',
                isActive:false
            },
            {
                name:'Electri',
                isActive:false
            }
        ]
    }
    render() {
        return (
            <div className="filterContainer">
              {
                  this.state.filters.map((filter)=>(
                     <FilterItem name={filter.name}/>
                  ))
              }
            </div>
        )
    }
}
