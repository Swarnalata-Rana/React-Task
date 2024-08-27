import React from 'react';
import Student from './Student';
import Principal from './Principal';
import Teacher from './Teacher';

const App = () => {
    const student = {
        name: "Runu",
        age: "24",
        class: "MA",
        hobbis: "Talk to girl"
    };
    const principal = {
        name: "Runu",
        age: "24",
        class: "MA",
        hobbies: "Singing Song"
    };
    const teacher = {
        name: "Runu",
        age: "24",
        class: "MA",
        hobby: "Dance with ma'am"
    };

    return (
        <div>
            <Student student={student} />
            <Principal PrincipalHobby={principal.hobbies} />
            <Teacher {...teacher} />
        </div>
    );
}

export default App;
