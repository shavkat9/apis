
        const elForm = document.querySelector('.post__form');
        const elUsers = document.querySelector('.post__users');
        const elTitle = document.querySelector('.post__title');
        const elBody = document.querySelector('.post__body');

        const renderComments = (comments) => {
            comments.forEach((comment, index, comments) => {
                const commentItem = document.createElement('option');
                commentItem.value = comment.email;
                commentItem.value = comment.name;
                commentItem.textContent = comment.postId;

                elUsers.appendChild(commentItem);
            
            });
        }
        const getUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();

            return result;
        }
        const getPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();

            return result;
        }
        const getComments = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const result = await response.json();

            return result;
        }
        getComments()
        .then(comments => {
            renderComments(comments)
        }).catch(error => {
            console.log(error)
        })
        elForm.addEventListener('submit', (event) => {
           event.preventDefault();

           const title = elTitle.value;
           const body = elBody.value;
           const selectedItems = elUsers.value;
           fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify( {
                title: title,
                body: body,
                userId: selectedItems
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
           })
           .then(response => response.json())
           .then(data => console.log(data))
        });
        