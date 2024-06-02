document.getElementById('fetchButton').addEventListener('click', fetchBlogPost);

function fetchBlogPost() {
  const blogPostContainer = document.getElementById('blogPost');
  blogPostContainer.innerHTML = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/posts/1') // Example API URL
    .then(response => response.json())
    .then(data => {
      blogPostContainer.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;
    })
    .catch(error => {
      blogPostContainer.innerHTML = 'Error fetching blog post';
      console.error('Error:', error);
    });
}
