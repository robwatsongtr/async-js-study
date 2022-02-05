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
  }, 1000);
}



function createPost(post, callback) {
  setTimeout( () => {
    posts.push(post);
    callback();
  }, 2000)
}

createPost({ title: 'Post three', body: 'this is post three yo' }, getPosts);

