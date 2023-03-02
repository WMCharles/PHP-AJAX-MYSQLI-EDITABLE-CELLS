<?php
    require_once('db.php');
    // Retrieve data from the table
    $sql = "SELECT customerNumber, customerName, phone, city FROM customers";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
    }
    else {
        echo "0 results";
    }

    $conn->close();
