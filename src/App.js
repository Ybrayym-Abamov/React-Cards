import React from 'react';
import CardGroup from "./CardGroup.js";
import Card from "./Card.js"


const App = () => (
    <CardGroup>
        <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
        <Card description="Basic tier" icon="fa-trophy" price="$10.00" hint="(most popular)"/>
        <Card description="Advanced tier" icon="fa-bolt" price="$6,000,000" hint="(only for enterprise-level professionals)"/>
    </CardGroup>
);

export default App;



// https://gitlab.com/Ybrayym/assessment---react-cards      ----> link to my repo