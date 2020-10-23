const exercises = [ 
    { 
        exercise: 'sit ups',
        bodyType: 'abs',
        bodyPart: 'core',
    }, 
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs',
    },
    {
        exercise: 'dumbbell curls',
        bodyType: 'biceps', 
        bodyPart: 'arms',
    },
];

const container = document.querySelector('.container');

function addExercisesToContainer(array) {
    // iterate thru the array 
    for (let i=0; i <array.length; i++) {
        // set each element to a variable 
        let exercise = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exercise;

        container.appendChild(newElement);

    }
    addExercisesToContainer(exercises);
    // create a new element
    // access "exercise" key to get value
    // add value text to element(textContent)
    //append new element to container 
}

function addBodyTypeToContainer(array) {
    // iterate thru the array 
    for (let i=0; i <array.length; i++) {
        // set each element to a variable 
        let bodyType = array[i].bodyType;
        let newElement = document.createElement('p');
        newElement.textContent = bodyType;

        container.appendChild(newElement);

    }
    addBodyTypeToContainer(exercises);

    function addBodyPartToContainer(array) {
        // iterate thru the array 
        for (let i=0; i <array.length; i++) {
            // set each element to a variable 
            let bodyPart = array[i].bodyPart;
            let newElement = document.createElement('p');
            newElement.textContent = bodyPart;
    
            container.appendChild(newElement);
    
        }
addBodyPartToContainer(exercises);