<?php
    require_once('db.php');

    // Get the updated data from the POST request
    $customerNumber = $_POST["customerNumber"];
    $customerName = $_POST["customerName"];
    $phone = $_POST["phone"];
    $city = $_POST["city"];

    // Update the data in the table
    $sql = "UPDATE customers SET customerName='$customerName', phone='$phone', city='$city' WHERE customerNumber=$customerNumber";
    if ($conn->query($sql) === TRUE) {
        echo "Data updated successfully";
    } else {
        echo "Error updating data: " . $conn->error;
    }

    $conn->close();
