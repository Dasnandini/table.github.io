// main.js...

// 1. GET request using fetch()
fetch("https://dev.ylytic.com/ylytic/test")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {

        // 2. Create a variable to store HTML table headers
        let li = `<tr><th>at</th><th>author</th><th>like</th><th>reply</th><th>text</th></tr>`;

        // 3. Loop through each data and add a table row
        json.forEach((user) => {
            li += `<tr>
        <td>${user.at}</td>
        <td>${user.author} </td>
        <td>${user.like}</td>
        <td>${user.reply}</td>
        <td>${user.text}</td>
      </tr>`;
        });

        // 4. DOM Display result
        document.getElementById("users").innerHTML = li;
    });

// main.js

// 5. POST request using fetch()
fetch("https://dev.ylytic.com/posts", {
    // 6. Adding method type
    method: "POST",

    // 7. Adding body or contents to send JSON Stringify
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),

    // 8. Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    // 9. Converting to JSON
    .then((response) => response.json())

    // 10. Displaying results to console
    .then((json) => console.log(json));