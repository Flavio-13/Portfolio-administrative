import React from "react";

export class NotFound extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    render() {
        return(
            <div>
                <h1>404 - Not found</h1>
            </div>
        )
    }
}