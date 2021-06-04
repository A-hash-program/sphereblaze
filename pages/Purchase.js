import React from 'react'
import Header from "./Head/Header.js"
function Purchase() {
    return (
        <div className = "widget-color">
            <Header/>
            <div>
                <iframe 
             className = "widget"
             title="Onramper widget" 
             frameborder="no" 
             allow="accelerometer; autoplay; camera; gyroscope; payment;" 
             src="https://widget.onramper.com?color=266678&apiKey=pk_test_jWCXCkJiKkFktEIitty3O160jc7OHEj2l0Hq93ngofw0"></iframe>
            </div>
        </div>
    )
}

export default Purchase;
