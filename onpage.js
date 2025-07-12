const projects = [
  {
    title: "Anant: Systematic Stock Forecast Engine",
    description: "Anant is a systematic stock forecast engine that predicts next-day closing prices using a combination of technical analysis, sentiment signals, fundamental data, and inter-stock influence. Built using Python, Streamlit, and libraries like TA-Lib, yFinance, scikit-learn, and FinBERT, the app features multiple modes, including self and influence-based forecasting.The project helped me strengthen my understanding of time series modeling, machine learning pipelines, Granger causality, sentiment analysis using NLP, and dashboard deployment. It also sharpened my skills in building integrated trading logic from scratch.",
    skill:"python, machine learning, time series, streamlit, ta-lib, statsmodels, finbert",
    category: "Ml",
    // client: "ABC Tech",
    date: "09 July, 2025",
    url: "https://www.linkedin.com/posts/ankush-parmar-997640322_quant-machinelearning-trading-activity-7348557766518566912-uqCS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFGbsYMBcGJCJpO9BqsWK0c6B_ARGGj5nfI",
    images: [
      "images/project1/a.png",
    "images/project1/b.png",
    "images/project1/c.png",
    
  ],
}, 

  {
    title: "T20 2024 Cricket World Cup Analysis",
    description: "Performed a detailed analysis of player statistics from the 2024 Cricket World Cup to identify the top-performing players and their contributions. Designed an interactive Power BI dashboard to present these insights, providing a clear and actionable overview to support team selection and performance evaluations.",
    skill:"python, numpy, pandas, power bi, beautiful soup",
    category: "Analysis",
    // client: "Practice",
    date: "26 August, 2024",
    url: "https://www.linkedin.com/posts/ankush-parmar-997640322_dataanalysis-cricket-t202024-activity-7233539740963098626-G9rV/?utm_source=share&utm_medium=member_desktop",
    images: [
      "images/project2/a.png",
      "images/project2/b.png",
      "images/project2/c.png",
    ],
  },
  {
    title: "Google Keep Clone",
    description: "A responsive Google Keep clone built with HTML, CSS, and JavaScript. It lets users create, edit, and delete notes with data saved in Local Storage for persistence. This project strengthened my skills in DOM manipulation, event handling, and client-side data storage.",
    skill:"html, css, js",
    category: "Web",
    // client: "ABC Tech",
    date: "18 August, 2024",
    url: "https://google-keep-clone-p5z1.onrender.com/",
    images: [
      "images/project3/a.png",
    "images/project3/b.png",
    "images/project3/c.png",
    
  ],
},  
  {
    title: "Personal Site",
    description: "This fully responsive personal website highlights my skills with sections like About Me, Skills, Projects, Resume, and Contact. Built using HTML, CSS, Bootstrap and JavaScript, it adapts seamlessly across devices. The project helped me improve my web development and design skills.",
    skill:"html, css, js, bootstrap, emailjs, git",
    category: "Web",
    // client: "ABC Tech",
    date: "18 January, 2025",
    url: "https://ankush-resume.onrender.com/",
    images: [
      "images/project4/a.png",
    "images/project4/b.png",
    "images/project4/c.png",
    
  ],
},  
{
      title: "Hotel Reservation Cancellation Analysis and Report Creation",
      description: " This project involves exploratory data analysis (EDA) on hotel reservation data to uncover patterns behind booking cancellations. Using Python, Pandas, Matplotlib, and Seaborn, key insights were drawn from features like lead time, customer type, market segment, and more. The analysis identified trends in cancellation behavior, peak booking periods, and customer preferences. A detailed report was created to support data-driven decision-making for reducing cancellations and improving customer retention.",
      skill:"python, numpy, pandas, matplotlib, seaborn",
      category: "Analysis",
      // client: "Practice",
      date: "June,2024",
      url: " https://www.linkedin.com/posts/ankush-parmar-997640322_datascience-python-dataanalysis-activity-7233786131023097856-BIYa?utm_source=share&utm_medium=member_desktop",
      images: [
        "images/project5/a.png",
        "images/project5/b.png",
        "images/project5/c.png",
      ],
    },
 {
    title: "HR Analytics Dashboard",
    description: "Designed an Attrition Rate Analysis module within an HR Analytics Dashboard using Power BI. Provided insights into employee turnover trends, key reasons for attrition, and retention patterns. Utilized DAX calculations to track attrition rates by department, tenure, and gender. Enabled HR teams to identify risks and implement targeted retention strategies.",
    skill:"python, numpy, pandas, power bi",
    category: "Analysis",
    // client: "ABC Tech",
    date: "30 July, 2024",
    url: "http://www.project2.com",
    images: [
      "images/project6/a.png",
    "images/project6/b.png",
    "images/project6/c.png",
    ],
  },
  {
    title: "Portfolio website",
    description: "This fully responsive portfolio website showcases my skills with sections like About Me, Skills, Projects, and Contact. Built using HTML, CSS, and JavaScript, it adapts across all devices. The project enhanced my web development and responsive design skills.",
    skill:"html, css, js, git",
    category: "Web",
    // client: "ABC Tech",
    date: "27 August, 2024",
    url: "https://portfolio-tb9s.onrender.com/",
    images: [
      "images/project7/a.png",
      "images/project7/b.png",
      "images/project7/c.png",
    ],
  },
 
  
  
      
        {
          title: "Analog Clock",
          description: "Created an analog clock using HTML, CSS, and JavaScript. Implemented dynamic hour, minute, and second hands with real-time updates for accurate time display.",
          skill:"html, css, js",
          category: "Web",
          // client: "ABC Tech",
          date: "15 January, 2025",
          url: "http://www.project2.com",
          images: [
            "images/project8/a.png",
          "images/project8/b.png",
          "images/project8/c.png",
          ],
        },
  {
    title: "V Card",
    description: "Developed a responsive virtual business card using HTML, CSS, and JavaScript. Features dynamic contact details, social media links, and a sleek design for accessibility.",
    skill:"html, css",
    category: "Web",
    // client: "ABC Tech",
    date: "17 January, 2025",
    url: "http://www.project2.com",
    images: [
    "images/project9/a.png",
    "images/project9/b.png",
    "images/project9/c.png",
    ],
  }
    // Add more projects as needed
  ];
  let currentImageIndex = 0;
