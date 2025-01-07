// Check if the user has already accepted or declined cookies
if (localStorage.getItem("cookiesAccepted") === null) {
    // If no preference is stored, show the cookie consent banner
    document.getElementById("cookie-consent-banner").style.display = "block";
} else {
    // If a preference is stored, hide the banner
    document.getElementById("cookie-consent-banner").style.display = "none";
    
    // Enable or disable cookies based on the user's preference
    if (localStorage.getItem("cookiesAccepted") === "true") {
        enableCookies();  // Enable cookies if accepted
    } else {
        disableCookies();  // Block cookies if declined
    }
}

// Function to handle cookie acceptance
function acceptCookies() {
    // Save the user's acceptance to localStorage
    localStorage.setItem("cookiesAccepted", "true");
    
    // Enable cookies (e.g., Google Analytics, etc.)
    enableCookies();
    
    // Hide the cookie consent banner
    document.getElementById("cookie-consent-banner").style.display = "none";
}

// Function to handle cookie rejection
function declineCookies() {
    // Save the user's rejection to localStorage
    localStorage.setItem("cookiesAccepted", "false");
    
    // Disable cookies (e.g., blocking Google Analytics, etc.)
    disableCookies();
    
    // Hide the cookie consent banner
    document.getElementById("cookie-consent-banner").style.display = "none";
}

// Function to enable cookies (for accepted consent)
function enableCookies() {
    // Dynamically load Google Analytics only after consent
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-470840731";
    script.async = true;
    document.head.appendChild(script);
    
    script.onload = function() {
        // Initialize Google Analytics after script is loaded
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-470840731');
    };

    // Additional services that need cookies can be added here
}

// Function to disable cookies (if rejected)
function disableCookies() {
    // Block or disable cookies/services if rejected
    // No cookies or tracking scripts should be loaded here
}