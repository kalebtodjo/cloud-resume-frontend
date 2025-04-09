async function updateVisitorCount() {
    try {
        const response = await fetch("https://wzie7xttge.execute-api.us-east-1.amazonaws.com/Prod/hello/",
            { method: "GET"}
        );
        
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }

        let element = document.getElementById("visitorCount");
        element.innerText = await response.json();

    } catch (error) {
        console.error("Error fetching data from Amazon API Gateway: ", error);
    }
}