let autoSlideInterval;

function openModal(index) {
  const project = projects[index];
  const modal = document.getElementById("projectModal");
  modal.style.display = "flex";

  // Set project-specific data dynamically
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectDescription").textContent = project.description;
  document.getElementById("projectSkill").textContent = project.skill;
  document.getElementById("projectCategory").textContent = project.category;
  document.getElementById("projectClient").textContent = project.client;
  document.getElementById("projectDate").textContent = project.date;

  const projectUrl = document.getElementById("projectUrl");
  projectUrl.textContent = "Visit";
  projectUrl.href = project.url;

  const images = project.images;

  // Populate carousel images
  const carouselImages = document.querySelectorAll(".carousel-image");
  carouselImages.forEach((img, idx) => {
    img.src = images[idx] || ""; // Assign image or leave empty if not available
    img.style.opacity = idx === 0 ? "1" : "0"; // Ensure only the first image is visible initially
  });

  // Update carousel indicators
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((ind, idx) => {
    ind.classList.toggle("active", idx === 0); // Set first indicator active
  });

  currentImageIndex = 0; // Reset current image index to 0

  // Start auto-slide
  startAutoSlide(images);
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none"; // Hide modal

  // Stop auto-slide
  stopAutoSlide();
}

function startAutoSlide(images) {
  autoSlideInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Move to the next image, loop back to 0
    showImage(currentImageIndex, images);
  }, 4000); // 4 seconds interval
}


function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Clear the interval
}



// function resumeAutoSlide(images) {
//   startAutoSlide(images); // Resume auto-slide
// }

// // Add play/pause buttons in the modal HTML
// document.getElementById('playButton').addEventListener('click', () => resumeAutoSlide(project.images));
// document.getElementById('pauseButton').addEventListener('click', pauseAutoSlide);






function showImage(index, images) {
  const imageElements = document.querySelectorAll(".carousel-image");
  imageElements.forEach((img, idx) => {
    img.style.opacity = idx === index ? "1" : "0";
    if (idx === index) img.src = images[index];
  });
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((ind, idx) => {
    ind.classList.toggle("active", idx === index);
  });
  currentImageIndex = index;
}

/* Link Overlay Functionality */

