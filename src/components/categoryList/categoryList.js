import { Component } from "react";
import styled from "styled-components";
import {GET_ALL_CATEGORIES} from '../../query/categories';

const Category = styled.div`
    font-family: 'Raleway', sans-serif;        
    font-weight: 300;
    font-size: 16px;
    line-height: 120%; 
    color: #1d1f22;
`

export default class CategoryList extends Component {
    state = {
        categories: ['all']
    }


    render() {
        this.props.client.query({
          query: GET_ALL_CATEGORIES
        })
        .then(result => {
          this.setState({
              categories: result.data.categories.map(item => {
                return item.name;
              })
          })
        });

        const categories = this.state.categories.map((category, index) => (
            <Category key={index}>{category}</Category>
        ))
        
        return (
            <div>
                {categories}
            </div>
        )
    }
}