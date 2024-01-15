module.exports = (list) => {
    return list.sort(function (a, b) {
        // Extract the latest year from the date. If the date is a range like "2022-2023", take "2023".
        const yearA = a.date.split('-').pop();
        const yearB = b.date.split('-').pop();

        // Compare by year first
        if (yearA > yearB) return -1;
        if (yearA < yearB) return 1;

        // If years are the same, then sort alphabetically by title
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
    });
}
