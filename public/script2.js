let currentPage = 1;
let pageSize = 25; // default page size

const table = document.getElementById("table-3");
const pagination = document.getElementById("pagination");
const data = Array.from(table.tBodies[0].rows); // get the table data as an array
let pageCount = Math.ceil(data.length / pageSize); // calculate the number of pages

const pageSizeSelect = pagination.querySelector("#pageSize");
pageSizeSelect.addEventListener("change", () => {
    pageSize = parseInt(pageSizeSelect.value);
    pageCount = Math.ceil(data.length / pageSize);
    currentPage = 1;
    displayPage(currentPage);
});

const prevPageButton = pagination.querySelector("#prevPage");
prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
    }
});

const nextPageButton = pagination.querySelector("#nextPage");
nextPageButton.addEventListener("click", () => {
    if (currentPage < pageCount) {
        currentPage++;
        displayPage(currentPage);
    }
});

function displayPage(page) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    table.tBodies[0].innerHTML = data.slice(start, end).map(row => row.outerHTML).join("");
    pagination.querySelector("#prevPage").disabled = page === 1;
    pagination.querySelector("#nextPage").disabled = page === pageCount;
}

displayPage(currentPage); // show the first page initially
