// Products data
const productsData = [
    // Bolts
    {
      id: 1,
      name: "Hex Head Bolt M8x20",
      category: "bolts",
      material: "steel",
      size: "M8x20",
      price: 0.25,
      image: "/placeholder.svg?height=200&width=200",
      description: "High-strength hex head bolt, zinc plated for corrosion resistance",
    },
    {
      id: 2,
      name: "Hex Head Bolt M10x30",
      category: "bolts",
      material: "stainless",
      size: "M10x30",
      price: 0.45,
      image: "/placeholder.svg?height=200&width=200",
      description: "Stainless steel hex head bolt for marine applications",
    },
    {
      id: 3,
      name: "Carriage Bolt 1/4-20x2",
      category: "bolts",
      material: "steel",
      size: "1/4-20x2",
      price: 0.35,
      image: "/placeholder.svg?height=200&width=200",
      description: "Round head carriage bolt with square neck",
    },
    {
      id: 4,
      name: "Hex Head Bolt M12x40",
      category: "bolts",
      material: "steel",
      size: "M12x40",
      price: 0.65,
      image: "/placeholder.svg?height=200&width=200",
      description: "Heavy-duty hex head bolt for structural applications",
    },
    {
      id: 5,
      name: "Socket Head Cap Screw M6x16",
      category: "bolts",
      material: "stainless",
      size: "M6x16",
      price: 0.55,
      image: "/placeholder.svg?height=200&width=200",
      description: "Precision socket head cap screw, stainless steel",
    },
    {
      id: 6,
      name: "Flange Bolt M8x25",
      category: "bolts",
      material: "steel",
      size: "M8x25",
      price: 0.4,
      image: "/placeholder.svg?height=200&width=200",
      description: "Flange bolt with integrated washer",
    },
  
    // Nuts
    {
      id: 7,
      name: "Hex Nut M8",
      category: "nuts",
      material: "steel",
      size: "M8",
      price: 0.15,
      image: "/placeholder.svg?height=200&width=200",
      description: "Standard hex nut, zinc plated finish",
    },
    {
      id: 8,
      name: "Lock Nut M10",
      category: "nuts",
      material: "stainless",
      size: "M10",
      price: 0.3,
      image: "/placeholder.svg?height=200&width=200",
      description: "Self-locking nut with nylon insert",
    },
    {
      id: 9,
      name: "Wing Nut 1/4-20",
      category: "nuts",
      material: "brass",
      size: "1/4-20",
      price: 0.5,
      image: "/placeholder.svg?height=200&width=200",
      description: "Hand-tightenable wing nut in brass",
    },
    {
      id: 10,
      name: "Hex Nut M12",
      category: "nuts",
      material: "steel",
      size: "M12",
      price: 0.25,
      image: "/placeholder.svg?height=200&width=200",
      description: "Heavy-duty hex nut for structural applications",
    },
    {
      id: 11,
      name: "Cap Nut M6",
      category: "nuts",
      material: "stainless",
      size: "M6",
      price: 0.35,
      image: "/placeholder.svg?height=200&width=200",
      description: "Decorative cap nut with dome top",
    },
    {
      id: 12,
      name: "T-Nut M8",
      category: "nuts",
      material: "steel",
      size: "M8",
      price: 0.45,
      image: "/placeholder.svg?height=200&width=200",
      description: "T-nut for wood and furniture applications",
    },
  
    // Screws
    {
      id: 13,
      name: "Phillips Head Screw #8x1",
      category: "screws",
      material: "steel",
      size: "#8x1",
      price: 0.2,
      image: "/placeholder.svg?height=200&width=200",
      description: "Standard Phillips head wood screw",
    },
    {
      id: 14,
      name: "Self-Tapping Screw #10x3/4",
      category: "screws",
      material: "stainless",
      size: "#10x3/4",
      price: 0.3,
      image: "/placeholder.svg?height=200&width=200",
      description: "Self-tapping screw for metal applications",
    },
    {
      id: 15,
      name: "Machine Screw M4x12",
      category: "screws",
      material: "steel",
      size: "M4x12",
      price: 0.18,
      image: "/placeholder.svg?height=200&width=200",
      description: "Precision machine screw with Phillips head",
    },
    {
      id: 16,
      name: "Hex Socket Screw M5x16",
      category: "screws",
      material: "stainless",
      size: "M5x16",
      price: 0.4,
      image: "/placeholder.svg?height=200&width=200",
      description: "Hex socket head cap screw, stainless steel",
    },
    {
      id: 17,
      name: "Drywall Screw #6x1-1/4",
      category: "screws",
      material: "steel",
      size: "#6x1-1/4",
      price: 0.12,
      image: "/placeholder.svg?height=200&width=200",
      description: "Phosphate coated drywall screw",
    },
    {
      id: 18,
      name: "Thumb Screw M6x20",
      category: "screws",
      material: "aluminum",
      size: "M6x20",
      price: 0.75,
      image: "/placeholder.svg?height=200&width=200",
      description: "Knurled thumb screw for hand tightening",
    },
  
    // Washers
    {
      id: 19,
      name: "Flat Washer M8",
      category: "washers",
      material: "steel",
      size: "M8",
      price: 0.08,
      image: "/placeholder.svg?height=200&width=200",
      description: "Standard flat washer, zinc plated",
    },
    {
      id: 20,
      name: "Lock Washer M10",
      category: "washers",
      material: "stainless",
      size: "M10",
      price: 0.15,
      image: "/placeholder.svg?height=200&width=200",
      description: "Split lock washer, stainless steel",
    },
    {
      id: 21,
      name: "Fender Washer 1/4",
      category: "washers",
      material: "steel",
      size: "1/4",
      price: 0.12,
      image: "/placeholder.svg?height=200&width=200",
      description: "Large diameter fender washer",
    },
    {
      id: 22,
      name: "Belleville Washer M12",
      category: "washers",
      material: "steel",
      size: "M12",
      price: 0.25,
      image: "/placeholder.svg?height=200&width=200",
      description: "Conical spring washer for high load applications",
    },
    {
      id: 23,
      name: "Rubber Washer 3/8",
      category: "washers",
      material: "rubber",
      size: "3/8",
      price: 0.2,
      image: "/placeholder.svg?height=200&width=200",
      description: "Rubber sealing washer for plumbing",
    },
    {
      id: 24,
      name: "Wave Washer M6",
      category: "washers",
      material: "stainless",
      size: "M6",
      price: 0.18,
      image: "/placeholder.svg?height=200&width=200",
      description: "Wave spring washer for light preload",
    },
  ]
  
  // Products page functionality
  document.addEventListener("DOMContentLoaded", () => {
    let currentProducts = [...productsData]
    let currentPage = 1
    const productsPerPage = 12
  
    // Get DOM elements
    const productsGrid = document.getElementById("productsGrid")
    const searchInput = document.getElementById("searchInput")
    const searchBtn = document.getElementById("searchBtn")
    const categoryFilter = document.getElementById("categoryFilter")
    const materialFilter = document.getElementById("materialFilter")
    const sortFilter = document.getElementById("sortFilter")
    const pagination = document.getElementById("pagination")
  
    // Check if we're on the products page
    if (!productsGrid) return
  
    // Initialize products display
    initializeProducts()
  
    // Event listeners
    searchBtn.addEventListener("click", handleSearch)
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch()
      }
    })
  
    categoryFilter.addEventListener("change", applyFilters)
    materialFilter.addEventListener("change", applyFilters)
    sortFilter.addEventListener("change", applySorting)
  
    // Debounced search
    const debouncedSearch = window.FastenTechUtils.debounce(applyFilters, 300)
    searchInput.addEventListener("input", debouncedSearch)
  
    function initializeProducts() {
      // Check URL parameters for initial filters
      const urlParams = new URLSearchParams(window.location.search)
      const category = urlParams.get("category")
  
      if (category) {
        categoryFilter.value = category
        applyFilters()
      } else {
        displayProducts(currentProducts)
      }
    }
  
    function handleSearch() {
      applyFilters()
    }
  
    function applyFilters() {
      const searchTerm = searchInput.value.toLowerCase().trim()
      const selectedCategory = categoryFilter.value
      const selectedMaterial = materialFilter.value
  
      currentProducts = productsData.filter((product) => {
        const matchesSearch =
          !searchTerm ||
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.size.toLowerCase().includes(searchTerm)
  
        const matchesCategory = !selectedCategory || product.category === selectedCategory
        const matchesMaterial = !selectedMaterial || product.material === selectedMaterial
  
        return matchesSearch && matchesCategory && matchesMaterial
      })
  
      applySorting()
      currentPage = 1
      displayProducts(currentProducts)
    }
  
    function applySorting() {
      const sortBy = sortFilter.value
  
      currentProducts.sort((a, b) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name)
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "category":
            return a.category.localeCompare(b.category)
          default:
            return 0
        }
      })
  
      displayProducts(currentProducts)
    }
  
    function displayProducts(products) {
      const startIndex = (currentPage - 1) * productsPerPage
      const endIndex = startIndex + productsPerPage
      const productsToShow = products.slice(startIndex, endIndex)
  
      if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
                  <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                      <h3>No products found</h3>
                      <p>Try adjusting your search criteria or filters.</p>
                  </div>
              `
        pagination.innerHTML = ""
        return
      }
  
      productsGrid.innerHTML = productsToShow
        .map(
          (product) => `
              <div class="product-card">
                  <img src="${product.image}" alt="${product.name}" loading="lazy">
                  <div class="product-category">${capitalizeFirst(product.category)}</div>
                  <h3>${product.name}</h3>
                  <div class="product-material">Material: ${capitalizeFirst(product.material)}</div>
                  <div class="product-price">$${product.price.toFixed(2)}</div>
                  <p>${product.description}</p>
                  <div class="product-actions">
                      <button class="btn btn-primary" onclick="addToQuote(${product.id})">Add to Quote</button>
                      <button class="btn btn-outline" onclick="viewDetails(${product.id})">Details</button>
                  </div>
              </div>
          `,
        )
        .join("")
  
      displayPagination(products.length)
    }
  
    function displayPagination(totalProducts) {
      const totalPages = Math.ceil(totalProducts / productsPerPage)
  
      if (totalPages <= 1) {
        pagination.innerHTML = ""
        return
      }
  
      let paginationHTML = ""
  
      // Previous button
      paginationHTML += `
              <button ${currentPage === 1 ? "disabled" : ""} onclick="changePage(${currentPage - 1})">
                  Previous
              </button>
          `
  
      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
          paginationHTML += `
                      <button class="${i === currentPage ? "active" : ""}" onclick="changePage(${i})">
                          ${i}
                      </button>
                  `
        } else if (i === currentPage - 3 || i === currentPage + 3) {
          paginationHTML += "<span>...</span>"
        }
      }
  
      // Next button
      paginationHTML += `
              <button ${currentPage === totalPages ? "disabled" : ""} onclick="changePage(${currentPage + 1})">
                  Next
              </button>
          `
  
      pagination.innerHTML = paginationHTML
    }
  
    // Global functions for product interactions
    window.changePage = (page) => {
      currentPage = page
      displayProducts(currentProducts)
  
      // Scroll to top of products section
      document.querySelector(".products-section").scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  
    window.addToQuote = (productId) => {
      const product = productsData.find((p) => p.id === productId)
      if (product) {
        // Store in localStorage for quote page
        const quoteItems = JSON.parse(localStorage.getItem("quoteItems") || "[]")
  
        // Check if item already exists
        const existingItem = quoteItems.find((item) => item.id === productId)
        if (existingItem) {
          existingItem.quantity += 1
        } else {
          quoteItems.push({
            id: product.id,
            name: product.name,
            category: product.category,
            material: product.material,
            size: product.size,
            price: product.price,
            quantity: 1,
          })
        }
  
        localStorage.setItem("quoteItems", JSON.stringify(quoteItems))
  
        // Show success message
        window.FastenTechUtils.showMessage(`${product.name} added to quote!`, "success")
  
        // Update quote button if it exists
        updateQuoteButton()
      }
    }
  
    window.viewDetails = (productId) => {
      const product = productsData.find((p) => p.id === productId)
      if (product) {
        // Create modal or redirect to product detail page
        showProductModal(product)
      }
    }
  
    function showProductModal(product) {
      const modal = document.createElement("div")
      modal.className = "modal-overlay"
      modal.innerHTML = `
              <div class="modal-content">
                  <div class="modal-header">
                      <h2>${product.name}</h2>
                      <button class="modal-close" onclick="window.closeModal()">&times;</button>
                  </div>
                  <div class="modal-body">
                      <img src="${product.image}" alt="${product.name}" style="width: 100%; max-width: 300px; margin-bottom: 1rem;">
                      <div class="product-details">
                          <p><strong>Category:</strong> ${capitalizeFirst(product.category)}</p>
                          <p><strong>Material:</strong> ${capitalizeFirst(product.material)}</p>
                          <p><strong>Size:</strong> ${product.size}</p>
                          <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
                          <p><strong>Description:</strong> ${product.description}</p>
                      </div>
                      <div class="modal-actions">
                          <button class="btn btn-primary" onclick="addToQuote(${product.id}); window.closeModal();">Add to Quote</button>
                          <button class="btn btn-secondary" onclick="window.closeModal()">Close</button>
                      </div>
                  </div>
              </div>
          `
  
      // Add modal styles
      const modalStyles = `
              <style>
                  .modal-overlay {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background: rgba(0, 0, 0, 0.5);
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      z-index: 2000;
                  }
                  .modal-content {
                      background: white;
                      border-radius: 12px;
                      max-width: 500px;
                      width: 90%;
                      max-height: 90vh;
                      overflow-y: auto;
                  }
                  .modal-header {
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      padding: 1.5rem;
                      border-bottom: 1px solid #e5e7eb;
                  }
                  .modal-close {
                      background: none;
                      border: none;
                      font-size: 2rem;
                      cursor: pointer;
                      color: #64748b;
                  }
                  .modal-body {
                      padding: 1.5rem;
                  }
                  .modal-actions {
                      display: flex;
                      gap: 1rem;
                      margin-top: 2rem;
                  }
              </style>
          `
  
      document.head.insertAdjacentHTML("beforeend", modalStyles)
      document.body.appendChild(modal)
  
      // Close modal on overlay click
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          window.closeModal()
        }
      })
    }
  
    window.closeModal = () => {
      const modal = document.querySelector(".modal-overlay")
      if (modal) {
        modal.remove()
      }
    }
  
    function updateQuoteButton() {
      const quoteItems = JSON.parse(localStorage.getItem("quoteItems") || "[]")
      const quoteBtn = document.querySelector(".quote-btn")
  
      if (quoteBtn && quoteItems.length > 0) {
        quoteBtn.textContent = `Request Quote (${quoteItems.length})`
      }
    }
  
    function capitalizeFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  
    // Initialize quote button
    updateQuoteButton()
  })
  