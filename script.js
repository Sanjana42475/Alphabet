
// let clickElement = document.querySelector('.latter'); // Selecting the letter "A"

// clickElement.addEventListener('click', function() {
//     let image = document.createElement('img'); // Creating a new image element
//     image.src = 'https://img.freepik.com/free-photo/front-view-fresh-red-apples-ripe-mellow-fruits-white-desk-fruit-color-tree-fresh-plant-red_140725-110203.jpg?uid=R183501707&ga=GA1.1.368417123.1735046450&semt=ais_incoming';
//     image.alt = 'Apple';
//     image.style.width = '200px'; // Setting image width

//     document.querySelector('.box').appendChild(image); // Appending image inside the box
// });

       
let clickElement = document.querySelector('.latter'); // Selecting the letter "A"

clickElement.addEventListener('click', function() {
    let image = document.createElement('img'); // Creating a new image element
    image.src = 'https://img.freepik.com/free-photo/front-view-fresh-red-apples-ripe-mellow-fruits-white-desk-fruit-color-tree-fresh-plant-red_140725-110203.jpg?uid=R183501707&ga=GA1.1.368417123.1735046450&semt=ais_incoming';
    image.alt = 'Apple';
    image.style.width = '200px'; // Setting image width

    document.querySelector('.box').appendChild(image); // Appending image inside the box
});
