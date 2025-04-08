document.addEventListener("DOMContentLoaded", function () {
  function convertInchesToFeet(value) {
      return (value / 12).toFixed(2);
  }

  function updateFeetValues() {
      let widthInches = document.getElementById("customWidth").value;
      let heightInches = document.getElementById("customHeight").value;

      document.getElementById("customWidthFeet").textContent = widthInches ? convertInchesToFeet(widthInches) : "0";
      document.getElementById("customHeightFeet").textContent = heightInches ? convertInchesToFeet(heightInches) : "0";

      updateTotalAmount();
  }

  function updateTotalAmount() {
      let width = parseFloat(document.getElementById("customWidth").value) || 0;
      let height = parseFloat(document.getElementById("customHeight").value) || 0;
      let copies = parseInt(document.getElementById("totalCopies").value) || 0;
      let rate = parseFloat(document.getElementById("ratePerSqInch").value) || 0;

      let totalSqInches = width * height;
      let totalAmount = totalSqInches * copies * rate;

      document.getElementById("totalAmount").textContent = totalAmount.toFixed(17.70);
  }

  function resetForm() {
      document.getElementById("printForm").reset();
      document.getElementById("customWidthFeet").textContent = "0";
      document.getElementById("customHeightFeet").textContent = "0";
      document.getElementById("totalAmount").textContent = "0.00";
  }

  document.getElementById("customWidth").addEventListener("input", updateFeetValues);
  document.getElementById("customHeight").addEventListener("input", updateFeetValues);
  document.getElementById("totalCopies").addEventListener("input", updateTotalAmount);
  document.getElementById("ratePerSqInch").addEventListener("input", updateTotalAmount);
  document.getElementById("resetButton").addEventListener("click", resetForm);
});