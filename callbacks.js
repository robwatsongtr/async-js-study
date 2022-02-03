// typical, array of objects 
const posts = [
  { 
    title : 'post one',
    body : 'this is post one content'
  },
  { 
    title : 'post two',
    body : 'this is post two content'
  }   
];


function getPosts() {
  setTimeout( () => {
    let output = '';

    // append each post hence the +=
    posts.forEach( (post, index) => {
      output += `<li>${post.title}</li>`
    });

    document.body.innerHTML = output; // insert into DOM 
  }, 2000);
}

getPosts();

const anotherPost = { title: 'Post three', body: 'this is post three yo' }

function createPost(post) {
  setTimeout( () => {
    posts.push(post);
  }, 2000)
}

createPost(anotherPost);

