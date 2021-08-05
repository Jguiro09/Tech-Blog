const newBlogHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#blog-title").value.trim();
    const content = document.querySelector("#content").value.trim();

    if(title && content) {
        const response = await fetch('/api/blogs/', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json'},
        })

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog.');
        }
    }
}

function hide () {
    modal = document.querySelector("#new")
    modal.classList.toggle("hidden");
}

document.querySelector('.new-form').addEventListener('submit', newBlogHandler);
document.getElementById("myBtn").addEventListener("click", hide)