// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".nav-menu")
  
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
      })
  
      // Close mobile menu when clicking on a link
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active")
          navMenu.classList.remove("active")
        })
      })
  
      // Close mobile menu when clicking outside
      document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
          hamburger.classList.remove("active")
          navMenu.classList.remove("active")
        }
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  
    // Contact Form Handler
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
        handleContactForm(this)
      })
    }
  
    // Add loading states to buttons
    function addLoadingState(button) {
      const originalText = button.textContent
      button.innerHTML = '<span class="loading"></span> Sending...'
      button.disabled = true
  
      return function removeLoadingState() {
        button.textContent = originalText
        button.disabled = false
      }
    }
  
    // Handle contact form submission
    function handleContactForm(form) {
      const submitBtn = form.querySelector('button[type="submit"]')
      const removeLoading = addLoadingState(submitBtn)
  
      // Simulate form submission
      setTimeout(() => {
        removeLoading()
        showMessage("Thank you for your message! We'll get back to you within 24 hours.", "success")
        form.reset()
      }, 2000)
    }
  
    // Show success/error messages
    function showMessage(text, type) {
      const message = document.createElement("div")
      message.className = `message ${type}`
      message.textContent = text
  
      const form = document.querySelector("form")
      if (form) {
        form.insertBefore(message, form.firstChild)
  
        setTimeout(() => {
          message.remove()
        }, 5000)
      }
    }
  
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)
  
    // Observe elements for animation
    document.querySelectorAll(".feature-card, .product-category, .value-item").forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  
    // Header scroll effect
    let lastScrollTop = 0
    const header = document.querySelector(".header")
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = "translateY(-100%)"
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)"
      }
  
      lastScrollTop = scrollTop
    })
  
    // Add scroll-based header background
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
        header.style.backdropFilter = "blur(10px)"
      } else {
        header.style.backgroundColor = "#ffffff"
        header.style.backdropFilter = "none"
      }
    })
  })
  
  // Utility functions
  function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  function throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
  
  // Export functions for use in other scripts
  window.FastenTechUtils = {
    debounce,
    throttle,
    showMessage: (text, type) => {
      const message = document.createElement("div")
      message.className = `message ${type}`
      message.textContent = text
  
      const container = document.querySelector(".container") || document.body
      container.insertBefore(message, container.firstChild)
  
      setTimeout(() => {
        message.remove()
      }, 5000)
    },
  }
  