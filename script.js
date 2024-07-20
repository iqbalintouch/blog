document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    document.getElementById('posts').appendChild(post);

    document.getElementById('post-form').reset();
});
