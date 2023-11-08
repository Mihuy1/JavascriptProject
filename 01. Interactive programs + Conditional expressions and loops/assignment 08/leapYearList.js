document.addEventListener("DOMContentLoaded", function () {
    const leapYearsList = document.getElementById("leapYearList");

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function listLeapYears(startYear, endYear) {
        for (let year = startYear; year < endYear; year++) {
            if (isLeapYear(year)) {
                const leapYear = document.createElement("li");
                leapYear.textContent = year;
                leapYearsList.appendChild(leapYear)
            }
        }
    }

    const startYear = prompt('Enter start year here:')
    const endYear = prompt('Enter end year here:')

    listLeapYears(startYear, endYear);
});
