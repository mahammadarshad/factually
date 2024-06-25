document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;

        const bookItem = document.createElement('tr');
        bookItem.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${year}</td>
            <td><button class="btn btn-danger delete-btn">Delete</button></td>
        `;

        bookList.appendChild(bookItem);

        bookForm.reset();
    });

    bookList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('tr').remove();
        }
    });
});
