function calculateBMI() {
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
  
    // Validate input
    if (!gender || isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
      document.getElementById("result").textContent = "Please enter valid values for all fields.";
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    let category;
  
    // Determine BMI category
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    // Gender-based feedback (Optional)
    const genderFeedback = gender === "male" 
      ? "Maintain an active lifestyle for optimal health." 
      : "Focus on a balanced diet and regular physical activity.";
  
    // Age-based feedback (Optional)
    let ageFeedback;
    if (age < 18) {
      ageFeedback = "BMI results may not be accurate for individuals under 18.";
    } else if (age > 65) {
      ageFeedback = "BMI interpretation may vary for seniors. Consult a doctor for detailed advice.";
    } else {
      ageFeedback = "You're in the standard age group for BMI calculations.";
    }
  
    document.getElementById("result").innerHTML = `
      <p>Your BMI is <strong>${bmi}</strong>.</p>
      <p>Category: <strong>${category}</strong></p>
      <p>${genderFeedback}</p>
      <p>${ageFeedback}</p>
    `;
  }
  