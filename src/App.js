import React from 'react';
import CardGroup from "./CardGroup.jsx";
import Card from "./Card.jsx"


const App = () => (
    <CardGroup>
        <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
        <Card description="Basic tier" icon="fa-trophy" price="$10.00" hint="(most popular)"/>
        <Card description="Advanced tier" icon="fa-bolt" price="$6,000,000" hint="(only for enterprise-level professionals)"/>
    </CardGroup>
);

export default App;
