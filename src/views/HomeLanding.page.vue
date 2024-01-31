<script setup lang="ts">
const books = await fetch('https://library-api.alab.in/graphql/', {
    method: 'POST',
    body: `query Books {
        books {
            bookId,
            title,
            author {
                name,
                biography,
                birthDate,
                books {
                    bookId
                }
            }

        }
    }`
})
console.log(books)
</script>

<template>
    <div class="container mt-3">
        <div class="row mb-3 align-items-center">
            <div class="col-3">
                <span>Input Text</span>
            </div>
            <div class="col">
                <input type="text" class="form-control" />
            </div>
        </div>
        <div class="row mb-3 align-items-center">
            <div class="col-3">
                <span>Input Password</span>
            </div>
            <div class="col">
                <input type="password" class="form-control" />
            </div>
        </div>
    </div>
</template>

<!-- <textarea> -->
<!-- <button> -->
<!-- <select> -->
<!-- <option> -->
