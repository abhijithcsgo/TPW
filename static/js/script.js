function applyFilters() {
  // Get the status of each checkbox
  const templeCheckbox = document.getElementById("templeCheckbox");
  const beachCheckbox = document.getElementById("beachCheckbox");
  const parkCheckbox = document.getElementById("parkCheckbox");
  const museumCheckbox = document.getElementById("museumCheckbox");
  const waterfallsCheckbox = document.getElementById("waterfallsCheckbox");
  const hillsCheckbox = document.getElementById("hillsCheckbox");

  // You can perform filtering logic here based on checkbox status
  if (templeCheckbox.checked) {
    console.log("Temple filter applied");
    // Add your specific logic for Temple filter
  }

  if (beachCheckbox.checked) {
    console.log("Beach filter applied");
    // Add your specific logic for Beach filter
  }

  if (parkCheckbox.checked) {
    console.log("Park filter applied");
    // Add your specific logic for Park filter
  }

  if (museumCheckbox.checked) {
    console.log("Museum filter applied");
    // Add your specific logic for Museum filter
  }

  if (waterfallsCheckbox.checked) {
    console.log("Waterfalls filter applied");
    // Add your specific logic for Waterfalls filter
  }

  if (hillsCheckbox.checked) {
    console.log("Hills filter applied");
    // Add your specific logic for Hills filter
  }

  // Add similar logic for other checkboxes

  // You can also trigger any other actions here
}
