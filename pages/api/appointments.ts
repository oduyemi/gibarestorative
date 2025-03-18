fetch("https://intakeq.com/api/v1/appointments?client=John&startDate=2024-01-01&endDate=2024-12-31&status=Confirmed&page=1", {
    method: "GET",
    headers: {
      "X-Auth-Key": "your_api_key_here",
      "Content-Type": "application/json"
    }
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching appointments:", error));
  