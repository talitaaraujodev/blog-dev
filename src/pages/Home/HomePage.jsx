import React from "react";
import Header from "../../components/Header";
import "../../assets/styles/style.css";

export default function HomePage() {
    return (
        <div>
        <Header/>   
            <main className="main">
                <div className="navbar">
                    navbar
                </div>
                <div className="feed">
                    feed
                </div>
            </main>
        </div>
    )
}