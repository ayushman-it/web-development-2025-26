let Dname = document.getElementById("name");

let output = document.getElementById("output"); 


function getValue() {
    switch (Dname.value) {
        case '2026-01-01':
            output.innerHTML = "New Year's Celebration";
            break;

        case '2026-01-02':
            output.innerHTML = "Guru Gobind Singh Jayanti";
            break;

        case '2026-01-05':
            output.innerHTML = "National Birds Day";
            break;

        case '2026-01-10':
            output.innerHTML = "World Hindi Day";
            break;

        case '2026-01-15':
            output.innerHTML = "Indian Army Day";
            break;

        case '2026-01-23':
            output.innerHTML = "Netaji Subhas Chandra Bose Jayanti";
            break;

        case '2026-01-26':
            output.innerHTML = "Republic Day";
            break;
        
        default:
            output.innerHTML = "No event found for this date";
            break;

    }
}



getValue();

