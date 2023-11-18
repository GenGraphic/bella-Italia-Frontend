<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
 
    require_once('db_connection.php');

    // Perform query
    $sql = "SELECT * FROM rezepte";
    $result = $conn->query($sql);
 
    $data = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        echo json_encode([
            'success' => true,
            'message' => 'Success',
            'rezepte' => $data,
            'ingredients' => $data['rezept_ingredients']
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => "Keine Rezepte gefunden."
        ]);
    }

    $conn->close();
    
?>