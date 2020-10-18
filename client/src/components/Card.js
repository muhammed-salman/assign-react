import { divide } from 'lodash';
import React, { Component } from 'react'

export default (props) => {
    return (
        <div className="card col-lg-3 col-md-3 col-sm-12 mr-4 mb-4">
            <div src="" className="card-img-top"> Lorem Ipsum </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque voluptates dolorem doloremque voluptatum culpa aliquid odio, sit ducimus, harum velit doloribus. Minus modi, possimus voluptatibus quam voluptatem magni laudantium.
                </p>
            </div>
        </div>
    );
}