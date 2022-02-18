import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from "react-bootstrap";


function AboutmeDescription() {
    return (
        <Card>
            <Card.Body><b>Who am I. I am Thammasart University student. I am studying at a leading public university.
                It is an extremely good university with good teaching staff. For the first time I am attending a university, so it is very stressful for me.
                I like many of the lecturers. It was my first week here. I meet so many interesting people here at the university,
                which I haven't met in a long time. In fact, it feels like a second family. It is wonderful to be back in a university.
                I could sleep in the classroom. This is the advantage of studying</b></Card.Body>
            <Card.Body>I got 890 scores on TOEIC and all way get A in English lessons from my highschool.
                I also earned 1200 / 1200 in science and math for Grade 11. This is mainly due to us having moved every 2 months.
                We now live in a large city called Chiba. It's not really Tokyo so I can't say it.</Card.Body>
        </Card>
    );
}

export default AboutmeDescription;

if (document.getElementById('descrip')) {
    ReactDOM.render(<AboutmeDescription />, document.getElementById('descrip'));
}
