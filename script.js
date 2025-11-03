const form = document.getElementById("searchForm");
    const input = document.getElementById("searchInput");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      const query = input.value.trim();
      if (query !== "") {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
      }
    });