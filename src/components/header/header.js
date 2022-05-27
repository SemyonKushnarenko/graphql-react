import { Component } from "react";
import CategoryList from "../categoryList/categoryList";

export default class Header extends Component {
    render() {
        return (
            <CategoryList client={this.props.client}/>
        )
    }
}