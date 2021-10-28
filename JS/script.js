let books = [
    {
        author: "Bianca Sparacino",
        image: "strength",
        title: "The Strength in our Scars",
        year: "1985"
    },

    {
        author: "C.S. Lewis",
        image: "tim-alex",
        title: "The Chronicles of Narnia",
        year: "1997"
    },

    {
        author: "Will Deans",
        image: "dark-pines",
        title: "Dark Pines",
        year: "1979"
    },

    {
        author: "F. Scott Fitzgerald",
        image: "scott",
        title: "The Great Gatsby",
        year: "1942"
    },
    
    {
        author: "Parmle Tourneur",
        image: "les-nuits",
        title: "Les Nuits",
        year: "1786"
    },
     
    {
        author: "Amelie Nothomb",
        image: "stupore",
        title: "Stupore E Tremori",
        year: "1689"
    },
      
    {
        author: "S.L Mattews",
        image: "kingdom",
        title: "Kingdom of One",
        year: "1945"
    },

    {
        author: "J.D Salinger",
        image: "catcher",
        title: "Catcher in the Rye",
        year: "1935"
    },

    {
        author: "J.W Rowling",
        image: "harry",
        title: "Harry Potter",
        year: "1982"
    },

    {
        author: "Lyme Reid Baks",
        image: "l-shaped",
        title: "The L-shaped Room",
        year: "1959"
    },

    {
        author: "Dorothy L. Sayers",
        image: "maker",
        title: "The Mind of the Maker",
        year: "1956"
    },

    {
        author: "Tuli Kupferberg",
        image: "1001",
        title: "1001 ways to live without working",
        year: "1420"
    }
]

let book_collectionSection = document.getElementById('book-collection');
let html = "";
books.forEach(e => {
    html += `
                <div class="col-md-4 col-12 p-3 mb-5">
                    <div class="book-collection-image mb-4">
                        <img src="Images/${e.image}.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="book-collection-body">
                        <h4>Title: ${e.title}</h4>
                        <h5>Author: ${e.author}</h5>
                        <h5>Year: ${e.year}</h5>          
                    </div>
                </div>
    `
    console.log(e)

    book_collectionSection.innerHTML = html
})