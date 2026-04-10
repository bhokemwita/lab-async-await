// Async function to fetch posts from API
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Function to display posts in the DOM
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  
  posts.forEach(post => {
    // Create list item
    const li = document.createElement('li');
    
    // Create h1 and add title
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    
    // Create p and add body
    const p = document.createElement('p');
    p.textContent = post.body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to ul
    postList.appendChild(li);
  });
}

// Call the function to fetch and display posts
fetchPosts();
