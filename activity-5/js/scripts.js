(function() {

    var data = [
        {
            name: "GitLens",
            description: "GitLens enables you to visualize code authorship within VS Code",
            author: "By GitKraken",
            url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
            downloads: 11056462,
            stars: 5,
            price: 0,
            selector: "p1"
        },
        {
            name: "Open In Browser",
            description: "This allows you to open the current file in your default browser or application.",
            author: "By TechER",
            url: "https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser",
            downloads: 4427354,
            stars: 3.5,
            price: 0,
            selector: "p2"
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    };

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id){
        return document.getElementById(id);
    };

    var writePackageInfo = function(package) {
        var selector = package.selector,
            nameEl = getEl(selector + "-name"),
            descEl = getEl(selector + "-description"),
            authEl = getEl(selector + "-author"),
            downloadEl = getEl(selector + "-downloads"),
            starsEl = getEl(selector + "-stars");

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    };

    dateEl = getEl("date");
    dateEl.textContent = getTodaysDate();

    var gitLens = new Package(data[0]);
    writePackageInfo(gitLens);

    var openInBrowser = new Package(data[1]);
    writePackageInfo(openInBrowser);

}());