document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent the default form submission
  
      const formData = {
        name: form.name.value,
        email: form.email.value,
        company: form.company.value,
        message: form.message.value,
      };
  
      try {
        const response = await fetch("https://your-erp-server-url/api/endpoint", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          alert("Your request has been submitted successfully!");
          form.reset();
        } else {
          const error = await response.json();
          alert(`Failed to submit the form: ${error.message}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting your request. Please try again later.");
      }
    });
  });
  