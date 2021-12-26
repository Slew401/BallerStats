import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from "d3";
import { hexbin } from "d3-hexbin";
import { court, shots } from "d3-shotchart";
window.d3_hexbin = {hexbin : hexbin};

export default class Shots extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