// Function to open the link overlay
// function openLinkOverlay() {
//   const overlay = document.getElementById("linkOverlay");
//   const projectHeading = document.getElementById("projectHeading");
//   const projectDescriptionOverlay = document.getElementById("projectDescriptionOverlay");
//   const projectLink = document.getElementById("projectLink");

//   // Set the content dynamically (you can retrieve this from the current project)
//   const projectTitle = document.getElementById("projectTitle").textContent;
//   const projectDescription = document.getElementById("projectDescription").textContent;
//   const projectUrl = document.getElementById("projectUrl").href;

//   projectHeading.textContent = projectTitle;
//   projectDescriptionOverlay.textContent = projectDescription;
//   projectLink.href = projectUrl;

//   overlay.style.display = "flex"; // Show the overlay
// }

// // Function to close the link overlay
// function closeLinkOverlay() {
//   const overlay = document.getElementById("linkOverlay");
//   overlay.style.display = "none"; // Hide the overlay
// }

// // Add event listeners for closing the link overlay
// document.getElementById("closeLinkIcon").addEventListener("click", closeLinkOverlay);

// // Close overlay when clicking outside the content
// document.getElementById("linkOverlay").addEventListener("click", (event) => {
//   if (event.target.id === "linkOverlay") {
//     closeLinkOverlay();
//   }
// });










































// Select the h3 element inside the project-box
// const projectBoxHeading = document.querySelector(".project-box h3");

// Get the text content from the h3
// const projectBoxText = projectBoxHeading.textContent;

// Update the h3 in the #imageDescription with the retrieved text
// Select the h3 element by its ID
// const hee = document.getElementById("hee");

// Update the text content dynamically
// hee.textContent = projectBoxText;







  function zoomImage(imageSrc) {
    const zoomedImage = document.getElementById("zoomedImage");
    const zoomOverlay = document.getElementById("zoomOverlay");
    const claa = document.getElementById("claa");

    // Set the zoomed image source and display the overlay
    zoomedImage.src = imageSrc;
    zoomOverlay.style.display = "flex"; // Show the overlay
    claa.style.display = "flex"; // Show the claa background

     
}

function closeZoom() {
    const zoomOverlay = document.getElementById("zoomOverlay");
    const claa = document.getElementById("claa");

    // Hide the overlay and reset zoomed image
    zoomOverlay.style.display = "none";
    claa.style.display = "none";
}

// Handle overlay click to close only if the click is outside the image and its description
document.getElementById("claa").addEventListener("click", function (event) {
    const zoomedImage = document.getElementById("zoomedImage");
    const imageDescription = document.getElementById("imageDescription"); // Add if you have a description element

    // Close zoom only if the click is on the overlay (not the image or description)
    if (
        event.target.id === "claa" || 
        event.target.id === "zoomOverlay"
    ) {
        closeZoom();
    }
});

// Handle cross icon click
document.getElementById("closeIcon").addEventListener("click", function () {
    closeZoom();
});

// Prevent click propagation for the zoomed image
document.getElementById("zoomedImage").addEventListener("click", function (event) {
    event.stopPropagation(); // Stops the click event from bubbling to the overlay
});



































//   filter buttons
// Handle button click and project filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        const projects = document.querySelectorAll('.project-box');
        
        // Show/hide projects based on the filter
        projects.forEach(project => {
            if (filter === 'all' || project.dataset.category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});







// Existing code...

// Filter buttons functionality with smooth animations and sexy effects// Filter buttons functionality with smooth animations and sexy effects
// Initially set the 'All' filter button to active when the page loads
window.addEventListener('load', () => {
  const allButton = document.querySelector('[data-filter="all"]');
  if (allButton) {
      allButton.classList.add('active');
  }
  
  // Show all project boxes initially when the page loads
  const projects = document.querySelectorAll('.project-box');
  projects.forEach(project => {
      project.classList.add('show', 'popEffect');
  });
});

// Filter buttons functionality with smooth animations
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
      // Remove active class from all buttons
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      const projects = document.querySelectorAll('.project-box');
      
      // Initially, show all project boxes with smooth animation
      projects.forEach(project => {
          project.classList.remove('popEffect'); // Remove existing pop effect

          // Add a slight delay for smooth transition
          setTimeout(() => {
              if (filter === 'all' || project.dataset.category === filter) {
                  project.classList.add('show', 'popEffect');
              } else {
                  project.classList.remove('show');
              }
          }, 100); // Short delay before animation starts
      });
  });
});
