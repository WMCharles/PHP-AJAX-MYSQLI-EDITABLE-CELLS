$(document).ready(function () {
    // Retrieve data from the server and populate the table
    var tbody = $("#editable_table tbody");
    $.getJSON("get_data.php", function (data) {
        $.each(data, function (index, row) {
            var tr = $("<tr>");
            tr.data("customerNumber", row.customerNumber);
            $("<td>").text(row.customerNumber).appendTo(tr);
            $("<td>").text(row.customerName).appendTo(tr);
            $("<td>").text(row.phone).appendTo(tr);
            $("<td>").text(row.city).appendTo(tr);
            tbody.append(tr);
        });
    });

    // Make the table editable
    tbody.on("click", "td", function () {
        var td = $(this);
        if (td.children("input").length > 0) {
            return;
        }
        var input = $("<input>").val(td.text()).appendTo(td.empty()).focus();
        input.blur(function () {
            var newText = $(this).val();
            if (newText !== "") {
                td.text(newText);
                var row = td.closest("tr");
                var rowData = {
                    customerNumber: row.data("customerNumber"),
                    customerName: row.find("td:eq(1)").text(),
                    phone: row.find("td:eq(2)").text(),
                    city: row.find("td:eq(3)").text()
                };
                // Send the updated data to the server
                $.post("update_data.php", rowData, function (response) {
                    console.log(response);
                });
            } else {
                input.remove();
            }
        });
    });
});
