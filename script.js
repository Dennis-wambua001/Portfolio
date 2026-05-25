function toggleReadMore() {
    const section = document.getElementById("readMore");

    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}