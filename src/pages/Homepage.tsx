import React from "react";
import UserSearchBar from "../components/UserSearchBar/UserSearchBar";

/**
 * Represents the homepage of the application.
 * This component renders the UserSearchBar component.
 */
const HomePage: React.FC = () => {

    return (
        <div className="home-page">
            <UserSearchBar/>
        </div>
    );
};


export default HomePage;
