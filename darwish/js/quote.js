// Quote form functionality
document.addEventListener("DOMContentLoaded", () => {
    const quoteForm = document.getElementById("quoteForm")
    const addProductBtn = document.getElementById("addProduct")
    let productCount = 1
  
    if (!quoteForm) return
  
    // Load saved quote items from localStorage
    loadQuoteItems()
  
    // Add product button functionality
    addProductBtn.addEventListener("click", addProductRequirement)
  
    // Form submission
    quoteForm.addEventListener("submit", handleQuoteSubmission)
  
    function loadQuoteItems() {
      const quoteItems = JSON.parse(localStorage.getItem("quoteItems") || "[]")
  
      if (quoteItems.length > 0) {
        // Clear existing product requirements
        const productRequirements = document.getElementById("productRequirements")
        productRequirements.innerHTML = ""
        productCount = 0
  
        // Add each quote item as a product requirement
        quoteItems.forEach((item, index) => {
          addProductRequirement(item, index === 0)
        })
  
        // Clear localStorage after loading
        localStorage.removeItem("quoteItems")
      }
    }
  
    function addProductRequirement(prefilledData = null, isFirst = false) {
      productCount++
      const productRequirements = document.getElementById("productRequirements")
  
      const productItem = document.createElement("div")
      productItem.className = "product-item"
      productItem.innerHTML = `
              <div class="form-row">
                  <div class="form-group">
                      <label for="category${productCount}">Product Category *</label>
                      <select id="category${productCount}" name="category${productCount}" required>
                          <option value="">Select Category</option>
                          <option value="bolts" ${prefilledData?.category === "bolts" ? "selected" : ""}>Bolts</option>
                          <option value="nuts" ${prefilledData?.category === "nuts" ? "selected" : ""}>Nuts</option>
                          <option value="screws" ${prefilledData?.category === "screws" ? "selected" : ""}>Screws</option>
                          <option value="washers" ${prefilledData?.category === "washers" ? "selected" : ""}>Washers</option>
                          <option value="other">Other</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="material${productCount}">Material</label>
                      <select id="material${productCount}" name="material${productCount}">
                          <option value="">Select Material</option>
                          <option value="steel" ${prefilledData?.material === "steel" ? "selected" : ""}>Steel</option>
                          <option value="stainless" ${prefilledData?.material === "stainless" ? "selected" : ""}>Stainless Steel</option>
                          <option value="brass" ${prefilledData?.material === "brass" ? "selected" : ""}>Brass</option>
                          <option value="aluminum" ${prefilledData?.material === "aluminum" ? "selected" : ""}>Aluminum</option>
                          <option value="other">Other</option>
                      </select>
                  </div>
              </div>
              <div class="form-row">
                  <div class="form-group">
                      <label for="size${productCount}">Size/Dimensions</label>
                      <input type="text" id="size${productCount}" name="size${productCount}" 
                             placeholder="e.g., M8x20, 1/4-20, etc." 
                             value="${prefilledData?.size || ""}">
                  </div>
                  <div class="form-group">
                      <label for="quantity${productCount}">Quantity *</label>
                      <input type="number" id="quantity${productCount}" name="quantity${productCount}" 
                             required min="1" value="${prefilledData?.quantity || ""}">
                  </div>
              </div>
              <div class="form-group">
                  <label for="specifications${productCount}">Additional Specifications</label>
                  <textarea id="specifications${productCount}" name="specifications${productCount}" 
                            rows="2" placeholder="Grade, coating, special requirements, etc."></textarea>
              </div>
              ${!isFirst ? '<button type="button" class="btn btn-outline remove-product" onclick="removeProduct(this)">Remove Product</button>' : ""}
          `
  
      productRequirements.appendChild(productItem)
  
      // If this is a prefilled item, add the product name to specifications
      if (prefilledData) {
        const specificationsField = productItem.querySelector(`#specifications${productCount}`)
        specificationsField.value = `Product: ${prefilledData.name}`
      }
    }
  
    window.removeProduct = (button) => {
      const productItem = button.closest(".product-item")
      productItem.remove()
    }
  
    function handleQuoteSubmission(e) {
      e.preventDefault()
  
      const submitBtn = quoteForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
  
      // Add loading state
      submitBtn.innerHTML = '<span class="loading"></span> Submitting Quote Request...'
      submitBtn.disabled = true
  
      // Collect form data
      const formData = new FormData(quoteForm)
      const quoteData = {}
  
      for (const [key, value] of formData.entries()) {
        quoteData[key] = value
      }
  
      // Simulate form submission
      setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText
        submitBtn.disabled = false
  
        // Show success message
        showSuccessMessage()
  
        // Reset form
        quoteForm.reset()
  
        // Reset product requirements to just one
        const productRequirements = document.getElementById("productRequirements")
        productRequirements.innerHTML = ""
        productCount = 0
        addProductRequirement()
      }, 3000)
    }
  
    function showSuccessMessage() {
      const successModal = document.createElement("div")
      successModal.className = "modal-overlay"
      successModal.innerHTML = `
              <div class="modal-content success-modal">
                  <div class="modal-header">
                      <h2>Quote Request Submitted!</h2>
                  </div>
                  <div class="modal-body">
                      <div class="success-icon">✅</div>
                      <h3>Thank you for your quote request!</h3>
                      <p>We've received your request and our team will review it carefully. You can expect to receive a detailed quote within 24 hours.</p>
                      <p><strong>What happens next?</strong></p>
                      <ul>
                          <li>Our technical team will review your requirements</li>
                          <li>We'll prepare a detailed quote with pricing and availability</li>
                          <li>You'll receive the quote via email within 24 hours</li>
                          <li>Our sales team will follow up to discuss any questions</li>
                      </ul>
                      <p>For urgent requests, please call us at <strong>+1 (555) 123-4567</strong></p>
                  </div>
                  <div class="modal-actions">
                      <button class="btn btn-primary" onclick="closeSuccessModal()">Continue Browsing</button>
                      <a href="products.html" class="btn btn-outline">View Products</a>
                  </div>
              </div>
          `
  
      // Add success modal styles
      const modalStyles = `
              <style>
                  .success-modal {
                      max-width: 600px;
                      text-align: center;
                  }
                  .success-icon {
                      font-size: 4rem;
                      margin-bottom: 1rem;
                  }
                  .success-modal h3 {
                      color: #059669;
                      margin-bottom: 1rem;
                  }
                  .success-modal ul {
                      text-align: left;
                      margin: 1rem 0;
                      padding-left: 1.5rem;
                  }
                  .success-modal li {
                      margin-bottom: 0.5rem;
                  }
                  .modal-actions {
                      display: flex;
                      gap: 1rem;
                      justify-content: center;
                      margin-top: 2rem;
                  }
              </style>
          `
  
      document.head.insertAdjacentHTML("beforeend", modalStyles)
      document.body.appendChild(successModal)
  
      // Close modal on overlay click
      successModal.addEventListener("click", (e) => {
        if (e.target === successModal) {
          window.closeSuccessModal()
        }
      })
    }
  
    window.closeSuccessModal = () => {
      const modal = document.querySelector(".modal-overlay")
      if (modal) {
        modal.remove()
      }
    }
  
    // Initialize with one product requirement if none exist
    if (document.querySelectorAll(".product-item").length === 0) {
      addProductRequirement()
    }
  })
  